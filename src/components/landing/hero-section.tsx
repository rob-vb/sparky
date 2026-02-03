import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { mockStats } from '@/lib/mock-data';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-28 bg-grid">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left column - Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
              <span className="font-medium text-secondary text-sm">
                {mockStats.ideasShipped} ideas shipped so far
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] tracking-tight mb-6">
              Stop building
              <br />
              <span className="gradient-text">things nobody</span>
              <br />
              wants.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Every idea comes with <span className="font-semibold text-primary">receipts</span>.
              Real pain points scraped from Reddit, HN, and Product Hunt—validated before you write a line of code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg glow-yellow hover:scale-105 transition-transform"
              >
                Get tomorrow&apos;s idea
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/ideas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card text-foreground font-bold text-lg border border-border hover:bg-muted hover:border-primary/50 transition-all"
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
              {/* Glow behind mascot */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl scale-75" />

              <Image
                src="/logo.png"
                alt="Sparky - your idea validation sidekick"
                width={400}
                height={400}
                className="relative z-10 drop-shadow-2xl"
                priority
              />

              {/* Floating badge */}
              <div className="absolute -bottom-2 -left-2 bg-card border border-border px-4 py-2 glow-cyan">
                <span className="font-display font-bold text-secondary">100% validated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
