import { IdeaCard } from '@/components/ideas/idea-card';
import { mockIdeas } from '@/lib/mock-data';

export const metadata = {
  title: 'All Ideas | Sparky',
  description: 'Browse all validated startup ideas with market signals and MVP specs.',
};

export default function IdeasPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            All ideas
          </h1>
          <p className="text-muted-foreground">
            {mockIdeas.length} validated startup ideas, ready to build.
          </p>
        </div>

        {/* Ideas list */}
        <div className="space-y-6">
          {mockIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </div>
  );
}
