import Link from 'next/link';
import { Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { Idea } from '@/types';

interface IdeaCardProps {
  idea: Idea;
}

export function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <Link href={`/ideas/${idea.slug}`}>
      <Card className="h-full bg-card border-border transition-all hover:border-primary/50 hover:-translate-y-1">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between gap-2 mb-2">
            <Badge variant="secondary" className="font-mono">
              #{String(idea.ideaNumber).padStart(3, '0')}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {new Date(idea.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </div>
          <h3 className="font-bold leading-tight">{idea.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {idea.problemStatement}
          </p>
          <div className="flex items-center gap-1 text-sm text-accent">
            <Zap className="h-4 w-4" />
            <span>
              {idea.claimsCount} {idea.claimsCount === 1 ? 'claim' : 'claims'}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
