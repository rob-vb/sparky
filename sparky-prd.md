# Sparky — Product Requirements Document

**Version:** 1.0
**Date:** February 2, 2026
**Author:** Rob
**Domain:** sparky.day

---

## 1. Vision & Mission

**Mission:** Stop building things nobody wants.

**Vision:** Sparky delivers one validated product idea every day — backed by real demand signals scraped from Reddit, Hacker News, and Product Hunt. Not AI hallucinations. Not shower thoughts. Real people asking for real things to be built.

Every idea comes with receipts: the source threads where people complained, the existing solution gaps, the scoped MVP, and the market validation data. Sparky exists because the signals are everywhere — nobody was synthesizing them into actionable briefs until now.

**Tagline candidates (A/B test at launch):**
- "Stop building things nobody wants."
- "One validated idea. Every day. With proof."
- "Every idea comes with receipts."
- "Build what people are already asking for."

---

## 2. The Problem

The pain isn't a lack of ideas — ChatGPT can generate a hundred in ten seconds. The pain is **wasted effort.** Builders ship things nobody asked for, then wonder why nobody uses them.

Builders — indie hackers, vibe coders, junior devs, career switchers — keep hitting the same wall:

- **Building blind:** No evidence anyone actually wants the thing before they start
- **Idea paralysis:** Spending weeks evaluating ideas instead of building, because they can't tell which ones have real demand
- **Shallow portfolios:** Projects that demonstrate code but not product thinking — nothing that solves a proven problem
- **Abandoned projects:** Starting something without conviction, losing motivation, starting over

The signals exist. Every day, real people post complaints, feature requests, and "I wish someone would build..." messages on Reddit, Hacker News, and Product Hunt. But finding those signals and synthesizing them into actionable briefs takes hours of daily research that most builders won't do.

---

## 3. The Solution

Sparky is an automated idea pipeline that:

1. **Scrapes** community platforms for raw signals (complaints, feature requests, "I wish..." posts)
2. **Validates** those signals using AI-powered web research (market size, existing solutions, gaps)
3. **Synthesizes** everything into a polished daily brief — one idea, ready to build
4. **Publishes** the idea with full context: problem, audience, existing gaps, suggested MVP scope, and source links

### The Core Principle

> The scrapers find the needles. Perplexity tells you if they're gold.

- **Scrapers** (free APIs) cast a wide net across Reddit, Hacker News, Product Hunt, and GitHub — capturing every signal, including niche posts with 3 upvotes that a search engine would never surface.
- **Perplexity Sonar** (AI search API) validates and enriches each signal — researching existing solutions, market context, and cross-platform sentiment — replacing the need to build and maintain scrapers for Twitter, Google Trends, and App Store data.

---

## 4. Target Audience

### Primary: Practice Builders

- Indie hackers looking for their next weekend project
- Junior developers building portfolios
- Vibe coders who can ship fast but need direction
- Career switchers demonstrating product thinking skills
- Developers in "build in public" communities

### Secondary: Serious Builders

- Entrepreneurs validating ideas before committing
- Side-project developers looking for revenue-generating ideas
- Development agencies looking for internal product ideas

### Not Target Audience

- Enterprise product teams (too structured)
- Non-technical founders (ideas require building skills)
- People looking for billion-dollar startup ideas (these are scoped MVPs)

---

## 5. Product Architecture

### 5.1 High-Level Pipeline

```
┌─────────────────────────────────────────────────────────┐
│                    DATA COLLECTION                       │
│                                                         │
│   ┌──────────┐  ┌──────────┐  ┌────────────┐  ┌─────┐ │
│   │ Hacker   │  │  Reddit  │  │  Product   │  │ Git │ │
│   │  News    │  │   API    │  │   Hunt     │  │ Hub │ │
│   │  API     │  │  (OAuth) │  │  GraphQL   │  │     │ │
│   └────┬─────┘  └────┬─────┘  └─────┬──────┘  └──┬──┘ │
│        │             │              │             │     │
│        └─────────────┴──────┬───────┴─────────────┘     │
│                             │                           │
│                    Raw Signals DB                        │
└─────────────────────────────┬───────────────────────────┘
                              │
┌─────────────────────────────┴───────────────────────────┐
│                    PROCESSING                            │
│                                                         │
│   ┌──────────────────────────────────────────────┐      │
│   │  1. Deduplication (embeddings clustering)    │      │
│   │  2. LLM Scoring (feasibility, uniqueness)    │      │
│   │  3. Top candidates selected                  │      │
│   └──────────────────────┬───────────────────────┘      │
│                          │                              │
│   ┌──────────────────────┴───────────────────────┐      │
│   │  4. Perplexity Sonar Validation              │      │
│   │     - Existing solutions?                    │      │
│   │     - Market size / demand signals?          │      │
│   │     - Twitter/forum sentiment?               │      │
│   │     - App Store gaps?                        │      │
│   └──────────────────────┬───────────────────────┘      │
│                          │                              │
│   ┌──────────────────────┴───────────────────────┐      │
│   │  5. LLM Brief Generation                    │      │
│   │     - Problem statement                      │      │
│   │     - Target audience                        │      │
│   │     - Existing solutions & gaps              │      │
│   │     - Suggested MVP scope                    │      │
│   │     - Source links                           │      │
│   └──────────────────────┬───────────────────────┘      │
│                          │                              │
│   ┌──────────────────────┴───────────────────────┐      │
│   │  6. Human Review Gate (Phase 1 only)         │      │
│   └──────────────────────┬───────────────────────┘      │
└──────────────────────────┴──────────────────────────────┘
                           │
┌──────────────────────────┴──────────────────────────────┐
│                    PUBLISHING                            │
│                                                         │
│   Daily idea published to website + email + socials     │
└─────────────────────────────────────────────────────────┘
```

**Data sources by phase:**
- **Phase 1:** Hacker News, Reddit (15+ subreddits), Product Hunt, GitHub Trending
- **Phase 2:** + DevHunt, Indie Hackers
- **Phase 3:** + BetaList
- **Total:** 8 free sources feeding the pipeline

### 5.2 Data Sources — Scraper Layer (Breadth)

These free APIs run on scheduled cron jobs to capture every signal comprehensively.

#### Hacker News API — Day 1

- **Endpoint:** `https://hacker-news.firebaseio.com/v0/`
- **Auth:** None
- **Rate limit:** None
- **Cost:** Free
- **What to mine:**
  - `/v0/askstories.json` — Ask HN threads (pain points goldmine)
  - `/v0/showstories.json` — Show HN posts (what's being built, what's missing)
  - `/v0/topstories.json` — trending discussions
  - Comment threads for feature requests and complaints
- **Also:** Algolia HN Search API (`hn.algolia.com/api/v1/`) for full-text search
- **Schedule:** Every 6 hours

#### Reddit API — Day 1 (commercial approval required before launch)

- **Auth:** OAuth2 (free to register)
- **Rate limit:** 100 requests/min per OAuth client
- **Cost:** Free during development/prototyping. Commercial use requires explicit written approval from Reddit and may incur fees (~$0.24/1K API calls). At Sparky's volume this would be ~$1-2/month.
- **Commercial use policy:** Reddit considers any use as part of a product or monetized service to be commercial — even if Reddit data is just one input into a larger pipeline. Sparky publishing ideas derived from Reddit posts qualifies. You must apply for commercial approval before public launch.
- **Fallback if denied:** Perplexity Sonar indexes Reddit content through its web search and can partially cover Reddit signals. Not as comprehensive for systematic scraping, but workable for validation. Third-party Reddit data providers (e.g., Data365) are another option.
- **Target subreddits (Tier 1 — highest signal density):**
  - r/SomebodyMakeThis — literal "build this for me" requests (pure gold)
  - r/AppIdeas — direct app/feature requests
  - r/SideProject — see what's being built, comments reveal gaps
  - r/vibecoding — exact target audience discussing builds
- **Target subreddits (Tier 2 — broader business/startup signals):**
  - r/Entrepreneur, r/Entrepreneurs — business pain points
  - r/startups, r/startup — founder discussions
  - r/EntrepreneurRideAlong — execution-focused founders
  - r/indiehackers — indie builder community
  - r/SaaS — SaaS-specific problems and gaps
  - r/Solopreneur — solo founder pain points
- **Target subreddits (Tier 3 — developer tool signals):**
  - r/webdev, r/programming — developer tool gaps
  - r/InternetIsBeautiful — shows what resonates with users
  - r/buildinpublic — builders sharing progress and blockers
  - r/scaleinpublic — growth-stage problems
- **Signal patterns:** "I wish...", "why doesn't...", "someone should build...", "is there a tool that...", "I'd pay for..."
- **Schedule:** Daily pulls from Tier 1 subs, every 2 days for Tier 2-3
- **Development plan:** Build and test scraper freely during prototyping. Apply for commercial approval via Reddit's contact form before going live.

#### Product Hunt API — Day 1

- **Endpoint:** `https://api.producthunt.com/v2/api/graphql`
- **Auth:** OAuth2 client credentials
- **Rate limit:** Fair-use (generous for reasonable use)
- **Cost:** Free for non-commercial use
- **What to mine:**
  - Daily top launches (trending categories)
  - Product comments (users requesting features/alternatives)
  - Categories with low competition
- **Schedule:** Daily GraphQL query for new launches

#### GitHub Trending — Day 1

- **Method:** Self-hosted scraper of `github.com/trending` + GitHub Search API
- **Cost:** Free (GitHub API: 5,000 req/hour authenticated)
- **What to mine:**
  - Trending repos reveal developer needs
  - "awesome-X" lists signal growing interest
  - Repos with rapid star growth show unsolved problems
- **Schedule:** Daily scrape

#### DevHunt — Phase 2

- **Website:** devhunt.org
- **Method:** HTML scraper or direct Supabase query (open-source project with public DB credentials in repo)
- **Auth:** None required
- **Cost:** Free
- **What to mine:**
  - Daily dev tool launches — see what's being built
  - Votes and comments from GitHub-verified developers
  - Product descriptions reveal problem/solution framing
  - Comments surface feature gaps and improvement ideas
- **Why it's valuable:** DevHunt is Product Hunt but exclusively for developer tools. GitHub authentication means votes are from real developers, not bots. The niche focus means higher signal-to-noise ratio for dev tool ideas.
- **Schedule:** Daily scrape of new launches and trending tools

#### Indie Hackers — Phase 2

- **Website:** indiehackers.com
- **Method:** HTML scraper (no official API)
- **Auth:** None required
- **Cost:** Free
- **What to mine:**
  - Posts tagged "idea validation", "what should I build", "feedback"
  - Comments on product launches (feature requests, complaints)
  - "I'm building X" threads — see what resonates
  - Revenue milestones posts — what's actually working
  - Group discussions in Build in Public, SaaS, and Ideas groups
- **Signal patterns:** "struggling with...", "I wish...", "anyone else have this problem?", "would you pay for..."
- **Why it's valuable:** Indie Hackers is where your exact target audience hangs out. Founders openly discuss problems, validate ideas, and share what's working. The community is highly engaged and the content is rich with actionable signals.
- **Schedule:** Daily scrape of top posts and new discussions

#### BetaList — Phase 3

- **Website:** betalist.com
- **Method:** HTML scraper
- **Auth:** None required
- **Cost:** Free
- **What to mine:**
  - Upcoming startup listings (see what's being built before it launches)
  - Comments and feedback on listings
  - Category trends (which niches are hot)
- **Why it's valuable:** BetaList features startups before they go live — early signal on emerging product categories and what founders are betting on.
- **Schedule:** Weekly scrape

### 5.3 Perplexity Sonar — Validation Layer (Depth)

Instead of building and maintaining scrapers for Twitter, Google Trends, and App Store reviews, Perplexity Sonar handles the validation and enrichment step via a single API.

#### Why Sonar

- **One API replaces three scrapers:** Twitter/X ($100+/mo official, fragile third-party), Google Trends (unreliable Pytrends or $50+/mo SerpApi), App Store reviews (undocumented endpoints, open-source scrapers that break)
- **Real-time web search + synthesis:** Ask a question, get a sourced answer with citations
- **OpenAI-compatible API:** Drop-in integration, no new SDKs needed

#### How It's Used

Once the scraper layer surfaces a raw signal (e.g., "people on r/SomebodyMakeThis want a better invoice tool for freelancers"), Sonar validates it with targeted queries:

1. **Competitive landscape:** "What tools exist for freelancer invoicing? What are the top complaints about existing solutions?"
2. **Market demand:** "How many freelancers struggle with invoicing? Are there trending discussions on Twitter or forums about this problem?"
3. **Gap analysis:** "What features are missing from the top 5 freelancer invoicing tools based on user reviews?"

#### Pricing

- **Model:** Sonar (base) — $1/M input tokens, $1/M output tokens + $5/1K requests (low context)
- **Cost per validation query:** ~$0.006
- **Daily usage:** 10-20 queries per idea = $0.06-0.12/day
- **Monthly estimate:** $2-4/month

#### What Sonar Does NOT Replace

Sonar searches the web — it does not systematically crawl platforms. It cherry-picks the most relevant results for a query but won't surface that obscure 3-upvote Reddit post that happens to be a brilliant idea. That's why the scraper layer exists: comprehensive collection first, targeted validation second.

### 5.4 LLM Synthesis Layer

The pipeline that turns raw signals + validation data into a polished daily brief.

#### Step 1: Deduplication & Clustering

- **Model:** Voyage AI `voyage-3.5` (Anthropic's recommended embedding partner)
- **Storage:** pgvector in Supabase Postgres — native vector similarity search
- **Method:** Embed all raw signals, cluster by cosine similarity, collapse duplicates
- **Cost:** Negligible (~$0.001/day)

#### Step 2: Scoring & Filtering

- **Model:** Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) — $1/M input, $5/M output
- **Criteria:** Feasibility (can a solo dev build an MVP in 1-2 weeks?), market signal strength (how many sources mention this?), uniqueness (does a good solution already exist?), audience clarity (who exactly wants this?)
- **Output:** Ranked list of top 3-5 candidate ideas
- **Cost:** ~$0.003-0.01 per idea scored

#### Step 3: Perplexity Validation

- Run Sonar queries on top candidates (see 5.3)

#### Step 4: Brief Generation

- **Model:** Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`) — $3/M input, $15/M output
- **Output format:** The daily Sparky brief (see section 6)
- **Cost:** ~$0.01-0.05 per brief
- **Why not Opus 4.5?** Sonnet 4.5 delivers ~95% of Opus quality for structured content synthesis at significantly lower cost. Opus excels at deep multi-step reasoning — overkill for writing idea briefs from pre-validated data.

#### Step 5: Human Review (Phase 1 only)

- Admin reviews generated brief before publishing
- Approve, edit, or reject + regenerate
- Goal: Remove this gate by Phase 3 once quality is consistently high

---

## 6. Daily Idea Brief — Output Format

Each Sparky idea follows a consistent structure:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ SPARKY IDEA #042
February 2, 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TITLE: InvoiceSnap — Dead-Simple Invoicing for Solo Freelancers

THE PROBLEM:
Freelancers on r/freelance and Hacker News consistently
complain that existing invoicing tools (FreshBooks, Wave,
Stripe Invoicing) are either too complex, too expensive,
or require creating yet another account. They want to
generate a professional PDF invoice in under 60 seconds
with zero signup friction.

WHO WANTS THIS:
Solo freelancers, contractors, and gig workers who send
1-10 invoices per month and don't need full accounting
software.

WHAT EXISTS (AND WHERE IT FALLS SHORT):
- FreshBooks: Full accounting suite, overkill for simple invoicing
- Wave: Free but requires account creation and is ad-heavy
- Stripe Invoicing: Requires Stripe account, payment-focused
- Invoice Generator (free tools): Ugly, no templates, no tracking
Gap: No tool lets you generate a clean, branded invoice in
60 seconds without creating an account.

SUGGESTED MVP:
- Landing page with instant invoice form (no signup required)
- 3-5 clean templates with logo upload
- PDF generation and email sending
- Optional: payment link integration
- Tech: Single-page app, PDF generation library, email API
- Scope: 1-2 weekend builds

SIGNAL SOURCES:
- r/SomebodyMakeThis: "Simple invoice generator" (47 upvotes)
- Ask HN: "What tools do freelancers actually need?" (discussion)
- Product Hunt: InvoiceNinja launched but comments ask for simpler version
- Perplexity validation: 73M freelancers in US alone, invoicing
  is consistently top-5 pain point in freelancer surveys

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 7. Community Solutions — "Build It" Feature

Sparky isn't just a newsletter — it's a two-sided platform. Every published idea becomes a challenge that builders can respond to with their solution.

### How It Works

1. **Sparky publishes an idea** (via the automated pipeline)
2. **Builders submit solutions** — a link to their project, repo, or demo + a short description of their approach
3. **Community votes** on solutions — which implementations best solve the problem?
4. **Idea pages become living showcases** — each idea has a leaderboard of solutions ranked by upvotes

### Why This Matters

- **For builders:** Motivation to actually ship. Public accountability. Portfolio pieces with proven demand.
- **For visitors:** Browse ideas AND see real implementations. Learn from how others approached the same problem.
- **For Sparky:** Transforms from content site to community platform. User-generated content feeds growth. Network effects (more solutions → more visitors → more builders).

### Solution Submission

A solution includes:

- **Title:** Name of the project/product
- **URL:** Live link, GitHub repo, or demo
- **Description:** Brief explanation of the approach (max ~500 chars)
- **Tech stack tags:** What it's built with (optional, for discoverability)
- **Screenshot/preview:** Optional image or auto-generated OG preview
- **Builder profile:** Links back to the submitter's profile

### Idea Page Layout

```
┌─────────────────────────────────────────────────┐
│  ⚡ IDEA #042 — InvoiceSnap                     │
│                                                 │
│  [Problem] [Audience] [Existing Solutions]       │
│  [Suggested MVP] [Signal Sources]               │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  🔨 SOLUTIONS (3)                    [Submit →] │
│                                                 │
│  ▲ 47  QuickBill — quickbill.app               │
│        "No-signup invoice generator with 5      │
│         templates. Built in a weekend with      │
│         Next.js + Puppeteer for PDF gen."       │
│        by @marcus · React, Next.js, Puppeteer   │
│                                                 │
│  ▲ 23  InvoiceLite — github.com/jane/invlite   │
│        "Open-source CLI tool that generates     │
│         invoices from a YAML config file."      │
│        by @jane · Go, CLI                       │
│                                                 │
│  ▲ 8   BillBot — billbot.dev                    │
│        "Telegram bot that generates invoices    │
│         from a chat conversation."              │
│        by @alex · Python, Telegram API          │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Browsing & Discovery

- **Ideas page:** All published ideas with solution count and top solution preview
- **Filter by:** Category, date, number of solutions, "unsolved" (zero solutions)
- **Sort by:** Newest, most solutions, most upvoted solution, trending
- **"Unsolved" ideas** get a special badge — these are the open challenges waiting for builders

### Rules & Quality

- One solution per builder per idea (can update their submission)
- Solutions must have a working link (live site, repo, or demo)
- Community can flag spam/low-effort submissions
- Admin moderation for edge cases
- Builders can submit solutions to older ideas — the archive stays alive

### Phasing

- **Phase 1:** Ideas published without solutions (pipeline focus)
- **Phase 2:** Add solution submissions + upvoting (community activation)
- **Phase 3:** Builder profiles, solution showcase pages, "top builders" leaderboard

---

## 8. Tech Stack

### Frontend

| Component | Technology | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) | Cache Components, Turbopack, React 19.2 View Transitions, proxy.ts |
| UI Library | shadcn/ui | Beautiful, accessible components built on Radix UI. Copy-paste, fully customizable. |
| Styling | Tailwind CSS 4 | Utility-first, ships with shadcn, zero-config in Next.js 16 |
| State/Data | TanStack Query | Server state management, caching, optimistic updates for upvoting |
| Icons | Lucide React | Clean icon set, tree-shakeable, ships with shadcn |

### Backend & Database

| Component | Technology | Why |
|---|---|---|
| Database | Supabase (Postgres) | Managed Postgres with built-in auth hooks, real-time subscriptions, Row Level Security, pgvector for embeddings |
| Vector search | pgvector (via Supabase) | Native Postgres extension for embedding similarity search — deduplication layer |
| Storage | Supabase Storage | Solution screenshots, user avatars, OG images |
| Edge Functions | Supabase Edge Functions (Deno) | Lightweight serverless functions for webhooks, scheduled tasks |
| Cron/Scheduling | Supabase pg_cron OR Vercel Cron | Trigger scraping pipeline on schedule (every 6 hours, daily) |
| Queue | Inngest or Trigger.dev | Background job processing for scraping, LLM calls, brief generation — retry logic, rate limiting built in |

### Authentication

| Component | Technology | Why |
|---|---|---|
| Auth | Better Auth | Framework-agnostic, self-hosted auth. Email/password, OAuth (GitHub, Google), magic links. Runs on your own DB — no vendor lock-in. |
| Session | Better Auth sessions (DB-backed) | Secure sessions stored in Supabase Postgres |

### AI Pipeline

| Service | Model | Purpose | Cost |
|---|---|---|---|
| Embeddings | Voyage AI voyage-3.5 | Signal deduplication via cosine similarity clustering | ~$0-1/mo |
| Signal scoring | Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) | Score/filter raw signals — feasibility, uniqueness, demand | ~$1-3/mo |
| Brief generation | Claude Sonnet 4.5 (`claude-sonnet-4-5-20250929`) | Write polished daily idea briefs from validated signals | ~$3-15/mo |
| Validation | Perplexity Sonar API | Real-time web research for competitive landscape, market demand, gap analysis | ~$2-4/mo |

**Why Voyage AI for embeddings?** Anthropic does not offer its own embedding model. Voyage AI is Anthropic's official recommended embedding partner. Voyage 3.5 outperforms OpenAI text-embedding-3-large by 8.26% at lower cost ($0.06/M tokens vs $0.13/M). The free tier includes 200M tokens — enough to run Sparky's deduplication for months before hitting paid usage.

**Why not Opus 4.5?** Sonnet 4.5 delivers ~95% of Opus quality for content synthesis and structured writing at 40% less input cost and 60% less output cost. Opus shines at deep multi-step reasoning and complex logic chains — overkill for writing idea briefs. Haiku 4.5 performs at the level of the previous Sonnet 4 and is ideal for the high-volume scoring/filtering step.

### External Data APIs

| Service | Purpose | Cost | Phase |
|---|---|---|---|
| Hacker News Firebase API | Scraping HN content (Ask HN, Show HN, top stories) | Free | 1 |
| Reddit OAuth API | Scraping 15+ subreddits (requires commercial approval) | ~$1-2/mo | 1 |
| Product Hunt GraphQL API | Scraping launches and comments | Free (non-commercial) | 1 |
| GitHub API / Scraper | Trending repos and search | Free | 1 |
| DevHunt Scraper | Dev tool launches, votes, comments | Free | 2 |
| Indie Hackers Scraper | Posts, comments, idea validation threads | Free | 2 |
| BetaList Scraper | Upcoming startup listings | Free | 3 |

### Email

| Component | Technology | Why |
|---|---|---|
| Transactional email | Resend | Modern email API, React Email for templates, generous free tier (100 emails/day) |
| Email templates | React Email | JSX-based email templates, works seamlessly with Resend |

### Hosting & Deployment

| Component | Technology | Why |
|---|---|---|
| Frontend hosting | Vercel | Native Next.js 16 support, edge network, preview deployments, built-in analytics |
| Database | Supabase Cloud (free tier → Pro) | Managed Postgres, 500MB free, Pro at $25/mo when needed |
| Domain | sparky.day | Primary domain |
| DNS/CDN | Vercel (included) | Automatic SSL, edge caching, global CDN |

---

## 9. Data Model

### Core Tables

```
signals
├── id
├── source (hacker_news | reddit | product_hunt | github)
├── source_id (external ID)
├── source_url
├── title
├── body
├── score (upvotes/stars)
├── metadata (JSON — subreddit, author, comments count, etc.)
├── embedding (vector — for deduplication)
├── cluster_id (nullable — assigned during dedup)
├── processed_at
├── created_at
└── updated_at

ideas
├── id
├── title
├── slug
├── problem_statement
├── target_audience
├── existing_solutions (JSON — name, description, gap)
├── suggested_mvp
├── validation_data (JSON — Perplexity response, market data)
├── signal_ids (JSON — array of signal IDs that sparked this)
├── llm_score (float — composite feasibility/uniqueness/demand score)
├── claims_count (int, default 0 — denormalized counter for "I'm building this")
├── status (draft | review | published | rejected)
├── published_at
├── created_at
└── updated_at

idea_claims
├── id
├── idea_id (foreign key → ideas)
├── email (nullable — optional in Phase 1)
├── user_id (nullable — linked after Phase 2 when accounts exist)
├── ip_hash (for anonymous dedup — hashed, not raw IP)
├── created_at
└── unique constraint on (idea_id, ip_hash)

scrape_runs
├── id
├── source
├── started_at
├── completed_at
├── signals_found (int)
├── errors (JSON)
└── created_at
```

### Community Tables (Phase 2+)

```
users
├── id
├── name
├── email (unique)
├── username (unique, URL-friendly)
├── avatar_url (nullable)
├── bio (nullable, max 280 chars)
├── website_url (nullable)
├── github_url (nullable)
├── twitter_url (nullable)
├── email_verified_at
├── created_at
└── updated_at

solutions
├── id
├── idea_id (foreign key → ideas)
├── user_id (foreign key → users)
├── title (project/product name)
├── url (live site, repo, or demo — required)
├── description (max 500 chars)
├── screenshot_url (nullable)
├── tech_stack (JSON — array of tags, e.g. ["Next.js", "Supabase"])
├── upvotes_count (denormalized counter)
├── status (active | flagged | removed)
├── created_at
└── updated_at

solution_upvotes
├── id
├── solution_id (foreign key → solutions)
├── user_id (foreign key → users)
├── created_at
└── unique constraint on (solution_id, user_id)
```

---

## 10. MVP Definition — What Ships First

The MVP answers one question: **can we generate one high-quality, validated idea per day and get it in front of builders?**

Everything else — solutions, upvoting, profiles — comes later. The MVP is a content machine with a front door and one engagement hook.

### MVP Includes

**Pipeline (backend — the engine)**
- Hacker News scraper (Ask HN + Show HN posts, every 6 hours)
- Reddit scraper (5 target subreddits, daily pulls)
- Signal storage in Supabase (raw signals table with source, content, metadata)
- Claude Haiku 4.5 scoring (rank signals by feasibility, uniqueness, demand)
- Perplexity Sonar validation (research top candidates — existing solutions, market demand, gaps)
- Claude Sonnet 4.5 brief generation (turn validated signal into a polished daily idea)
- Admin review page (simple protected route — approve, edit, or reject + regenerate)

**Website (frontend — the front door)**
- Landing page (see Landing Page Framework below)
- Daily idea page with a unique URL (`sparky.day/ideas/042-invoicesnap`) — shareable, SEO-friendly
- **"I'm Building This" claim button** on every idea page (one-click, stored in Supabase — see below)
- **Pre-written share copy** on every idea page for one-click social sharing
- Idea archive page — list of all published ideas, newest first
- Basic responsive design with shadcn/ui components
- OG image generation for social sharing (auto-generated per idea)

**"I'm Building This" — Claim Button (MVP engagement hook)**

A single button on every idea page. Click it, claim the idea. Minimal implementation (one column in the ideas table or a simple claims table). No auth required in Phase 1 — anonymous claims with optional email.

Why this ships in MVP, not Phase 2:
- Creates an engagement loop from day one (passive readers → active participants)
- Provides analytics signal (which ideas resonate → improves pipeline scoring)
- Generates social proof on idea pages ("12 builders claimed this idea")
- Gives sponsorship pitch real data later ("X builders claimed and shipped ideas this month")
- Costs almost nothing to build — one button, one database write

**Share copy (auto-generated per idea, visible on idea page):**
> "TIL 73M freelancers want a simpler invoice tool. Might build this weekend. Via @sparky_day sparky.day/ideas/042"

Encourage social sharing by making it effortless. Pre-written, one-click copy.

**Landing Page Framework**

```
HOOK
"Stop building things nobody wants."

STORY
"Every idea on Sparky comes from real people asking for it —
scraped from Reddit, Hacker News, and Product Hunt, then
validated with market data. Not AI hallucinations. Real demand."

PROOF
Today's idea, visible with source links and validation data.
Let visitors see the receipts before they subscribe.

OFFER
"Get tomorrow's validated idea in your inbox. Free. Daily."
[Email signup]

SOCIAL PROOF (dynamic counter)
"847 builders subscribed. 23 ideas shipped so far."
```

**Email**
- Email signup (collected via landing page)
- Daily email with the idea brief (sent automatically after admin approval)
- Resend + React Email for clean templates
- Welcome email includes the Founder Story (see Section 19)

**Auth (minimal)**
- Better Auth with email/password + GitHub OAuth
- Only needed for admin access in Phase 1 (no public-facing auth required yet)
- "I'm Building This" claims are anonymous/email-optional in Phase 1

### MVP Does NOT Include

- User accounts for visitors (Phase 2)
- Solution submissions or upvoting (Phase 2)
- Product Hunt or GitHub scrapers (Phase 2)
- Embeddings-based deduplication (Phase 2 — manual review handles duplicates for now)
- Categories/tags/filtering (Phase 2)
- Social sharing automation (Phase 3)
- Sponsorship/ad slots (Phase 2-3, once there's traffic to sell)
- Builder profiles or leaderboards (Phase 3)

### MVP Success Criteria

The MVP is successful if, within the first 2 weeks of operation:

- Pipeline runs daily without manual intervention (aside from the review step)
- Ideas feel validated — not generic, with visible demand signals and source links
- At least 100 email signups from organic sharing
- At least 20% of idea pages get at least 1 "I'm building this" claim
- Each idea page gets shared at least once on social media
- Rob (as admin) spends < 15 minutes/day on review and approval

---

## 11. Implementation Phases

### Phase 1 — MVP (Weeks 1-2)

**Goal:** Pipeline works end-to-end, producing 1 idea/day with human review. Landing page converts visitors to subscribers.

**CRITICAL: First 3-5 ideas must be exceptional.** Hand-pick signals, over-validate with Perplexity, and personally edit the Sonnet output. First impressions set the quality bar for the entire brand.

- [ ] Project setup: Next.js 16 + Supabase + Better Auth + shadcn/ui + Vercel
- [ ] Supabase schema: `signals`, `ideas`, `idea_claims`, `scrape_runs` tables + pgvector extension
- [ ] Better Auth integration (email/password + GitHub OAuth — admin only in Phase 1)
- [ ] Hacker News scraper (Ask HN + Show HN, every 6 hours via cron job)
- [ ] Reddit scraper (5 target subreddits, daily)
- [ ] Raw signal storage in `signals` table
- [ ] LLM scoring pipeline (Claude Haiku 4.5)
- [ ] Perplexity Sonar validation for top candidates
- [ ] LLM brief generation (Claude Sonnet 4.5)
- [ ] Admin review interface (protected route: approve/edit/reject)
- [ ] Public idea page (single daily idea, shareable URL)
- [ ] **"I'm Building This" claim button** on idea pages (one-click, anonymous/optional email)
- [ ] **Pre-written share copy** on idea pages (one-click copy for X/LinkedIn)
- [ ] Email signup + daily email delivery (Resend + React Email)
- [ ] Welcome email with Founder Story narrative
- [ ] **Landing page** (Hook → Story → Proof → Offer framework — see Section 10)
- [ ] OG image generation per idea (for social sharing previews)

**Launch channels (Week 2):**
- [ ] X (Twitter) — Epiphany Bridge thread (Founder Story) + daily idea posts
- [ ] Indie Hackers — launch post with Founder Story
- [ ] r/SideProject, r/EntrepreneurRideAlong — story post
- [ ] Hacker News — Show HN submission
- [ ] Build-in-public updates about Sparky itself (meta-content the audience loves)

**Deliverables:** Working pipeline, daily idea published, email list growing, launch posts live.

### Phase 2 — Expansion + Community (Weeks 3-6)

**Goal:** More sources, smarter deduplication, and launch the solutions feature.

- [ ] Product Hunt scraper (daily launches + comments)
- [ ] GitHub Trending scraper (daily trending + star growth)
- [ ] **DevHunt scraper** (dev tool launches, votes, comments from GitHub-verified devs)
- [ ] **Indie Hackers scraper** (posts, comments, idea validation threads)
- [ ] **Expand Reddit to 15+ subreddits** (add Tier 2 and Tier 3 subs)
- [ ] Embeddings-based deduplication (pgvector in Supabase + Voyage AI voyage-3.5)
- [ ] Automated scoring with confidence thresholds
- [ ] **User accounts** (registration, profiles, auth)
- [ ] **Solution submissions** (submit project link + description per idea)
- [ ] **Upvoting system** (one vote per user per solution)
- [ ] **Idea archive page** (browse all ideas, filter by category, solution count, "unsolved")
- [ ] Category/tag system (SaaS, dev tools, mobile, etc.)
- [ ] RSS feed
- [ ] Basic SEO optimization for idea pages
- [ ] Apply for Reddit commercial API approval (if not done already)

**Deliverables:** 7 sources feeding pipeline, dedup working, solutions flowing in, community engaged.

### Phase 3 — Scale & Polish (Months 2-3)

**Goal:** Full automation, deeper community, monetization exploration.

- [ ] Remove human review gate (or make optional for edge cases)
- [ ] Expand Perplexity queries (deeper validation, competitor analysis)
- [ ] **BetaList scraper** (upcoming startup listings, early signals)
- [ ] **Builder profiles** (showcase all submitted solutions, stats, "top builder" badges)
- [ ] **Solution showcase pages** (individual solution detail page with full description)
- [ ] **Top builders leaderboard** (ranked by upvotes received across all solutions)
- [ ] **"Unsolved" idea highlights** (featured challenges with zero solutions)
- [ ] Community flagging/moderation for low-effort solutions
- [ ] Social sharing (auto-post to X/LinkedIn/Threads)
- [ ] Analytics dashboard (which ideas get most traction, most solutions)
- [ ] **Open sponsorship ad slots** (sidebar, in-email, idea page footer — $299-999/slot)
- [ ] **Sponsored Idea slot** (company pays to feature an idea in their category, clearly labeled)
- [ ] Weekly roundup email / "best of month" compilations

**Deliverables:** 8 sources feeding pipeline, fully automated, active community, first sponsorship revenue.

---

## 12. Monthly Cost Breakdown

### Phase 1 (Launch)

| Item | Cost |
|---|---|
| Vercel (Hobby tier) | $0 |
| Supabase (Free tier — 500MB, 50K auth users) | $0 |
| Hacker News API | $0 |
| Reddit API (commercial) | $1-2 |
| Perplexity Sonar | $2-4 |
| Claude Haiku 4.5 (signal scoring) | $1-3 |
| Claude Sonnet 4.5 (brief generation) | $3-15 |
| Embeddings (Voyage AI — free tier: 200M tokens) | $0 |
| Resend (free tier — 100 emails/day) | $0 |
| Domain (sparky.day) | ~$1/mo amortized |
| **Total** | **~$8-25/mo** |

### Phase 2 (Full Sources + Community)

| Item | Cost |
|---|---|
| Vercel (Pro — $20/mo when traffic grows) | $0-20 |
| Supabase (Free → Pro at $25/mo if needed) | $0-25 |
| All scrapers (HN, Reddit, PH, GitHub) | $1-2 |
| Perplexity Sonar (more validation queries) | $4-8 |
| Claude Haiku 4.5 | $1-3 |
| Claude Sonnet 4.5 | $3-15 |
| Embeddings (Voyage AI — likely still on free tier) | $0-1 |
| Resend (Pro if list grows — $20/mo) | $0-20 |
| **Total** | **~$10-94/mo** |

### Phase 3 (Scale)

| Item | Cost |
|---|---|
| Vercel Pro | $20 |
| Supabase Pro | $25 |
| All scrapers | $1-2 |
| Perplexity Sonar (expanded) | $5-15 |
| Claude Haiku 4.5 (higher volume) | $3-5 |
| Claude Sonnet 4.5 (higher volume) | $5-20 |
| Embeddings (Voyage AI) | $1-3 |
| Resend (Pro) | $20 |
| **Total** | **~$80-110/mo** |

**Note:** Phase 1 can run entirely on free tiers (Vercel Hobby + Supabase Free + Resend Free). Paid tiers only kick in when traffic and usage justify the upgrade — likely sometime in Phase 2.

---

## 13. Success Metrics

### Pipeline Health

- **Signal volume:** 100+ raw signals captured per day across all sources
- **Pipeline uptime:** 99%+ daily idea generation without manual intervention (Phase 3)
- **Source diversity:** Each idea references 2+ sources minimum

### Product Engagement

- **Email subscribers:** 500 in first month, 2,000 by month 3
- **Open rate:** 40%+ (benchmark for niche daily newsletters)
- **Click-through rate:** 15%+ on idea links
- **Idea page views:** Growing week-over-week

### Quality

- **"I'd build this" rate:** Surveyed users agree the idea is worth building 60%+ of the time
- **"I'm building this" claims:** At least 20% of published ideas get at least 1 claim (Phase 1+)
- **Source accuracy:** Validation data (Perplexity) confirmed as relevant 90%+ of the time

---

## 14. Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Reddit API becomes paid-only | Lose major signal source | Start non-commercial, apply for commercial when needed. Perplexity can partially backfill Reddit signals. |
| Perplexity API pricing changes | Validation costs spike | Sonar base tier is cheap. Can fall back to building individual scrapers for Twitter/Trends if needed. |
| LLM generates low-quality ideas | Users lose trust | Human review gate in Phase 1. Quality scoring with confidence thresholds. Feedback loop from user engagement. |
| Ideas are too generic | No differentiation from ChatGPT | The value is in real community signals + validation data, not LLM creativity. Source links prove the demand is real. |
| Platform API terms change | Scraper breaks | Each scraper is independent. Losing one source degrades quality but doesn't kill the pipeline. Perplexity serves as a fallback research layer. |
| Low email engagement | Hard to grow | Focus on idea quality over quantity. Every idea must be genuinely useful, not filler. |
| Positioned as "another idea newsletter" | Ignored by target audience | Lead with validated demand and proof, not "ideas." Show the receipts. Founder Story differentiates. |
| No engagement loop in MVP | Passive readers, no community | "I'm Building This" claim button ships in MVP. Creates participation from day one. |
| Sponsorship pitched too early | Low-quality sponsors, cheapens brand | Wait for community proof (subscriber count, claim data, shipping showcases) before charging. |
| Founder Story not told | No face, no connection, forgettable | Write and publish Epiphany Bridge narrative at launch. Rob is the attractive character. |

---

## 15. Monetization — Sponsorship Model (TrustMRR Playbook)

Sparky is free. Free to browse, free to subscribe, free to submit solutions. Revenue comes from selling visibility to companies that want to reach builders.

### Why This Model

The TrustMRR approach: build an audience of high-value users (in our case, developers and indie hackers), then sell ad slots to companies targeting that exact audience. No paywall friction, no freemium complexity, no payment processing overhead. The product stays simple, the audience grows faster, and sponsors pay for access to proven engaged builders.

### Sponsorship Pitch (Not "Ad Slots")

Don't sell ad space. Sell outcomes. The pitch to sponsors:

> "Put your dev tool in front of 2,000+ builders who ship a new project every week. These aren't lurkers — they're builders who claimed an idea and shipped it. Your tool could be in their stack."

The "I'm Building This" claim data and solution submissions make this pitch credible. We can tell sponsors exactly how many builders are actively building, what tech stacks they're using, and how often they ship.

**Do not sell sponsorships before community proof exists.** Build the builder base first. Prove engagement. Then charge.

### Sponsorship Strategy

**Phase 1 (Launch):** No monetization. Focus entirely on idea quality and audience growth. Use ad slots to promote Sparky itself or Rob's other projects (cfgi.io, nmst.io).

**Phase 2 (Community):** Open 2-3 sidebar slots for paid sponsors. Start at $299/month per slot. Target audience: dev tool companies (Vercel, Supabase, Railway), SaaS builders, coding bootcamps, indie hacker communities. Raise prices as traffic grows.

**Phase 3 (Scale):** Expand to 4-6 slots across different positions (sidebar, in-email, idea page footer). Introduce tiered pricing based on placement and visibility. Add "Sponsored Idea" slot — a company pays to feature an idea related to their product category (clearly labeled as sponsored). Price range: $299-$1,499/slot/month based on traffic and demand.

### Potential Revenue Trajectory

| Stage | Monthly Visitors | Ad Slots | Price/Slot | Monthly Revenue |
|---|---|---|---|---|
| Month 1-2 | < 1,000 | 0 (self-promo) | — | $0 |
| Month 3-4 | 1,000-5,000 | 2-3 | $299 | $600-900 |
| Month 6+ | 5,000-20,000 | 4-6 | $499-999 | $2,000-6,000 |
| Month 12+ | 20,000+ | 4-6 | $999-1,499 | $4,000-9,000 |

### Why Not Premium/Freemium (for now)

- **No paywall friction:** Every idea stays public and shareable. This maximizes SEO, social sharing, and word-of-mouth — the primary growth channels.
- **No payment infrastructure complexity:** No Stripe integration, no subscription management, no billing support.
- **Aligns with the mission:** Paywalling validated ideas contradicts "stop building things nobody wants" — the whole point is giving builders what they need.
- **Sponsors love engaged niche audiences:** A daily newsletter/site for active builders is a premium ad placement for dev tools and SaaS products.
- **Pro tier stays on the table:** See Value Ladder (Section 20). If subscribers ask for early access or raw data exports, we can add a $29-49/mo Pro tier later. But don't build it until there's pull.

---

## 16. Future Considerations (Not in Scope for V1)

- **Idea difficulty rating:** Tag ideas by complexity (weekend build, 1-week sprint, month-long project)
- **Tech stack suggestions:** Recommend specific technologies for each idea based on the builder's preferences
- **Builder matching:** Connect builders who want to collaborate on the same idea
- **Idea bounties:** Companies or users sponsor ideas they want built
- **Revenue share:** If a builder monetizes an idea from Sparky, optional tip/share mechanism
- **Mobile app:** Push notification with daily idea
- **API access:** Let other platforms pull from Sparky's idea feed
- **Localization:** Ideas specific to non-English markets

---

## 17. Branding

- **Name:** Sparky
- **Domain:** sparky.day
- **Tagline (primary):** "Stop building things nobody wants."
- **Tagline candidates (A/B test):** "One validated idea. Every day. With proof." / "Every idea comes with receipts." / "Build what people are already asking for."
- **Mascot:** Anthropomorphic lightning bolt character — fierce but approachable, esports team aesthetic. Electric blue and bright yellow color palette, clean vector style.
- **Tone:** Energetic, opinionated, builder-first. Not corporate. Speaks like a fellow indie hacker who did the research so you don't have to.
- **Positioning:** Sparky sells **validated demand**, not ideas. Ideas are a commodity — proof that real humans are asking for something to be built is the differentiator. All marketing leads with this distinction.

---

## 18. Founder Story (Epiphany Bridge)

Rob is the attractive character. This narrative is the launch post, landing page hero context, welcome email content, and the story behind Sparky's "About" page.

**The Arc:**

1. **Backstory:** Full-stack developer shipping side projects for years. Built crypto platforms, SaaS tools, employee portals — the full stack, constantly.
2. **The Wall:** Half of the side projects went nowhere. Good code, interesting tech, zero users. No validation, no demand signal. Just building in a vacuum.
3. **Epiphany:** The signals are everywhere — every day, real people are posting "I wish someone would build X" on Reddit, Hacker News, Product Hunt. Nobody was synthesizing them into actionable briefs.
4. **The Plan:** Built Sparky — an automated pipeline that finds what real people are asking for and packages it into a daily brief with full validation data.
5. **Transformation:** Never builds blind again. And now, neither will you.

**Usage:**
- X launch thread: Tell the story in 8-10 tweets, end with link to sparky.day
- Indie Hackers: Story post format, build-in-public angle
- Welcome email: First email new subscribers receive, with the narrative + today's idea
- About page: Longer form, with personality

---

## 19. Content & Viral Strategy

### Content Calendar

| Format | Purpose | Frequency | Phase |
|---|---|---|---|
| Daily idea | Core product, daily habit formation | Daily | Phase 1 |
| Weekly roundup ("5 craziest things people want built") | Viral shareability, broader reach | Weekly | Phase 1 |
| Build-in-public updates about Sparky itself | Meta-content the target audience loves | Ongoing | Phase 1 |
| "I built this" showcases | Builder-driven sharing, community proof | As they come | Phase 2 |
| Themed idea weeks | Topical bundling (e.g., "AI Tools Week") | Monthly | Phase 3 |
| "Best of month" compilations | Recap content, SEO, social sharing | Monthly | Phase 2 |

### Viral Mechanics

Every idea page includes pre-written share copy that's specific and compelling:

> "TIL 73M freelancers want a simpler invoice tool. Might build this weekend. Via @sparky_day sparky.day/ideas/042"

The format works because it leads with a surprising fact (the demand signal), adds personal intent, and tags Sparky. This turns every builder who shares into a distribution channel.

### Email as Growth Engine

- Frame access as exclusive: "Join 847 builders getting tomorrow's validated idea today."
- Welcome email tells the Founder Story — sets the tone and builds connection
- Daily email has the full brief + "I'm Building This" link + share copy
- Weekly roundup email hits a broader audience and is more shareable than individual ideas

---

## 20. Value Ladder

Plan now, launch incrementally. Do not commit to "everything free forever" in marketing. Say "free" but leave the door open.

| Tier | What You Get | When | Price |
|---|---|---|---|
| **Free** | Daily idea + archive + email + claim button | Phase 1 (MVP) | $0 |
| **Community** | Submit solutions, upvote, builder profile, leaderboards | Phase 2 | $0 |
| **Pro** (if demand) | Early access (get tomorrow's idea today), runner-up ideas, raw signal data export, priority "I'm building this" badge | Phase 3+ | $29-49/mo |
| **Sponsors** | Sidebar/email ad slots, "Sponsored Idea" feature slot | Phase 2-3 | $299-999/mo |

The Pro tier is an option, not a commitment. Only build it if subscribers ask for it. The free tier is the growth engine; sponsorships are the revenue engine. Pro would be gravy.

---

## 21. Resolved Decisions

1. **Monetization model:** Free product, monetize with sponsorship and ad slots (TrustMRR model). Free to browse, free to submit solutions. Revenue comes from sidebar/banner ad placements sold to dev tool companies, SaaS products, and communities targeting builders. Start with self-promo slots, open to paid sponsors once traffic justifies it. Price aggressively — start at $299/slot and raise as demand grows.
2. **Idea frequency:** Strictly one per day. Scarcity drives quality perception and daily habit formation. No exceptions on high-signal days — bank the extras for low-signal days instead.
3. **Community features timeline:** Phase 2 — user accounts, solution submissions, and upvoting launch together as a cohesive community feature set.
4. **Content licensing:** All published ideas are public. No restrictive licensing. Ideas are meant to be built — restricting them defeats the mission. This aligns with the builder community ethos and maximizes sharing/virality.
5. **Multi-idea formats:** Yes. Weekly roundups, "best of month" compilations, and themed idea weeks are all on the table for Phase 3+ content expansion.
