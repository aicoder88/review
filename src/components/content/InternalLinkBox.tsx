import Link from 'next/link';

interface LinkSuggestion {
  text: string;
  url: string;
  context: 'review' | 'guide' | 'category' | 'purrify';
}

interface InternalLinkBoxProps {
  links: LinkSuggestion[];
  title?: string;
}

export function InternalLinkBox({ links, title = "Related Resources" }: InternalLinkBoxProps) {
  return (
    <div className="border-l-4 border-primary bg-primary/5 rounded-r-xl p-6 my-8">
      <h3 className="font-bold text-lg mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group"
            >
              <span className="group-hover:translate-x-1 transition-transform">→</span>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
