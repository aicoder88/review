export const productImages = {
  'purrify': '/images/products/purrify.webp',
  'dr-elseys-cat-attract': '/images/products/dr-elseys-cat-attract.webp',
  'dr-elseys-ultra': '/images/products/dr-elseys-ultra.webp',
  'sustainably-yours': '/images/products/sustainably-yours.jpg',
  'boxiecat-premium': '/images/products/boxiecat-premium.webp',
  'worlds-best': '/images/products/worlds-best.jpg',
  'naturally-fresh': '/images/products/naturally-fresh.jpg',
  'catalyst': '/images/products/catalyst.webp',
  'prettylitter': '/images/products/prettylitter.jpg',
  'arm-hammer-clump-seal': '/images/products/arm-hammer-clump-seal.png',
  'hardball': '/images/products/hardball.jpg',
  'arm-hammer-super-scoop': '/images/products/arm-hammer-super-scoop.jpg',
  'feline-pine': '/images/products/feline-pine.png',
  'fresh-step': '/images/products/fresh-step.png',
  'frisco': '/images/products/frisco.avif',
  'tidy-cats': '/images/products/tidy-cats.png',
  'tuft-paw': '/images/products/tuft-paw.webp',
  'okocat-paper-pellet': '/images/products/okocat-paper-pellet.jpg',
} as const;

export type ProductImageSlug = keyof typeof productImages;

export function getProductImage(slug: string) {
  return productImages[slug as ProductImageSlug] ?? productImages['dr-elseys-ultra'];
}

export function getProductImageSet(slug: string) {
  return [getProductImage(slug)];
}
