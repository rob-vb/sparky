'use client';

import { useState } from 'react';
import { Zap } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

interface ClaimButtonProps {
  initialCount: number;
}

export function ClaimButton({ initialCount }: ClaimButtonProps) {
  const [count, setCount] = useState(initialCount);
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    if (claimed) return;

    // Optimistic update
    setCount((prev) => prev + 1);
    setClaimed(true);

    toast.success("You claimed this idea! Now go build it.", {
      description: "We'll be cheering you on.",
    });
  };

  return (
    <Button
      onClick={handleClaim}
      disabled={claimed}
      className="bg-accent text-accent-foreground hover:bg-accent/90"
    >
      <Zap className="mr-2 h-4 w-4" />
      {claimed ? 'Claimed!' : "I'm Building This"}
      <span className="ml-2 rounded-full bg-background/20 px-2 py-0.5 text-xs">
        {count}
      </span>
    </Button>
  );
}
