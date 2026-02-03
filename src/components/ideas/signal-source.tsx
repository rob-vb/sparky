import { ExternalLink } from 'lucide-react';
import type { SignalSource as SignalSourceType } from '@/types';

const platformLabels: Record<SignalSourceType['platform'], string> = {
  reddit: 'Reddit',
  hacker_news: 'HN',
  product_hunt: 'PH',
  github: 'GitHub',
};

interface SignalSourceProps {
  source: SignalSourceType;
}

export function SignalSource({ source }: SignalSourceProps) {
  return (
    <div className="border border-border p-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-muted-foreground">
            {platformLabels[source.platform]}
          </span>
          {source.score !== undefined && (
            <span className="text-xs text-muted-foreground">
              · {source.score} pts
            </span>
          )}
        </div>
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <h4 className="text-sm font-medium mb-1">{source.title}</h4>

      {source.snippet && (
        <p className="text-xs text-muted-foreground italic">
          &ldquo;{source.snippet}&rdquo;
        </p>
      )}
    </div>
  );
}
