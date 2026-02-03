import { Search, FlaskConical, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'We hunt the signals',
    description:
      'Our scrapers crawl Reddit, Hacker News, Product Hunt, and GitHub daily. We find the complaints, the frustrations, the "I wish someone would build this" moments.',
    accent: 'secondary',
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'We validate ruthlessly',
    description:
      'Each idea gets competitor analysis, target audience research, and market gap identification. No gut feelings—just data.',
    accent: 'primary',
  },
  {
    number: '03',
    icon: Zap,
    title: 'You get the brief',
    description:
      'One email, every morning. Problem statement, who wants it, what exists, and a concrete MVP spec. Everything you need to start building.',
    accent: 'secondary',
  },
];

export function StorySection() {
  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground">
            We do the boring research so you can focus on building.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row gap-6 md:gap-8 items-start p-6 md:p-8 border border-border bg-background/50 hover:border-primary/30 transition-colors"
            >
              {/* Number and icon */}
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 flex items-center justify-center ${
                  step.accent === 'primary' ? 'bg-primary/10 border-primary/30' : 'bg-secondary/10 border-secondary/30'
                } border`}>
                  <step.icon className={`w-8 h-8 ${
                    step.accent === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                <span className="font-display text-5xl md:text-6xl font-black text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
