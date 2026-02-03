import { IdeaCard } from '@/components/ideas/idea-card';
import { SponsorAd } from '@/components/shared/sponsor-ad';
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content - Ideas grid */}
          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-2 animate-stagger">
              {mockIdeas.map((idea) => (
                <IdeaCard key={idea.id} idea={idea} />
              ))}
            </div>

            {/* Inline sponsor ad after ideas */}
            <div className="mt-8">
              <SponsorAd variant="inline" />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 space-y-6">
            <SponsorAd variant="sidebar" />

            {/* Stats card */}
            <div className="border border-border bg-card/50 p-4">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                Stats
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total ideas</span>
                  <span className="font-bold text-primary">{mockIdeas.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total claims</span>
                  <span className="font-bold text-secondary">
                    {mockIdeas.reduce((acc, i) => acc + i.claimsCount, 0)}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
