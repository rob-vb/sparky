import Link from 'next/link';
import Image from 'next/image';
import { Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t-3 border-foreground bg-background">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Sparky"
              width={48}
              height={48}
            />
            <div>
              <span className="font-display text-xl font-black">Sparky</span>
              <p className="text-sm text-muted-foreground">Made for builders.</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <Link
              href="/ideas"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Ideas
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-foreground hover:bg-secondary hover:border-secondary transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-muted text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sparky. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
