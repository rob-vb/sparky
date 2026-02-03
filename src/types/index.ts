export interface Idea {
  id: string;
  slug: string;
  ideaNumber: number;
  title: string;
  problemStatement: string;
  targetAudience: string;
  existingSolutions: ExistingSolution[];
  suggestedMvp: string;
  signalSources: SignalSource[];
  claimsCount: number;
  publishedAt: string;
  createdAt: string;
}

export interface ExistingSolution {
  name: string;
  description: string;
  gap: string;
}

export interface SignalSource {
  platform: 'reddit' | 'hacker_news' | 'product_hunt' | 'github';
  title: string;
  url: string;
  score?: number;
  snippet?: string;
}

export interface SiteStats {
  subscriberCount: number;
  ideasShipped: number;
  totalClaims: number;
}
