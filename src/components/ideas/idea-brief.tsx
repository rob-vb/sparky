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
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="font-display text-6xl md:text-7xl font-black text-primary">
            #{String(idea.ideaNumber).padStart(3, '0')}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight">
          {idea.title}
        </h1>

        <p className="text-muted-foreground mb-8">
          Published{' '}
          {new Date(idea.publishedAt).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <ClaimButton initialCount={idea.claimsCount} />
          <ShareButtons idea={idea} />
        </div>
      </header>

      {/* The Problem */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display text-xs font-bold tracking-wider text-secondary uppercase">
            01
          </span>
          <h2 className="font-display text-2xl font-bold">The Problem</h2>
        </div>
        <div className="pl-8 border-l-3 border-secondary">
          <p className="text-lg leading-relaxed">{idea.problemStatement}</p>
        </div>
      </section>

      {/* Who Wants This */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display text-xs font-bold tracking-wider text-secondary uppercase">
            02
          </span>
          <h2 className="font-display text-2xl font-bold">Who Wants This</h2>
        </div>
        <div className="pl-8 border-l-3 border-secondary">
          <p className="text-lg leading-relaxed">{idea.targetAudience}</p>
        </div>
      </section>

      {/* What Exists */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display text-xs font-bold tracking-wider text-secondary uppercase">
            03
          </span>
          <h2 className="font-display text-2xl font-bold">What Exists (And Where It Falls Short)</h2>
        </div>
        <div className="space-y-4 mt-6">
          {idea.existingSolutions.map((solution, index) => (
            <div key={index} className="border-3 border-foreground p-6 bg-card">
              <h3 className="font-display text-lg font-bold mb-2">{solution.name}</h3>
              <p className="text-muted-foreground mb-3">
                {solution.description}
              </p>
              <div className="inline-block px-3 py-1 bg-destructive/10 border-2 border-destructive text-destructive text-sm font-medium">
                Gap: {solution.gap}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suggested MVP */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display text-xs font-bold tracking-wider text-secondary uppercase">
            04
          </span>
          <h2 className="font-display text-2xl font-bold">Suggested MVP</h2>
        </div>
        <div className="border-3 border-foreground bg-foreground text-background p-6 md:p-8">
          <pre className="font-mono text-sm whitespace-pre-wrap leading-relaxed">
            {idea.suggestedMvp}
          </pre>
        </div>
      </section>

      {/* Signal Sources */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display text-xs font-bold tracking-wider text-secondary uppercase">
            05
          </span>
          <h2 className="font-display text-2xl font-bold">Signal Sources</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          These are the real conversations and posts that sparked this idea.
        </p>
        <div className="space-y-4">
          {idea.signalSources.map((source, index) => (
            <SignalSource key={index} source={source} />
          ))}
        </div>
      </section>
    </article>
  );
}
