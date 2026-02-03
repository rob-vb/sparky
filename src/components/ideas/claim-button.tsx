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
      description: "Now go build it. We're rooting for you.",
    });
  };

  return (
    <button
      onClick={handleClaim}
      disabled={claimed}
      className={`inline-flex items-center gap-2 px-6 py-3 font-bold border-3 transition-all ${
        claimed
          ? 'bg-secondary text-secondary-foreground border-secondary cursor-default'
          : 'bg-primary text-primary-foreground border-foreground shadow-[4px_4px_0_0_#1D3557] hover:shadow-[2px_2px_0_0_#1D3557] hover:translate-x-[2px] hover:translate-y-[2px]'
      }`}
    >
      {claimed ? (
        <>
          <Check className="w-5 h-5" />
          <span>Claimed!</span>
        </>
      ) : (
        <>
          <Zap className="w-5 h-5" />
          <span>I&apos;m Building This</span>
        </>
      )}
      <span className="ml-1 px-2 py-0.5 bg-foreground/10 text-sm rounded">
        {count}
      </span>
    </button>
  );
}
