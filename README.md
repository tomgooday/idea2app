# Idea2App

From idea to App Store in 10 steps.

This is the marketing site + framework content for **Idea2App**
(`idea2app.co`) — see
[`AI App Builder — Product Requirements Document.md`](./AI%20App%20Builder%20%E2%80%94%20Product%20Requirements%20Document.md)
for the full product spec, and Section 23 for the decisions log.

## Current scope — Build Pass 1

This build is the leanest possible first pass: a static marketing site with
no accounts, database, or payments yet.

- Marketing homepage
- The 10-step framework (`/steps`, `/steps/[slug]`)
- Tool directory (`/tools`)
- Prompt library (`/prompts`)
- Pricing page — informational only, no live checkout (`/pricing`)

**Build Pass 2** (deferred) adds authentication (Clerk), a project
dashboard, progress tracking, Stripe checkout, and a real CMS.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- Content is stored as typed data in [`src/lib/data`](./src/lib/data) —
  no CMS or database yet, by design, until Pass 2

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                 Routes (App Router)
    steps/             /steps and /steps/[slug]
    tools/             /tools
    prompts/           /prompts
    pricing/           /pricing
  components/          Shared UI (header, footer, cards, ui/ primitives)
  lib/
    config.ts          Brand name, tagline, domain — not hard-coded elsewhere
    data/               Steps, tools, prompts, pricing content
    utils.ts            cn() className helper
```

## Deployment

Intended for Vercel, with GitHub as source control (see PRD Section 22).
No environment variables are required for Build Pass 1 — see
[`.env.example`](./.env.example) for what Pass 2 will need.
