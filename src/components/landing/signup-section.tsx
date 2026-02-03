import { EmailForm } from '@/components/shared/email-form';
import { mockStats } from '@/lib/mock-data';

export function SignupSection() {
  return (
    <section id="signup" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Get tomorrow&apos;s idea
        </h2>
        <p className="text-muted-foreground mb-10">
          One validated startup idea. Every morning. Free.
        </p>

        <div className="flex justify-center mb-6">
          <EmailForm />
        </div>

        <p className="text-sm text-muted-foreground">
          Join {mockStats.subscriberCount.toLocaleString()} builders. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
