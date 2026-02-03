import Link from 'next/link';
import { Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 px-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sparky. Made for builders.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
