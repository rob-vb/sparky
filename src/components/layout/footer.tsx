import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sparky
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="/ideas"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Ideas
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/sponsor"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Sponsor
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
