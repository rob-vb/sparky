'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Loader2, ArrowRight } from 'lucide-react';

export function EmailForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setEmail('');
    toast.success("You're in! Check your inbox tomorrow morning.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
    >
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        className="flex-1 px-4 py-3 bg-background text-foreground border-3 border-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-bold border-3 border-foreground hover:bg-foreground/90 transition-colors disabled:opacity-50"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Joining...</span>
          </>
        ) : (
          <>
            <span>Subscribe</span>
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
