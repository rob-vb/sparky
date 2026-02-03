import { ClaimButton } from './claim-button';
import { ShareButtons } from './share-buttons';
import { SignalSource } from './signal-source';
import type { Idea } from '@/types';

interface IdeaBriefProps {
  idea: Idea;
}

export function IdeaBrief({ idea }: IdeaBriefProps) {
  return (
    <article className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-12">
        <span className="font-display text-4xl font-black text-primary">
          #{String(idea.ideaNumber).padStart(3, '0')}
        </span>

        <h1 className="text-2xl md:text-3xl font-black mt-4 mb-4 leading-tight">
          {idea.title}
        </h1>

        <p className="text-sm text-muted-foreground mb-6">
          {new Date(idea.publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <ClaimButton initialCount={idea.claimsCount} />
          <ShareButtons idea={idea} />
        </div>
      </header>

      {/* The Problem */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-primary">01</span>
          <h2 className="text-lg font-bold">The Problem</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">{idea.problemStatement}</p>
      </section>

      {/* Who Wants This */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-primary">02</span>
          <h2 className="text-lg font-bold">Who Wants This</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">{idea.targetAudience}</p>
      </section>

      {/* What Exists */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-primary">03</span>
          <h2 className="text-lg font-bold">What Exists</h2>
        </div>
        <div className="space-y-4">
          {idea.existingSolutions.map((solution, index) => (
            <div key={index} className="border border-border p-4">
              <h3 className="font-bold mb-1">{solution.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {solution.description}
              </p>
              <span className="text-xs text-destructive">
                Gap: {solution.gap}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Suggested MVP */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-primary">04</span>
          <h2 className="text-lg font-bold">Suggested MVP</h2>
        </div>
        <div className="border border-border p-4 bg-card">
          <pre className="font-mono text-sm whitespace-pre-wrap leading-relaxed text-muted-foreground">
            {idea.suggestedMvp}
          </pre>
        </div>
      </section>

      {/* Signal Sources */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold text-primary">05</span>
          <h2 className="text-lg font-bold">Signal Sources</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Real conversations that sparked this idea.
        </p>
        <div className="space-y-3">
          {idea.signalSources.map((source, index) => (
            <SignalSource key={index} source={source} />
          ))}
        </div>
      </section>
    </article>
  );
}
