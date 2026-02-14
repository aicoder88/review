import Link from 'next/link';
import Image from 'next/image';

interface RelatedArticle {
  title: string;
  url: string;
  description: string;
  image?: string;
  type: 'review' | 'guide' | 'category';
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
  title?: string;
}

const typeLabels = {
  review: 'Product Review',
  guide: 'Guide',
  category: 'Category'
};

export function RelatedArticles({ articles, title = "Related Articles" }: RelatedArticlesProps) {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.url}
            prefetch={false}
            className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
          >
            {article.image && (
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            )}
            <div className="p-5">
              <div className="text-xs font-bold text-primary mb-2 uppercase">
                {typeLabels[article.type]}
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
