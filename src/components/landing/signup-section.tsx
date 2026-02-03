import { EmailForm } from '@/components/shared/email-form';
import { mockStats } from '@/lib/mock-data';

export function SignupSection() {
  return (
    <section id="signup" className="py-20 md:py-28 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Get tomorrow&apos;s idea
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            One validated startup idea. Every morning. Free forever.
          </p>

          <div className="flex justify-center mb-8">
            <EmailForm />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span><strong className="text-foreground">{mockStats.subscriberCount}</strong> builders subscribed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
