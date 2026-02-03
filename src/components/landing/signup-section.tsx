import { EmailForm } from '@/components/shared/email-form';
import { mockStats } from '@/lib/mock-data';

export function SignupSection() {
  return (
    <section id="signup" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-6 leading-tight">
            Get tomorrow&apos;s idea
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            One validated startup idea. Every morning. Free forever.
          </p>

          <div className="flex justify-center mb-8">
            <EmailForm />
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              <span><strong className="text-primary-foreground">{mockStats.subscriberCount}</strong> builders subscribed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
