import { ExternalLink } from 'lucide-react';

interface SponsorAdProps {
  variant?: 'banner' | 'inline' | 'sidebar';
  className?: string;
}

export function SponsorAd({ variant = 'banner', className = '' }: SponsorAdProps) {
  // Placeholder sponsor data - would be fetched from ad provider
  const sponsor = {
    name: 'Your Company Here',
    tagline: 'Reach thousands of builders and founders',
    cta: 'Become a sponsor',
    url: '/sponsor',
  };

  if (variant === 'sidebar') {
    return (
      <div className={`sponsor-ad border border-border bg-card/50 p-4 ${className}`}>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
          Sponsor
        </div>
        <div className="space-y-3">
          <p className="font-medium text-sm">{sponsor.name}</p>
          <p className="text-xs text-muted-foreground">{sponsor.tagline}</p>
          <a
            href={sponsor.url}
            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {sponsor.cta}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`sponsor-ad border border-border bg-card/50 p-4 flex items-center justify-between gap-4 ${className}`}>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-muted rounded flex items-center justify-center text-muted-foreground text-xs font-bold">
            AD
          </div>
          <div>
            <p className="font-medium text-sm">{sponsor.name}</p>
            <p className="text-xs text-muted-foreground">{sponsor.tagline}</p>
          </div>
        </div>
        <a
          href={sponsor.url}
          className="text-xs font-medium text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
        >
          Learn more →
        </a>
      </div>
    );
  }

  // Default: banner variant
  return (
    <div className={`sponsor-ad border border-border bg-card/30 backdrop-blur-sm ${className}`}>
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 border border-border rounded flex items-center justify-center">
              <span className="text-xs font-bold text-muted-foreground">AD</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold">{sponsor.name}</p>
              <p className="text-sm text-muted-foreground">{sponsor.tagline}</p>
            </div>
          </div>
          <a
            href={sponsor.url}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            {sponsor.cta}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
