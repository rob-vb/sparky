import { EmailForm } from '@/components/shared/email-form';
import { mockStats } from '@/lib/mock-data';

export function SignupSection() {
  return (
    <section id="signup" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            Get Tomorrow&apos;s Idea
          </h2>
          <p className="text-muted-foreground mb-8">
            One validated startup idea delivered to your inbox every morning.
            No spam, unsubscribe anytime.
          </p>

          <div className="flex justify-center mb-6">
            <EmailForm />
          </div>

          <p className="text-sm text-muted-foreground">
            Join{' '}
            <span className="font-semibold text-foreground">
              {mockStats.subscriberCount.toLocaleString()}
            </span>{' '}
            builders getting validated ideas daily
          </p>
        </div>
      </div>
    </section>
  );
}
