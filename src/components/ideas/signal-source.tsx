import { ExternalLink, TrendingUp } from 'lucide-react';
import type { SignalSource as SignalSourceType } from '@/types';

const platformConfig: Record<
  SignalSourceType['platform'],
  { label: string; bgColor: string; textColor: string }
> = {
  reddit: { label: 'Reddit', bgColor: 'bg-orange-500/20', textColor: 'text-orange-400' },
  hacker_news: { label: 'Hacker News', bgColor: 'bg-orange-400/20', textColor: 'text-orange-300' },
  product_hunt: { label: 'Product Hunt', bgColor: 'bg-orange-600/20', textColor: 'text-orange-400' },
  github: { label: 'GitHub', bgColor: 'bg-secondary/20', textColor: 'text-secondary' },
};

interface SignalSourceProps {
  source: SignalSourceType;
}

export function SignalSource({ source }: SignalSourceProps) {
  const config = platformConfig[source.platform];

  return (
    <div className="border border-border bg-card p-5 hover:border-secondary/50 hover:glow-cyan transition-all">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <span className={`${config.bgColor} ${config.textColor} text-xs font-bold px-2 py-1 border border-current/30`}>
            {config.label}
          </span>
          {source.score !== undefined && (
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4" />
              {source.score} points
            </span>
          )}
        </div>
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-secondary transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="sr-only">Open source</span>
        </a>
      </div>

      <h4 className="font-bold mb-2 leading-snug">{source.title}</h4>

      {source.snippet && (
        <p className="text-sm text-muted-foreground italic border-l-2 border-secondary/30 pl-3">
          &ldquo;{source.snippet}&rdquo;
        </p>
      )}
    </div>
  );
}
