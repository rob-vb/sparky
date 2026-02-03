import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mockStats } from '@/lib/mock-data';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-block mb-8 px-4 py-2 border border-border">
            <span className="font-medium text-muted-foreground text-sm">
              {mockStats.ideasShipped} ideas shipped so far
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-6">
            Stop building things
            <br />
            <span className="text-primary">nobody wants.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Every idea comes with receipts. Real pain points from Reddit, HN, and Product Hunt—validated before you write a line of code.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/ideas/invoicesnap-photo-to-expense"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
            >
              See today&apos;s idea
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ideas"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border font-bold hover:bg-card transition-colors"
            >
              Browse archive
            </Link>
          </div>

          {/* Social proof */}
          <p className="text-sm text-muted-foreground">
            Join <span className="font-semibold text-foreground">{mockStats.subscriberCount.toLocaleString()}</span> builders. Free forever.
          </p>

          {/* Mascot - smaller, centered */}
          <div className="mt-16">
            <Image
              src="/logo.png"
              alt="Sparky"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
