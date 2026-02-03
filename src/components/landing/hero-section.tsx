import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mockStats } from '@/lib/mock-data';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231D3557' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left column - Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 border-2 border-secondary rounded-full">
              <span className="font-medium text-secondary">
                {mockStats.ideasShipped} ideas shipped so far
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              Stop building
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">things nobody</span>
                <span className="absolute bottom-2 left-0 right-0 h-4 bg-primary -z-0 -rotate-1" />
              </span>
              <br />
              wants.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Every idea comes with <em className="font-semibold text-foreground not-italic">receipts</em>.
              Real pain points scraped from Reddit, HN, and Product Hunt—validated before you write a line of code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg border-3 border-foreground shadow-[6px_6px_0_0_#1D3557] hover:shadow-[3px_3px_0_0_#1D3557] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                Get tomorrow&apos;s idea
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/ideas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-bold text-lg border-3 border-foreground hover:bg-muted transition-colors"
              >
                Browse archive
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Join <span className="font-bold text-foreground">{mockStats.subscriberCount.toLocaleString()}</span> builders.
              Free forever. Unsubscribe anytime.
            </p>
          </div>

          {/* Right column - Mascot */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Yellow blob behind mascot */}
              <div className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute top-4 right-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl" />

              <Image
                src="/logo.png"
                alt="Sparky - your idea validation sidekick"
                width={400}
                height={400}
                className="relative z-10 drop-shadow-2xl"
                priority
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-background border-3 border-foreground px-4 py-2 shadow-[4px_4px_0_0_#1D3557] rotate-[-3deg]">
                <span className="font-display font-bold text-lg">100% validated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
