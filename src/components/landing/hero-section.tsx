import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { mockStats } from '@/lib/mock-data';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/logo.png"
              alt="Sparky mascot"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Stop building things
            <br />
            <span className="text-primary">nobody wants.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl">
            Every idea comes with receipts.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#signup">Get Tomorrow&apos;s Idea</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/ideas">Browse Ideas</Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
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
