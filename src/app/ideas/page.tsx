import { IdeaCard } from '@/components/ideas/idea-card';
import { mockIdeas } from '@/lib/mock-data';

export const metadata = {
  title: 'All Ideas | Sparky',
  description: 'Browse all validated startup ideas with market signals and MVP specs.',
};

export default function IdeasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Ideas</h1>
        <p className="text-muted-foreground">
          Browse our archive of validated startup ideas
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockIdeas.map((idea) => (
          <IdeaCard key={idea.id} idea={idea} />
        ))}
      </div>
    </div>
  );
}
