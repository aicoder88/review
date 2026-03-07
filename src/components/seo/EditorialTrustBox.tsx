import Link from 'next/link';
import { BadgeCheck, CalendarClock, FlaskConical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatSiteDate, methodologyPath, reviewTeamPath } from '@/lib/site';

interface EditorialTrustBoxProps {
  updatedOn?: string;
  summary: string;
  className?: string;
}

export function EditorialTrustBox({
  updatedOn,
  summary,
  className,
}: EditorialTrustBoxProps) {
  return (
    <div className={cn('rounded-2xl border border-border bg-secondary/20 p-5', className)}>
      <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-foreground">
        <span className="inline-flex items-center gap-2">
          <BadgeCheck className="h-4 w-4 text-primary" />
          ReviewCatLitter editorial team
        </span>
        {updatedOn ? (
          <span className="inline-flex items-center gap-2 text-muted-foreground">
            <CalendarClock className="h-4 w-4 text-primary" />
            Updated {formatSiteDate(updatedOn)}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{summary}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
        <Link href={reviewTeamPath} prefetch={false} className="inline-flex items-center gap-2 text-primary hover:underline">
          <BadgeCheck className="h-4 w-4" />
          Editorial standards
        </Link>
        <Link href={methodologyPath} prefetch={false} className="inline-flex items-center gap-2 text-primary hover:underline">
          <FlaskConical className="h-4 w-4" />
          Testing methodology
        </Link>
      </div>
    </div>
  );
}
