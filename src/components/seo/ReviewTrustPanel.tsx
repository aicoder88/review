import Link from 'next/link';
import { BadgeCheck, BookOpenText, Microscope } from 'lucide-react';
import { formatCatalogDate } from '@/lib/product-catalog';
import { methodologyPath, reviewTeamPath } from '@/lib/site';

interface ReviewTrustPanelProps {
  reviewedOn?: string;
}

export function ReviewTrustPanel({ reviewedOn }: ReviewTrustPanelProps) {
  return (
    <div className="mb-8 rounded-2xl border border-border bg-white/80 p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="flex items-start gap-3">
          <BadgeCheck className="mt-0.5 h-5 w-5 text-primary" />
          <div className="text-sm">
            <div className="font-semibold text-foreground">Reviewed by editorial team</div>
            <Link href={reviewTeamPath} prefetch={false} className="text-primary hover:underline">
              ReviewCatLitter Team
            </Link>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Microscope className="mt-0.5 h-5 w-5 text-primary" />
          <div className="text-sm">
            <div className="font-semibold text-foreground">Hands-on testing</div>
            <div className="text-muted-foreground">No sponsored placements or free products</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <BookOpenText className="mt-0.5 h-5 w-5 text-primary" />
          <div className="text-sm">
            <div className="font-semibold text-foreground">
              {reviewedOn ? (
                <time dateTime={reviewedOn}>Last reviewed {formatCatalogDate(reviewedOn)}</time>
              ) : (
                'Editorial standards'
              )}
            </div>
            <Link href={methodologyPath} prefetch={false} className="text-primary hover:underline">
              See the testing methodology
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
