import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import type { Idea } from '@/types';

interface IdeaCardProps {
  idea: Idea;
}

export function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <Link href={`/ideas/${idea.slug}`} className="group block">
      <article className="border border-border p-6 hover:border-primary/50 transition-colors cursor-pointer">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="font-display text-2xl font-black text-primary">
            #{String(idea.ideaNumber).padStart(3, '0')}
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {idea.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {idea.problemStatement}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">
            {new Date(idea.publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <div className="flex items-center gap-1 text-sm text-primary">
            <Zap className="h-3 w-3" />
            <span>{idea.claimsCount}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
