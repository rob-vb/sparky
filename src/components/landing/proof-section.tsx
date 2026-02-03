import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mockIdea } from '@/lib/mock-data';

export function ProofSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
            Latest Drop
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4">
            Today&apos;s idea
          </h2>
          <p className="text-muted-foreground">
            Here&apos;s what landed in inboxes this morning.
          </p>
        </div>

        {/* Idea preview */}
        <article className="border border-border p-6 md:p-8 mb-8">
          <span className="font-display text-4xl font-black text-primary">
            #{String(mockIdea.ideaNumber).padStart(3, '0')}
          </span>

          <h3 className="text-xl md:text-2xl font-bold mt-4 mb-4">
            {mockIdea.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {mockIdea.problemStatement.slice(0, 180)}...
          </p>

          <Link
            href={`/ideas/${mockIdea.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:opacity-80 transition-opacity"
          >
            Read full brief
            <ArrowRight className="w-4 h-4" />
          </Link>
        </article>

        <Link
          href="/ideas"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all {mockIdea.ideaNumber} ideas →
        </Link>
      </div>
    </section>
  );
}
