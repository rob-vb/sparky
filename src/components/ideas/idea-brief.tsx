import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ClaimButton } from './claim-button';
import { ShareButtons } from './share-buttons';
import { SignalSource } from './signal-source';
import type { Idea } from '@/types';

interface IdeaBriefProps {
  idea: Idea;
}

export function IdeaBrief({ idea }: IdeaBriefProps) {
  return (
    <article className="max-w-3xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary" className="font-mono text-sm">
            #{String(idea.ideaNumber).padStart(3, '0')}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {new Date(idea.publishedAt).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-6 md:text-4xl">{idea.title}</h1>

        <div className="flex flex-wrap items-center gap-3">
          <ClaimButton initialCount={idea.claimsCount} />
          <ShareButtons idea={idea} />
        </div>
      </header>

      <Separator className="my-8" />

      {/* The Problem */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
          The Problem
        </h2>
        <p className="text-lg leading-relaxed">{idea.problemStatement}</p>
      </section>

      <Separator className="my-8" />

      {/* Who Wants This */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Who Wants This
        </h2>
        <p className="text-lg leading-relaxed">{idea.targetAudience}</p>
      </section>

      <Separator className="my-8" />

      {/* What Exists */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
          What Exists (And Where It Falls Short)
        </h2>
        <div className="space-y-4">
          {idea.existingSolutions.map((solution, index) => (
            <div key={index} className="rounded-lg border border-border p-4">
              <h3 className="font-semibold mb-1">{solution.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {solution.description}
              </p>
              <p className="text-sm">
                <span className="font-medium text-destructive">Gap:</span>{' '}
                {solution.gap}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Suggested MVP */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Suggested MVP
        </h2>
        <div className="rounded-lg border border-border bg-card p-4">
          <pre className="font-mono text-sm whitespace-pre-wrap leading-relaxed">
            {idea.suggestedMvp}
          </pre>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Signal Sources */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Signal Sources
        </h2>
        <div className="space-y-4">
          {idea.signalSources.map((source, index) => (
            <SignalSource key={index} source={source} />
          ))}
        </div>
      </section>
    </article>
  );
}
