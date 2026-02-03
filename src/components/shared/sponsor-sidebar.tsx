import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface Sponsor {
  name: string;
  tagline: string;
  url: string;
  icon: string;
}

// Placeholder sponsors - replace with real data
const sponsors: Sponsor[] = [
  { name: 'Your Ad Here', tagline: 'Reach builders daily', url: '/sponsor', icon: '✦' },
  { name: 'Your Ad Here', tagline: 'Reach builders daily', url: '/sponsor', icon: '✦' },
  { name: 'Your Ad Here', tagline: 'Reach builders daily', url: '/sponsor', icon: '✦' },
];

interface SponsorSidebarProps {
  side: 'left' | 'right';
}

export function SponsorSidebar({ side }: SponsorSidebarProps) {
  return (
    <aside
      className={`hidden xl:flex flex-col gap-3 fixed top-24 ${
        side === 'left' ? 'left-4' : 'right-4'
      } w-36`}
    >
      {sponsors.map((sponsor, index) => (
        <a
          key={index}
          href={sponsor.url}
          target={sponsor.url.startsWith('/') ? undefined : '_blank'}
          rel={sponsor.url.startsWith('/') ? undefined : 'noopener noreferrer'}
          className="group block p-3 border border-border bg-card/50 hover:border-primary/30 transition-colors text-center"
        >
          <span className="text-2xl mb-2 block">{sponsor.icon}</span>
          <span className="text-xs font-bold block mb-1 group-hover:text-primary transition-colors">
            {sponsor.name}
          </span>
          <span className="text-[10px] text-muted-foreground block leading-tight">
            {sponsor.tagline}
          </span>
        </a>
      ))}

      {side === 'right' && (
        <Link
          href="/sponsor"
          className="mt-2 p-2 text-center text-[10px] text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="w-3 h-3 mx-auto mb-1" />
          Advertise
          <span className="block text-primary">3 spots left</span>
        </Link>
      )}
    </aside>
  );
}
