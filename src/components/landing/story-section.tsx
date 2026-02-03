import { Search, FlaskConical, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: Search,
    title: 'Real Signals',
    description:
      'We scrape Reddit, Hacker News, Product Hunt, and GitHub daily for problems people are actually complaining about.',
  },
  {
    icon: FlaskConical,
    title: 'Validated Research',
    description:
      'Each idea includes competitor analysis, target audience, and market gaps—so you know the opportunity is real.',
  },
  {
    icon: Send,
    title: 'Delivered Daily',
    description:
      'One idea per day with full context: problem, audience, existing solutions, and a suggested MVP to get started.',
  },
];

export function StorySection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 md:text-4xl">
          How Sparky Works
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
