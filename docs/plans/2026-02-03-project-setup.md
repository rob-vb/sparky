# Project Setup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Set up Next.js 16 with Tailwind CSS 4 and shadcn/ui, ready for Vercel deployment.

**Architecture:** Initialize Next.js App Router project with TypeScript, integrate Tailwind CSS 4 for styling, add shadcn/ui component library, create a minimal landing page to verify the setup works.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, pnpm

---

## Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `app/` directory structure

**Step 1: Create Next.js app with latest version**

```bash
cd /home/henk/sparky
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --yes
```

Note: The `--yes` flag accepts defaults. This creates:
- Next.js 16 with App Router
- TypeScript configured
- Tailwind CSS 4 pre-configured
- ESLint configured
- `src/` directory structure
- Turbopack for dev server

**Step 2: Verify installation**

```bash
ls -la src/app/
```

Expected: See `layout.tsx`, `page.tsx`, `globals.css`

**Step 3: Test dev server starts**

```bash
cd /home/henk/sparky && pnpm dev &
sleep 5
curl -s http://localhost:3000 | head -20
pkill -f "next dev"
```

Expected: HTML response from Next.js

**Step 4: Commit initial setup**

```bash
git add -A
git commit -m "feat: initialize Next.js 16 with Tailwind CSS 4

- App Router with TypeScript
- Tailwind CSS 4 configured
- ESLint enabled
- Turbopack for development"
```

---

## Task 2: Install and Configure shadcn/ui

**Files:**
- Create: `components.json`
- Modify: `src/app/globals.css`
- Create: `src/components/ui/` directory

**Step 1: Initialize shadcn/ui**

```bash
cd /home/henk/sparky
pnpm dlx shadcn@latest init -y
```

When prompted (if not using -y):
- Style: Default
- Base color: Neutral
- CSS variables: Yes

**Step 2: Verify shadcn configuration**

```bash
cat components.json
```

Expected: JSON config with `"aliases"` pointing to `@/components`

**Step 3: Install a test component (Button)**

```bash
pnpm dlx shadcn@latest add button -y
```

**Step 4: Verify component installed**

```bash
ls src/components/ui/
cat src/components/ui/button.tsx | head -20
```

Expected: `button.tsx` exists with React component code

**Step 5: Commit shadcn setup**

```bash
git add -A
git commit -m "feat: add shadcn/ui with Button component

- Initialized shadcn/ui configuration
- Added Button as first component
- CSS variables configured"
```

---

## Task 3: Create Minimal Landing Page

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css` (clean up defaults)

**Step 1: Clean up default globals.css**

Replace `src/app/globals.css` with minimal Tailwind setup (keep shadcn variables):

```css
@import "tailwindcss";

:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 96.1%;
  --accent-foreground: 0 0% 9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 3.9%;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 0 0% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;
  --secondary: 0 0% 14.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 0 0% 14.9%;
  --muted-foreground: 0 0% 63.9%;
  --accent: 0 0% 14.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 0 0% 14.9%;
  --input: 0 0% 14.9%;
  --ring: 0 0% 83.1%;
  --chart-1: 220 70% 50%;
  --chart-2: 160 60% 45%;
  --chart-3: 30 80% 55%;
  --chart-4: 280 65% 60%;
  --chart-5: 340 75% 55%;
}

@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-chart-1: hsl(var(--chart-1));
  --color-chart-2: hsl(var(--chart-2));
  --color-chart-3: hsl(var(--chart-3));
  --color-chart-4: hsl(var(--chart-4));
  --color-chart-5: hsl(var(--chart-5));
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

**Step 2: Create landing page with Button component**

Replace `src/app/page.tsx`:

```tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          ⚡ Sparky
        </h1>
        <p className="text-xl text-muted-foreground max-w-md">
          Stop building things nobody wants.
        </p>
        <Button size="lg">
          Get Started
        </Button>
      </div>
    </main>
  );
}
```

**Step 3: Test the page renders**

```bash
cd /home/henk/sparky && pnpm dev &
sleep 5
curl -s http://localhost:3000 | grep -o "Sparky"
pkill -f "next dev"
```

Expected: "Sparky" appears in output

**Step 4: Commit landing page**

```bash
git add -A
git commit -m "feat: add minimal landing page with Sparky branding

- Clean globals.css with shadcn variables
- Landing page with tagline and Button component"
```

---

## Task 4: Prepare for Vercel Deployment

**Files:**
- Verify: `package.json` has correct scripts
- Verify: `.gitignore` is proper

**Step 1: Verify build works**

```bash
cd /home/henk/sparky && pnpm build
```

Expected: Build completes successfully with no errors

**Step 2: Verify .gitignore exists and is correct**

```bash
cat .gitignore | head -20
```

Expected: Should include `.next/`, `node_modules/`, etc.

**Step 3: Commit any remaining changes**

```bash
git status
# If there are changes:
git add -A
git commit -m "chore: verify build configuration"
```

---

## Task 5: Push to GitHub

**Files:**
- None (git operations only)

**Step 1: Check current branch**

```bash
git branch
```

Expected: `main` or `master`

**Step 2: Push to origin**

```bash
git push origin main
```

Expected: Successful push to https://github.com/rob-vb/sparky.git

**Step 3: Verify push succeeded**

```bash
git log --oneline -3
```

Expected: Recent commits visible

---

## Summary

After completing all tasks:
1. ✅ Next.js 16 with App Router initialized
2. ✅ Tailwind CSS 4 configured
3. ✅ shadcn/ui installed with Button component
4. ✅ Minimal landing page created
5. ✅ Code pushed to GitHub

**Next step:** Import project in Vercel dashboard at https://vercel.com/new
