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
      className="flex flex-col sm:flex-row gap-2 w-full max-w-sm"
    >
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        className="flex-1 px-4 py-2 bg-transparent border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
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
