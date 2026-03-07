interface ItemListSchemaItem {
  name: string;
  url: string;
}

interface ItemListSchemaProps {
  name: string;
  url: string;
  items: ItemListSchemaItem[];
}

export function ItemListSchema({ name, url, items }: ItemListSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
