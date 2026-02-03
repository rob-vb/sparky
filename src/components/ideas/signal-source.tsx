import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { SignalSource as SignalSourceType } from '@/types';

const platformConfig: Record<
  SignalSourceType['platform'],
  { label: string; color: string }
> = {
  reddit: { label: 'Reddit', color: 'text-orange-500' },
  hacker_news: { label: 'Hacker News', color: 'text-orange-400' },
  product_hunt: { label: 'Product Hunt', color: 'text-orange-600' },
  github: { label: 'GitHub', color: 'text-gray-400' },
};

interface SignalSourceProps {
  source: SignalSourceType;
}

export function SignalSource({ source }: SignalSourceProps) {
  const config = platformConfig[source.platform];

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={config.color}>
            {config.label}
          </Badge>
          {source.score !== undefined && (
            <span className="text-sm text-muted-foreground">
              {source.score} points
            </span>
          )}
        </div>
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="sr-only">Open source</span>
        </a>
      </div>

      <h4 className="font-medium mb-1">{source.title}</h4>

      {source.snippet && (
        <p className="text-sm text-muted-foreground italic">&quot;{source.snippet}&quot;</p>
      )}
    </div>
  );
}
