import Link from 'next/link';
import { ArrowRight, MessageSquare, TrendingUp, Package } from 'lucide-react';
import { mockIdea } from '@/lib/mock-data';

const platformIcons: Record<string, { icon: typeof MessageSquare; label: string }> = {
  reddit: { icon: MessageSquare, label: 'Reddit' },
  hacker_news: { icon: TrendingUp, label: 'Hacker News' },
  product_hunt: { icon: Package, label: 'Product Hunt' },
  github: { icon: Package, label: 'GitHub' },
};

export function ProofSection() {
  const totalScore = mockIdea.signalSources.reduce((acc, s) => acc + (s.score || 0), 0);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Section intro */}
          <div className="lg:w-1/3">
            <span className="inline-block font-display text-sm font-bold tracking-wider text-secondary uppercase mb-4">
              Latest Drop
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              Today&apos;s idea
            </h2>
            <p className="text-muted-foreground mb-8">
              Here&apos;s what landed in inboxes this morning.
              Every idea comes with this level of detail.
            </p>
            <Link
              href="/ideas"
              className="inline-flex items-center gap-2 font-bold text-foreground hover:text-secondary transition-colors group"
            >
              See all {mockIdea.ideaNumber} ideas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right - Idea preview */}
          <div className="lg:w-2/3">
            <article className="border-3 border-foreground bg-card p-6 md:p-10 shadow-[8px_8px_0_0_#1D3557]">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <span className="font-display text-5xl md:text-6xl font-black text-primary">
                    #{String(mockIdea.ideaNumber).padStart(3, '0')}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary/20 border-2 border-secondary text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {totalScore.toLocaleString()} signal points
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                {mockIdea.title}
              </h3>

              {/* Problem preview */}
              <div className="mb-8">
                <span className="font-display text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  The Problem
                </span>
                <p className="mt-2 text-lg leading-relaxed">
                  {mockIdea.problemStatement.slice(0, 200)}...
                </p>
              </div>

              {/* Sources */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[...new Set(mockIdea.signalSources.map((s) => s.platform))].map(
                  (platform) => {
                    const { icon: Icon, label } = platformIcons[platform];
                    return (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-muted border-2 border-foreground text-sm font-medium"
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                      </span>
                    );
                  }
                )}
              </div>

              {/* CTA */}
              <Link
                href={`/ideas/${mockIdea.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors"
              >
                Read full brief
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
