const steps = [
  {
    number: '01',
    title: 'We hunt the signals',
    description:
      'Our scrapers crawl Reddit, Hacker News, Product Hunt, and GitHub daily. We find the complaints, the frustrations, the "I wish someone would build this" moments.',
  },
  {
    number: '02',
    title: 'We validate ruthlessly',
    description:
      'Each idea gets competitor analysis, target audience research, and market gap identification. No gut feelings—just data.',
  },
  {
    number: '03',
    title: 'You get the brief',
    description:
      'One email, every morning. Problem statement, who wants it, what exists, and a concrete MVP spec. Everything you need to start building.',
  },
];

export function StorySection() {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground">
            We do the research so you can focus on building.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <span className="font-display text-sm font-bold text-primary">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-bold mb-2">
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
