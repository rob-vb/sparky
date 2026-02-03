import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { mockIdea } from '@/lib/mock-data';

const platformLabels: Record<string, string> = {
  reddit: 'Reddit',
  hacker_news: 'Hacker News',
  product_hunt: 'Product Hunt',
  github: 'GitHub',
};

export function ProofSection() {
  const uniquePlatforms = [
    ...new Set(mockIdea.signalSources.map((s) => s.platform)),
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 md:text-4xl">
          Today&apos;s Idea
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Here&apos;s a preview of what you&apos;ll get every day
        </p>

        <Card className="max-w-2xl mx-auto bg-card border-border">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="font-mono">
                #{String(mockIdea.ideaNumber).padStart(3, '0')}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {new Date(mockIdea.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <h3 className="text-xl font-bold">{mockIdea.title}</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground line-clamp-3">
              {mockIdea.problemStatement}
            </p>

            <div className="flex flex-wrap gap-2">
              {uniquePlatforms.map((platform) => (
                <Badge key={platform} variant="outline">
                  {platformLabels[platform]}
                </Badge>
              ))}
            </div>

            <Button asChild className="w-full sm:w-auto">
              <Link href={`/ideas/${mockIdea.slug}`}>
                See Full Idea
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
