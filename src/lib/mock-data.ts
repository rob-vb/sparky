import { Idea, SiteStats } from '@/types';

export const mockIdea: Idea = {
  id: '1',
  slug: 'invoicesnap-photo-to-expense',
  ideaNumber: 42,
  title: 'InvoiceSnap: Photo-to-Expense Report Generator',
  problemStatement:
    'Freelancers and small business owners waste hours manually entering receipt data into expense reports. They photograph receipts but still have to type everything into spreadsheets or accounting software. The friction causes many to delay expense tracking, leading to tax season chaos and missed deductions.',
  targetAudience:
    'Freelancers, solopreneurs, and small business owners (1-10 employees) who handle their own expense tracking. They use phones constantly, prefer mobile-first solutions, and value time over features.',
  existingSolutions: [
    {
      name: 'Expensify',
      description: 'Full expense management platform with receipt scanning',
      gap: 'Overkill for solo users, expensive ($5-9/user/mo), requires account setup and learning curve',
    },
    {
      name: 'Wave Receipts',
      description: 'Free receipt scanning tied to Wave accounting',
      gap: 'Forces you into Wave ecosystem, scanning accuracy issues reported, no standalone export',
    },
    {
      name: 'Manual spreadsheets',
      description: 'Google Sheets or Excel with manual entry',
      gap: 'Time-consuming, error-prone, no OCR capability',
    },
  ],
  suggestedMvp: `Core flow: Photo → Extract → Export

1. Camera/upload interface (React Native or PWA)
2. OCR integration (Google Vision API or Mindee)
3. Extract: vendor, amount, date, category guess
4. User confirms/edits extracted data
5. Export to CSV or PDF expense report

Skip for MVP:
- User accounts (use device storage)
- Bank integrations
- Team features
- Receipt storage/archival`,
  signalSources: [
    {
      platform: 'reddit',
      title: 'r/freelance: "Best way to track receipts without Expensify?"',
      url: 'https://reddit.com/r/freelance/comments/example1',
      score: 234,
      snippet:
        'Expensify is overkill for my needs. I just need something that reads my receipts and spits out a spreadsheet...',
    },
    {
      platform: 'reddit',
      title: 'r/smallbusiness: "Simple receipt tracking for sole proprietor"',
      url: 'https://reddit.com/r/smallbusiness/comments/example2',
      score: 89,
      snippet:
        "Every solution wants me to commit to their whole ecosystem. I just want photo → data.",
    },
    {
      platform: 'hacker_news',
      title: 'Ask HN: How do you handle expense tracking as a freelancer?',
      url: 'https://news.ycombinator.com/item?id=example3',
      score: 156,
      snippet:
        'Top comment: "I built a script that uses Google Vision API to extract receipt data. Would pay for a polished version of this."',
    },
    {
      platform: 'product_hunt',
      title: 'Receipt Scanner Pro - Launched but abandoned',
      url: 'https://producthunt.com/posts/example4',
      score: 432,
      snippet:
        'Comments full of users asking for updates. Creator went silent 8 months ago. Clear demand, abandoned supply.',
    },
  ],
  claimsCount: 3,
  publishedAt: '2025-01-15T08:00:00Z',
  createdAt: '2025-01-14T22:30:00Z',
};

export const mockIdeas: Idea[] = [
  mockIdea,
  {
    id: '2',
    slug: 'devlog-ai-changelog-generator',
    ideaNumber: 41,
    title: 'DevLog: AI-Powered Changelog Generator from Git Commits',
    problemStatement:
      'Developers hate writing changelogs but users and stakeholders need them. Most changelogs are either missing, outdated, or too technical for non-developers to understand.',
    targetAudience:
      'Indie developers, small dev teams, and open source maintainers who ship frequently but struggle to communicate changes to users.',
    existingSolutions: [
      {
        name: 'Conventional Commits',
        description: 'Commit message convention for automated changelogs',
        gap: 'Requires strict discipline, output is still developer-focused',
      },
      {
        name: 'Release Drafter',
        description: 'GitHub Action for draft releases',
        gap: 'Only works with GitHub, requires PR labels, no plain-English output',
      },
    ],
    suggestedMvp: `Connect to Git repo, analyze commits since last release, generate user-friendly changelog with AI. Output markdown or HTML.`,
    signalSources: [
      {
        platform: 'reddit',
        title: 'r/webdev: "How do you keep your changelog updated?"',
        url: 'https://reddit.com/r/webdev/comments/example5',
        score: 178,
      },
      {
        platform: 'hacker_news',
        title: 'Show HN: I built a changelog generator',
        url: 'https://news.ycombinator.com/item?id=example6',
        score: 89,
      },
    ],
    claimsCount: 1,
    publishedAt: '2025-01-14T08:00:00Z',
    createdAt: '2025-01-13T20:15:00Z',
  },
  {
    id: '3',
    slug: 'meetingless-async-standup-bot',
    ideaNumber: 40,
    title: 'Meetingless: Async Standup Bot for Remote Teams',
    problemStatement:
      'Daily standup meetings interrupt deep work and are often inefficient. Remote teams across timezones struggle to find overlapping hours, leading to meeting fatigue.',
    targetAudience:
      'Remote-first engineering teams (5-50 people) who value async communication and want to reduce meeting overhead.',
    existingSolutions: [
      {
        name: 'Geekbot',
        description: 'Slack bot for async standups',
        gap: 'Expensive at scale, limited customization, Slack-only',
      },
      {
        name: 'Standup Alice',
        description: 'Simple standup reminder bot',
        gap: 'No analytics, no threading, basic features only',
      },
    ],
    suggestedMvp: `Slack/Discord bot that collects standup responses, threads discussions, and provides weekly summaries.`,
    signalSources: [
      {
        platform: 'reddit',
        title: 'r/remotework: "Async standups changed my life"',
        url: 'https://reddit.com/r/remotework/comments/example7',
        score: 445,
      },
    ],
    claimsCount: 5,
    publishedAt: '2025-01-13T08:00:00Z',
    createdAt: '2025-01-12T18:45:00Z',
  },
  {
    id: '4',
    slug: 'pricewise-competitor-price-monitor',
    ideaNumber: 39,
    title: 'PriceWise: Competitor Price Monitoring for Small E-commerce',
    problemStatement:
      'Small e-commerce sellers lose sales because they cannot monitor competitor pricing in real-time. Enterprise solutions exist but cost $500+/month.',
    targetAudience:
      'Small e-commerce sellers on Shopify, WooCommerce, or Etsy with 100-10,000 SKUs who compete on price.',
    existingSolutions: [
      {
        name: 'Prisync',
        description: 'Enterprise competitor price tracking',
        gap: 'Starts at $99/mo, designed for large catalogs',
      },
      {
        name: 'Manual checking',
        description: 'Manually visiting competitor sites',
        gap: 'Time-consuming, not scalable, easy to miss changes',
      },
    ],
    suggestedMvp: `Track up to 50 competitor URLs, daily price checks, email alerts on changes, simple dashboard.`,
    signalSources: [
      {
        platform: 'reddit',
        title: 'r/ecommerce: "Affordable competitor price tracking?"',
        url: 'https://reddit.com/r/ecommerce/comments/example8',
        score: 167,
      },
      {
        platform: 'product_hunt',
        title: 'Competitor Price Tracker - Seeking feedback',
        url: 'https://producthunt.com/posts/example9',
        score: 234,
      },
    ],
    claimsCount: 2,
    publishedAt: '2025-01-12T08:00:00Z',
    createdAt: '2025-01-11T21:00:00Z',
  },
  {
    id: '5',
    slug: 'fontpair-ai-typography-matcher',
    ideaNumber: 38,
    title: 'FontPair AI: Smart Typography Pairing Suggestions',
    problemStatement:
      'Designers and developers spend too much time finding font combinations that work well together. Existing tools show pairings but do not explain why they work or adapt to brand context.',
    targetAudience:
      'Web developers, indie hackers, and non-designers who need professional typography but lack design training.',
    existingSolutions: [
      {
        name: 'FontPair.co',
        description: 'Curated font pairing examples',
        gap: 'Static list, no customization, no explanation of principles',
      },
      {
        name: 'Typewolf',
        description: 'Font recommendations and inspiration',
        gap: 'Browsing-focused, not tool-focused, no API',
      },
    ],
    suggestedMvp: `Input a heading font or brand keywords, get AI-suggested body font pairings with explanations. Preview in real-time.`,
    signalSources: [
      {
        platform: 'reddit',
        title: 'r/web_design: "How do you choose font pairings?"',
        url: 'https://reddit.com/r/web_design/comments/example10',
        score: 289,
      },
      {
        platform: 'hacker_news',
        title: 'Ask HN: Best resources for learning typography?',
        url: 'https://news.ycombinator.com/item?id=example11',
        score: 134,
      },
    ],
    claimsCount: 0,
    publishedAt: '2025-01-11T08:00:00Z',
    createdAt: '2025-01-10T19:30:00Z',
  },
];

export const mockStats: SiteStats = {
  subscriberCount: 847,
  ideasShipped: 42,
  totalClaims: 156,
};
