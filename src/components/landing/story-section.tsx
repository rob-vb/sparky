import { Search, FlaskConical, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'We hunt the signals',
    description:
      'Our scrapers crawl Reddit, Hacker News, Product Hunt, and GitHub daily. We find the complaints, the frustrations, the "I wish someone would build this" moments.',
    color: 'bg-secondary',
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'We validate ruthlessly',
    description:
      'Each idea gets competitor analysis, target audience research, and market gap identification. No gut feelings—just data.',
    color: 'bg-primary',
  },
  {
    number: '03',
    icon: Zap,
    title: 'You get the brief',
    description:
      'One email, every morning. Problem statement, who wants it, what exists, and a concrete MVP spec. Everything you need to start building.',
    color: 'bg-secondary',
  },
];

export function StorySection() {
  return (
    <section className="py-20 md:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            How it works
          </h2>
          <p className="text-xl text-background/70">
            We do the boring research so you can focus on building.
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Number and icon */}
              <div className="flex-shrink-0">
                <div className={`${step.color} w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-3 border-background`}>
                  <step.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-display text-6xl md:text-7xl font-black text-background/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-background/70 max-w-xl leading-relaxed">
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
