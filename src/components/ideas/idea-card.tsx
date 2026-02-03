import Link from 'next/link';
import { Zap, ArrowUpRight } from 'lucide-react';
import type { Idea } from '@/types';

interface IdeaCardProps {
  idea: Idea;
}

export function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <Link href={`/ideas/${idea.slug}`} className="group block">
      <article className="h-full border-3 border-foreground bg-card p-6 transition-all hover:shadow-[6px_6px_0_0_#F9C74F] hover:-translate-x-[3px] hover:-translate-y-[3px]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="font-display text-3xl font-black text-primary">
            #{String(idea.ideaNumber).padStart(3, '0')}
          </span>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold mb-3 leading-tight group-hover:text-secondary transition-colors">
          {idea.title}
        </h3>

        {/* Problem */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
          {idea.problemStatement}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-muted">
          <span className="text-xs text-muted-foreground">
            {new Date(idea.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <div className="flex items-center gap-1 text-sm font-medium text-primary">
            <Zap className="h-4 w-4" />
            <span>{idea.claimsCount}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
