'use client';

import { Share2, Twitter, Linkedin, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Idea } from '@/types';

interface ShareButtonsProps {
  idea: Idea;
}

export function ShareButtons({ idea }: ShareButtonsProps) {
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);

  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/ideas/${idea.slug}`
      : '';

  const twitterText = `Found this validated startup idea on Sparky:

"${idea.title}"

The problem: ${idea.problemStatement.slice(0, 100)}...

Check it out: ${shareUrl}`;

  const linkedInText = `I found a promising startup idea on Sparky:

${idea.title}

Problem: ${idea.problemStatement.slice(0, 150)}...

Full breakdown with market research: ${shareUrl}`;

  const copyToClipboard = async (text: string, platform: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPlatform(platform);
      toast.success(`${platform} share text copied!`);
      setTimeout(() => setCopiedPlatform(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => copyToClipboard(twitterText, 'X')}>
          {copiedPlatform === 'X' ? (
            <Check className="mr-2 h-4 w-4 text-green-500" />
          ) : (
            <Twitter className="mr-2 h-4 w-4" />
          )}
          Copy for X
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyToClipboard(linkedInText, 'LinkedIn')}
        >
          {copiedPlatform === 'LinkedIn' ? (
            <Check className="mr-2 h-4 w-4 text-green-500" />
          ) : (
            <Linkedin className="mr-2 h-4 w-4" />
          )}
          Copy for LinkedIn
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => copyToClipboard(shareUrl, 'Link')}>
          {copiedPlatform === 'Link' ? (
            <Check className="mr-2 h-4 w-4 text-green-500" />
          ) : (
            <Copy className="mr-2 h-4 w-4" />
          )}
          Copy Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
