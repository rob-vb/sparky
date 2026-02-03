import { IdeaCard } from '@/components/ideas/idea-card';
import { mockIdeas } from '@/lib/mock-data';

export const metadata = {
  title: 'All Ideas | Sparky',
  description: 'Browse all validated startup ideas with market signals and MVP specs.',
};

export default function IdeasPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block font-display text-sm font-bold tracking-wider text-secondary uppercase mb-4">
            Archive
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            All ideas
          </h1>
          <p className="text-lg text-muted-foreground">
            {mockIdeas.length} validated startup ideas. Each one researched, analyzed, and ready to build.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-stagger">
          {mockIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </div>
  );
}
