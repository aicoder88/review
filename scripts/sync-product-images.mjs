import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const manifestPath = path.join(__dirname, 'product-image-manifest.json');
const publicDir = path.join(repoRoot, 'public', 'images', 'products');
const productImageModulePath = path.join(repoRoot, 'src', 'lib', 'product-images.ts');

const browserHeaders = {
  'user-agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.9',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  referer: 'https://www.google.com/',
};

const imageHeaders = {
  'user-agent': browserHeaders['user-agent'],
  accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
};

const contentTypeExtensions = {
  'image/avif': '.avif',
  'image/jpeg': '.jpg',
  'image/jpg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/gif': '.gif',
  'image/svg+xml': '.svg',
};

const htmlEntities = new Map([
  ['amp', '&'],
  ['quot', '"'],
  ['apos', "'"],
  ['lt', '<'],
  ['gt', '>'],
  ['nbsp', ' '],
]);

function decodeHtml(value) {
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, entity) => {
    if (entity.startsWith('#x')) {
      return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
    }

    if (entity.startsWith('#')) {
      return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
    }

    return htmlEntities.get(entity.toLowerCase()) ?? match;
  });
}

function toAbsoluteUrl(value, baseUrl) {
  if (!value) {
    return null;
  }

  try {
    return new URL(decodeHtml(value), baseUrl).toString();
  } catch {
    return null;
  }
}

function inferExtension(url, contentType) {
  const normalizedContentType = contentType?.split(';')[0].toLowerCase() ?? '';
  const contentTypeExt = contentTypeExtensions[normalizedContentType];
  const pathname = new URL(url).pathname;
  const ext = path.extname(pathname);

  if (contentTypeExt) {
    return contentTypeExt;
  }

  if (ext) {
    return ext.toLowerCase();
  }

  return '.jpg';
}

function isLikelyPlaceholder(url) {
  return /logo|sprite|icon|favicon|badge|flag|analytics|pixel|tracking|placeholder/i.test(url);
}

function collectImageCandidates(html, pageUrl) {
  const candidates = [];

  for (const match of html.matchAll(
    /<meta[^>]+(?:property|name)=['"]([^'"]+)['"][^>]+content=['"]([^'"]+)['"][^>]*>/gi,
  )) {
    const key = match[1].toLowerCase();
    const imageUrl = toAbsoluteUrl(match[2], pageUrl);

    if (!imageUrl || !/(og:image|twitter:image)/.test(key) || isLikelyPlaceholder(imageUrl)) {
      continue;
    }

    candidates.push({
      url: imageUrl,
      score: key === 'og:image' ? 90 : 80,
    });
  }

  for (const match of html.matchAll(
    /<script[^>]*type=['"]application\/ld\+json['"][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    const raw = match[1].trim();

    try {
      const parsed = JSON.parse(raw);
      const queue = Array.isArray(parsed) ? [...parsed] : [parsed];

      while (queue.length > 0) {
        const current = queue.pop();

        if (!current || typeof current !== 'object') {
          continue;
        }

        if (Array.isArray(current)) {
          queue.push(...current);
          continue;
        }

        if (Array.isArray(current['@graph'])) {
          queue.push(...current['@graph']);
        }

        const typeLabel = Array.isArray(current['@type'])
          ? current['@type'].join(' ')
          : String(current['@type'] ?? '');
        const baseScore = /Product/i.test(typeLabel) ? 130 : 95;

        const pushImage = (value) => {
          if (!value) {
            return;
          }

          if (typeof value === 'string') {
            const imageUrl = toAbsoluteUrl(value, pageUrl);

            if (imageUrl && !isLikelyPlaceholder(imageUrl)) {
              candidates.push({
                url: imageUrl,
                score: baseScore,
              });
            }

            return;
          }

          if (Array.isArray(value)) {
            value.forEach(pushImage);
            return;
          }

          if (typeof value === 'object') {
            pushImage(value.url ?? value.contentUrl ?? value.thumbnailUrl);
          }
        };

        pushImage(current.image);
        pushImage(current.primaryImageOfPage);
        pushImage(current.thumbnailUrl);
      }
    } catch {
      continue;
    }
  }

  for (const match of html.matchAll(/<img[^>]+(?:src|data-src)=['"]([^'"]+)['"][^>]*>/gi)) {
    const imageUrl = toAbsoluteUrl(match[1], pageUrl);

    if (!imageUrl || isLikelyPlaceholder(imageUrl)) {
      continue;
    }

    let score = 40;

    if (/front|product|pack|bag|litter|clump|premium|multi-cat|dust|paper|pellet/i.test(imageUrl)) {
      score += 30;
    }

    candidates.push({ url: imageUrl, score });
  }

  return candidates
    .sort((left, right) => right.score - left.score)
    .filter((candidate, index, all) => all.findIndex((item) => item.url === candidate.url) === index);
}

async function resolveImageUrl(entry) {
  if (entry.sourceImageUrl) {
    return entry.sourceImageUrl;
  }

  const response = await fetch(entry.sourcePageUrl, { headers: browserHeaders });

  if (!response.ok) {
    throw new Error(`Source page fetch failed with ${response.status} for ${entry.sourcePageUrl}`);
  }

  const html = await response.text();
  const candidates = collectImageCandidates(html, entry.sourcePageUrl);

  if (candidates.length === 0) {
    throw new Error(`No image candidates found for ${entry.slug}`);
  }

  return candidates[0].url;
}

async function downloadImage(entry, imageUrl) {
  const response = await fetch(imageUrl, {
    headers: {
      ...imageHeaders,
      referer: entry.sourcePageUrl,
    },
  });

  if (!response.ok) {
    throw new Error(`Image download failed with ${response.status} for ${imageUrl}`);
  }

  const contentType = response.headers.get('content-type');
  const ext = inferExtension(imageUrl, contentType);
  const buffer = Buffer.from(await response.arrayBuffer());
  const fileName = `${entry.slug}${ext}`;
  const absolutePath = path.join(publicDir, fileName);
  const relativePath = `/images/products/${fileName}`;
  const currentFiles = await fs.readdir(publicDir).catch(() => []);

  await Promise.all(
    currentFiles
      .filter((file) => file.startsWith(`${entry.slug}.`) && file !== fileName)
      .map((file) => fs.rm(path.join(publicDir, file), { force: true })),
  );

  await fs.writeFile(absolutePath, buffer);

  return {
    fileName,
    relativePath,
    absolutePath,
  };
}

function addImportIfMissing(fileContents, importStatement) {
  if (fileContents.includes(importStatement)) {
    return fileContents;
  }

  const importMatches = [...fileContents.matchAll(/^import .*;$/gm)];

  if (importMatches.length === 0) {
    return `${importStatement}\n${fileContents}`;
  }

  const lastImport = importMatches[importMatches.length - 1];
  const insertAt = lastImport.index + lastImport[0].length;
  return `${fileContents.slice(0, insertAt)}\n${importStatement}${fileContents.slice(insertAt)}`;
}

function rewriteReviewPage(fileContents, slug) {
  let next = addImportIfMissing(
    fileContents,
    "import { getProductImage, getProductImageSet } from '@/lib/product-images';",
  );

  next = next.replace(
    /(const reviewData: ReviewData = \{[\s\S]*?\n\s*image:\s*)(?:"[^"]*"|'[^']*')/,
    `$1getProductImage('${slug}')`,
  );

  next = next.replace(
    /(const productSchemaData = \{[\s\S]*?\n\s*image:\s*)(?:\[[\s\S]*?\]|"[^"]*"|'[^']*')/,
    `$1getProductImageSet('${slug}')`,
  );

  next = next.replace(
    /(const articleSchemaData = \{[\s\S]*?\n\s*image:\s*)(?:"[^"]*"|'[^']*')/,
    `$1getProductImage('${slug}')`,
  );

  next = next.replace(
    /(verdict:\s*\{[\s\S]*?\n\s*)(priceCheckUrl:\s*)/,
    (match, verdictBlock, priceCheckLine) => {
      if (/\n\s*\},\s*$/.test(verdictBlock)) {
        return `${verdictBlock}${priceCheckLine}`;
      }

      return `${verdictBlock}},\n    ${priceCheckLine.trimStart()}`;
    },
  );

  return next;
}

function rewriteCategoryPage(fileContents) {
  let next = addImportIfMissing(
    fileContents,
    "import { getProductImage } from '@/lib/product-images';",
  );

  next = next.replace(
    /(id:\s*"([^"]+)"[\s\S]{0,240}?image:\s*)(?:"[^"]*"|'[^']*')/g,
    (match, prefix, id) => `${prefix}getProductImage('${id}')`,
  );

  return next;
}

function rewriteProductCatalog(fileContents) {
  let next = fileContents;

  if (!next.startsWith("import { getProductImage } from '@/lib/product-images';")) {
    next = `import { getProductImage } from '@/lib/product-images';\n\n${next}`;
  }

  next = next.replace(
    /(id:\s*'([^']+)'[\s\S]{0,260}?image:\s*)(?:'[^']*'|"[^"]*")/g,
    (match, prefix, id) => `${prefix}getProductImage('${id}')`,
  );

  return next;
}

async function rewriteReferences(manifest) {
  const reviewDir = path.join(repoRoot, 'src', 'app', 'reviews');
  const categoryDir = path.join(repoRoot, 'src', 'app', 'categories');
  const reviewEntries = await fs.readdir(reviewDir, { withFileTypes: true });
  const categoryEntries = await fs.readdir(categoryDir, { withFileTypes: true });

  for (const entry of reviewEntries) {
    if (!entry.isDirectory() || entry.name.startsWith('[')) {
      continue;
    }

    const reviewFile = path.join(reviewDir, entry.name, 'page.tsx');
    const source = await fs.readFile(reviewFile, 'utf8');
    const rewritten = rewriteReviewPage(source, entry.name);

    if (rewritten !== source) {
      await fs.writeFile(reviewFile, rewritten);
    }
  }

  for (const entry of categoryEntries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const categoryFile = path.join(categoryDir, entry.name, 'page.tsx');
    const hasPage = await fs
      .access(categoryFile)
      .then(() => true)
      .catch(() => false);

    if (!hasPage) {
      continue;
    }

    const source = await fs.readFile(categoryFile, 'utf8');
    const rewritten = rewriteCategoryPage(source);

    if (rewritten !== source) {
      await fs.writeFile(categoryFile, rewritten);
    }
  }

  const productCatalogPath = path.join(repoRoot, 'src', 'lib', 'product-catalog.ts');
  const productCatalogSource = await fs.readFile(productCatalogPath, 'utf8');
  const productCatalogRewritten = rewriteProductCatalog(productCatalogSource);

  if (productCatalogRewritten !== productCatalogSource) {
    await fs.writeFile(productCatalogPath, productCatalogRewritten);
  }
}

async function writeImageModule(entries) {
  const lines = entries.map(
    (entry) =>
      `  '${entry.slug}': '${entry.relativePath}',`,
  );

  const fileContents = `export const productImages = {\n${lines.join('\n')}\n} as const;\n\nexport type ProductImageSlug = keyof typeof productImages;\n\nexport function getProductImage(slug: string) {\n  return productImages[slug as ProductImageSlug] ?? productImages['dr-elseys-ultra'];\n}\n\nexport function getProductImageSet(slug: string) {\n  return [getProductImage(slug)];\n}\n`;

  await fs.mkdir(path.dirname(productImageModulePath), { recursive: true });
  await fs.writeFile(productImageModulePath, fileContents);
}

async function main() {
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  const rewrite = process.argv.includes('--rewrite');
  const resolvedEntries = [];

  await fs.mkdir(publicDir, { recursive: true });

  for (const entry of manifest) {
    const imageUrl = await resolveImageUrl(entry);
    let outputPath = imageUrl;

    try {
      const saved = await downloadImage(entry, imageUrl);
      outputPath = saved.relativePath;
      console.log(`${entry.slug}: ${imageUrl} -> ${saved.relativePath}`);
    } catch (error) {
      console.warn(`${entry.slug}: keeping remote image ${imageUrl} (${error.message})`);
    }

    resolvedEntries.push({
      slug: entry.slug,
      imageUrl,
      sourcePageUrl: entry.sourcePageUrl,
      relativePath: outputPath,
    });
  }

  await writeImageModule(resolvedEntries);

  if (rewrite) {
    await rewriteReferences(manifest);
    console.log('Rewrote review, category, and catalog image references.');
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
