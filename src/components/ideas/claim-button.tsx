'use client';

import { useState } from 'react';
import { Zap, Check } from 'lucide-react';
import { toast } from 'sonner';

interface ClaimButtonProps {
  initialCount: number;
}

export function ClaimButton({ initialCount }: ClaimButtonProps) {
  const [count, setCount] = useState(initialCount);
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    if (claimed) return;

    setCount((prev) => prev + 1);
    setClaimed(true);

    toast.success("You claimed this idea!", {
      description: "Now go build it.",
    });
  };

  return (
    <button
      onClick={handleClaim}
      disabled={claimed}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold transition-colors cursor-pointer ${
        claimed
          ? 'bg-muted text-muted-foreground'
          : 'bg-primary text-primary-foreground hover:opacity-90'
      }`}
    >
      {claimed ? (
        <>
          <Check className="w-4 h-4" />
          <span>Claimed</span>
        </>
      ) : (
        <>
          <Zap className="w-4 h-4" />
          <span>I&apos;m Building This</span>
        </>
      )}
      <span className="ml-1 text-xs opacity-70">
        {count}
      </span>
    </button>
  );
}
