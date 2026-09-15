# Product Requirements Document
## AI App Builder — "Idea2App"

> **Status: Build Pass 1 is live at [idea2app.co](https://idea2app.co).**
> See Section 23 (Decisions Log) for what's been decided, and Section 24
> (Implementation Status) for what's actually shipped and running.

### 1. Product Overview

Build a web-based product that helps non-technical people turn an idea into a real, functioning application using modern AI development tools.

The core proposition is:

> **You have an idea. We'll show you how to turn it into a real app.**

The product packages the tools, processes, prompts, templates and technical knowledge required to go from:

**Idea → Prototype → Database → Code → Backend → Mobile → Testing → App Stores → Launch**

The initial product should be structured around a simple **10-step framework**.

Working brand name:

**Idea2App** (domain: idea2app.co)

Working proposition:

> **From idea to App Store in 10 steps.**

Alternative positioning:

> **Build a real app with AI — even if you can't code.**

The product should ultimately be capable of becoming a paid digital product, education platform, community and/or "done with you" service.

---

# 2. Problem

AI has dramatically reduced the difficulty of building software, but the process is still fragmented.

A non-technical person with an app idea currently needs to understand and configure:

- AI coding tools
- Claude / LLMs
- Cursor / coding agents
- GitHub
- databases
- APIs
- hosting
- environment variables
- authentication
- mobile frameworks
- iOS development
- Android development
- notifications
- App Store submission
- Google Play submission
- domains
- deployment
- testing
- production environments

The individual tools are relatively accessible.

The difficult part is knowing:

> **What do I use, in what order, and how do I connect everything together?**

This product solves that problem.

---

# 3. Target Customer

Primary customer:

A non-technical or lightly technical person who:

- has an idea for an app
- wants to build it themselves
- is interested in AI
- has little or no traditional software development experience
- does not want to spend tens of thousands of dollars hiring developers
- wants to understand what is happening rather than simply generating a prototype
- wants to ultimately launch a real product

Examples:

- founders with an idea
- entrepreneurs
- consultants
- creators
- product managers
- small business owners
- students
- people with side-project ideas
- aspiring indie hackers

Secondary customer:

Existing developers who want to accelerate development using AI.

---

# 4. Product Philosophy

The product should NOT position itself as:

> "AI will magically build your app for you."

Instead:

> **AI is the new development team. We provide the operating system for using it.**

The customer remains in control.

The product teaches them:

- what to build
- what tools to use
- what order to use them in
- what prompts to give the AI
- how to verify the AI's work
- how to deploy
- how to troubleshoot

The product should emphasise that a prototype and a production application are different things.

---

# 5. Core 10-Step Framework

## Step 1 — Define Your Idea

Turn the initial idea into:

- product proposition
- target customer
- core problem
- MVP
- key user journeys
- functional requirements

Output:

**A clear product specification.**

---

## Step 2 — Prototype

Create a visual prototype of the application.

The user should define:

- screens
- navigation
- primary actions
- user journeys
- core functionality

Output:

**A working product prototype.**

---

## Step 3 — Design the Database

Before generating large amounts of code, define:

- database entities
- relationships
- tables
- fields
- authentication model
- permissions
- APIs

Recommended technology:

**PostgreSQL / Neon**

Important principle:

> Design the database before allowing the AI coding agent to build the full application.

This avoids a common failure mode where AI generates an application structure that later becomes difficult to modify.

---

## Step 4 — Build With AI

Recommended stack:

- Claude
- Cursor
- GitHub

The AI coding agent should be given the product specification and database architecture.

The system should encourage the user to:

1. create the repository
2. establish the project structure
3. create the database
4. implement features incrementally
5. test each feature
6. commit changes to GitHub

---

## Step 5 — Backend & Hosting

Recommended tools:

- Vercel
- Neon
- GitHub

Vercel manages:

- deployment
- environment variables
- API infrastructure
- server logs
- production deployment

Neon manages:

- PostgreSQL database
- staging database
- production database

The product should explain:

**Development → Staging → Production**

and why users should not build directly against their production environment.

---

## Step 6 — Turn It Into a Mobile App

Recommended framework:

**Flutter**

Alternative:

**React Native**

Goal:

> One codebase → iOS + Android + Web

The product should explain the trade-offs between:

- web app
- PWA
- Flutter
- React Native
- native development

For the standard pathway, recommend Flutter unless there is a strong reason to choose React Native.

---

## Step 7 — Notifications & Communications

Recommended:

**OneSignal**

Use cases:

- push notifications
- email notifications
- transactional communications

Explain how the application can communicate with users through a simple API.

---

## Step 8 — Testing

Introduce:

- local testing
- staging testing
- end-to-end testing
- mobile testing
- production smoke testing

The customer should be encouraged to test the complete journey before deployment.

Example:

Sign up → create account → perform core action → receive notification → data saved → log out → log in → data persists.

---

## Step 9 — App Stores

iOS:

- Apple Developer account
- Xcode
- App Store Connect

Android:

- Google Play Console
- Android build pipeline

The product should explain:

- developer accounts
- certificates
- signing
- app metadata
- screenshots
- privacy requirements
- permissions
- review process
- app submission

---

## Step 10 — Launch

Final launch checklist:

- domain
- website
- production database
- production environment variables
- analytics
- error monitoring
- notifications
- backups
- privacy policy
- terms
- App Store listing
- Google Play listing
- final QA

Output:

> **A real, publicly available application.**

---

# 6. Website

The first version of the website should be a premium SaaS/education landing page.

Primary objective:

**Convert visitors into customers.**

Secondary objective:

**Explain the 10-step methodology clearly enough that users understand why this is different from simply asking ChatGPT to build an app.**

---

# 7. Homepage Structure

## Hero

Headline:

> **From idea to App Store in 10 steps.**

Subheadline:

> Build a real iOS, Android and web application using AI — even if you've never written a line of code.

Primary CTA:

**Start Building**

Secondary CTA:

**See How It Works**

---

## Problem Section

Headline:

> AI made coding easier.  
> It didn't make building an app simple.

Explain the fragmented tooling problem.

Show the ecosystem:

Claude → Cursor → GitHub → Neon → Vercel → Flutter → OneSignal → Xcode → App Store → Google Play

Then explain:

> We connect the dots.

---

# 8. The 10 Steps

Create a visually engaging timeline/card system.

Each step should contain:

- step number
- title
- short explanation
- recommended tools
- expected output
- estimated difficulty
- CTA

The user should be able to click each step to see more detail.

---

# 9. Tools

Create a dedicated section explaining the recommended stack.

### AI

Claude

### Development

Cursor

### Source Control

GitHub

### Database

Neon / PostgreSQL

### Hosting

Vercel

### Mobile

Flutter

### Notifications

OneSignal

### iOS

Xcode / App Store Connect

### Android

Google Play Console

Each tool should have:

- logo
- description
- why we recommend it
- link
- approximate pricing
- alternatives

The architecture must allow tools to be changed later without rebuilding the whole website.

---

# 10. Interactive Product Experience

The eventual product should not just be a static course.

Users should be able to create an "App Project".

Example:

### My App

**Project: Matees**

Progress:

**3 / 10 steps completed**

---

### Step 1 — Define Your Idea

Questions:

- What is your app?
- Who is it for?
- What problem does it solve?
- What is the primary user action?
- What are the three most important features?

The system should turn these answers into an automatically generated:

**Product Requirements Document**

The user can then give that PRD directly to Claude.

---

# 11. AI Prompt Library

One of the key pieces of intellectual property should be a library of high-quality prompts.

Examples:

### Product prompt

"Turn my idea into an MVP product specification..."

### Database prompt

"Based on this product specification, design a production-ready PostgreSQL schema..."

### Architecture prompt

"Review this application architecture..."

### Coding prompt

"Implement this feature without changing existing functionality..."

### Testing prompt

"Create an end-to-end test plan..."

### Debugging prompt

"Analyse this error..."

Prompts should be:

- copyable
- editable
- contextual
- version controlled

---

# 12. Templates

Provide downloadable / copyable templates for:

- PRD
- database schema
- user stories
- API specification
- app architecture
- environment variables
- QA checklist
- launch checklist
- App Store checklist
- Google Play checklist

---

# 13. Progress Tracking

Users should be able to mark steps as:

- Not Started
- In Progress
- Complete

Display:

**Your progress: 40%**

The dashboard should show:

- current step
- next action
- outstanding tasks
- recommended tools
- relevant prompts

---

# 14. Monetisation

**Updated per stakeholder decision — see Section 23.** The site itself
(the 10-step overview, tool directory, and a starter prompt set) remains
free to browse. On top of that, the product is sold as three named
products, plus one future offering:

### DIY — "The 10-Step Playbook" — $99–299 (one-time)

- Complete 10-step framework — video walkthroughs for every step
- Full AI prompt library
- All templates (PRD, database schema, API spec, and more)
- Step-by-step checklists for every step
- Lifetime access to updates

### PRO — "Build Your App" — $500–1,500 (one-time)

Everything in DIY, plus:

- Private community of other builders
- Expert review of your app as you build it
- Priority access to new prompts and templates
- Project dashboard with progress tracking

### Done With You — "Launch Your App" — $3k–10k+ (project-based)

Everything in Pro, plus:

- Hands-on help building your app, step by step
- Architecture and code reviews from a real engineer
- Direct support through App Store and Google Play submission
- A real, launched app at the end

### Future: Done For You — "Give us your idea. We'll build it."

A full product-studio offering for founders who want the outcome, not the
process — you describe the idea, the team scopes, builds and launches it.
Positioned as a materially larger business than the framework/education
product (consultancy / product studio), to be introduced after DIY, Pro
and Done With You are live and validated.

Exact price points within each range, and the billing mechanism (Stripe
checkout vs. an application/sales process for Done With You), are not
yet finalised — see open items in Section 23.

---

# 15. Technical Architecture

Preferred stack:

### Frontend

Next.js / React

### Styling

Tailwind CSS

### Backend

Next.js API routes / server actions

### Database

PostgreSQL / Neon

### Authentication

Use a modern authentication provider.

### Payments

Stripe

### Hosting

Vercel

### Analytics

Use a lightweight analytics solution.

### CMS

Initially content can be stored directly in the application/database.

Architecture should allow migration to a CMS later.

---

# 16. Design Direction

The website should feel:

- premium
- modern
- technical
- approachable
- AI-native
- credible

Avoid:

- generic "AI startup" gradients
- excessive futuristic imagery
- cheesy robots
- stock photography
- overly complex interfaces

Think:

**Apple + Linear + modern developer tooling**

The user should immediately feel:

> "This is a serious system for building products."

---

# 17. Brand Direction

Working brand:

**Idea2App** (idea2app.co)

Tagline:

> **From idea to App Store in 10 steps.**

Alternative:

> **Your idea. AI. A real app.**

Alternative brand names should remain configurable.

Do not hard-code the brand name throughout the application.

---

# 18. MVP Requirements

The first version does NOT need the full platform.

MVP should include:

1. Marketing homepage
2. 10-step framework
3. Individual step pages
4. Tool directory
5. Prompt library
6. Templates
7. Pricing page
8. Signup/login
9. Basic user dashboard
10. Project creation
11. Progress tracking
12. Stripe payment
13. Basic CMS/content management capability

---

# 19. Future Features

Potential future functionality:

- AI product consultant
- AI PRD generator
- AI database designer
- AI architecture reviewer
- AI code reviewer
- AI debugging assistant
- GitHub integration
- Cursor integration
- project health checks
- automated testing
- deployment guidance
- App Store submission assistant
- community
- expert marketplace
- app templates
- app starter repositories
- agency / team accounts

---

# 20. Key Success Metric

The ultimate success metric is NOT:

> Number of people who read the course.

It is:

> **Number of users who successfully launch a real application.**

Secondary metrics:

- signup conversion
- paid conversion
- step completion
- project completion
- prompt usage
- template downloads
- percentage reaching Step 10
- number of apps launched

---

# 21. Critical Product Principle

The product must always optimise for:

> **Getting the customer from "I have an idea" to "My app is live."**

Every feature should be evaluated against this objective.

Do not build unnecessary functionality simply because it is technically interesting.

The product should be a guided path, not a complicated software development platform.

---

# 22. First Build Instruction

Build the MVP website first.

Do not attempt to build the complete platform immediately.

**Build Pass 1 (leanest possible slice — no accounts, no payments): ✅ Shipped, live at idea2app.co**

1. Homepage
2. 10-step framework overview
3. Step detail pages (Steps 1–2 free preview; Steps 3–10 gated — see Section 23)
4. Tool directory, including a detail page per tool
5. Prompt library (static/read-only)
6. Pricing page (informational only — no live checkout yet)

**Build Pass 2 (deferred until Pass 1 is validated):**

7. Authentication (Clerk)
8. Basic dashboard
9. Project creation
10. Progress tracking
11. Stripe payments / live checkout
12. Basic CMS / content management capability

Use a clean, production-ready architecture.

Create the database schema before implementing the application.

Separate:

- development
- staging
- production

Use environment variables for all secrets.

Use GitHub for source control.

Use Vercel for deployment.

The application should be responsive and work exceptionally well on mobile.

Build the product incrementally, testing each feature before moving to the next.

Do not invent unnecessary functionality.

Where a product decision is unclear, prioritise:

**simplicity → user outcome → scalability.**

---

# 23. Decisions Log

Decisions confirmed with stakeholder on first PRD review:

- **Brand / domain:** `idea2app.co` is the real brand and domain. Working brand name updated to **Idea2App** throughout this document (replacing the placeholder "Couch to App"). Brand name remains configurable in code per Section 17.
- **First build scope:** Leanest possible first pass — marketing homepage, 10-step content, step detail pages, tool directory, and prompt library only. No auth, dashboard, project creation, or payments in Pass 1 (see Section 22).
- **Content:** No existing copy for the 10 steps, tool directory, prompts, or templates. Draft placeholder/production-quality copy as part of the build; stakeholder to review and refine after first draft.
- **Authentication provider:** Clerk (deferred to Build Pass 2).
- **Analytics provider:** PostHog (product analytics — useful for tracking step-completion funnels, not just pageviews).
- **Open / not yet decided:** CMS approach beyond "content in DB," AU-specific billing details (GST, ABN, invoicing entity), SEO/content-marketing plan.
- **Tool directory scope:** Each tool gets its own detail page (`/tools/[slug]`) in Build Pass 1, not just directory cards.
- **Pricing model (supersedes the original Free/Pro/Premium draft in Section 14):** Three paid products — **DIY** ("The 10-Step Playbook," $99–299 one-time), **PRO** ("Build Your App," $500–1,500 one-time), and **Done With You** ("Launch Your App," $3k–10k+ project-based) — plus a future **Done For You** ("Give us your idea. We'll build it.") product-studio offering, introduced later as a potentially much larger consultancy/product-studio business. Browsing the framework itself (steps, tools, starter prompts) stays free. No live checkout yet in Build Pass 1 — pricing page CTAs currently route to a `mailto:` interest-registration link as a placeholder.
- **Open / not yet decided:** exact price points within each range, DIY/Pro checkout mechanism vs. Done With You's application/sales process, and whether Done With You should be application-gated or self-serve.
- **Domain update:** switched from `idea2app.com.au` to **`idea2app.co`** (stakeholder now owns this domain). Updated throughout — brand name, contact email, and this document.
- **Content gating:** the full step-by-step "what you'll do" checklist, key principle and common mistake for each step is the core paid IP of the DIY Playbook. Steps 1–2 remain fully open on the public site as a preview; Steps 3–10 show the step's overview, first checklist item, recommended tools and expected output for free, then blur/lock the remainder behind a "Get the DIY Playbook" CTA. This is a Build Pass 1 stopgap (simple constant-based gating, no real entitlement check) — real access control arrives with auth + purchases in Build Pass 2.
- **Tighter content gating (supersedes the gating decision above):** the site was giving away too much of the paid IP for free. Free preview is now just **Step 1** (was Steps 1–2) — Steps 2–10 show only the overview, first checklist item, recommended tools and expected output, with the rest locked. The prompt library shows exactly **one full prompt free** (the MVP spec prompt); all other prompts show their title/description with the prompt body blurred/locked behind a "Get the DIY Playbook" CTA. Same Build Pass 1 caveat applies — this is a soft, page-source-bypassable deterrent, not real entitlement.
- **USP repositioning vs. AI prototype tools (Lovable, Bolt, Base44, etc.):** these tools produce a hosted prototype inside their own sandbox. Idea2App's differentiator is that it gives the founder the blueprint to build, launch and **maintain** a real app themselves — their own codebase, database and hosting, with no platform lock-in or usage ceiling, and a real path to the App Store and Google Play. The homepage hero subheadline and a new "A prototype is not a product" comparison section (naming Lovable/Bolt/Base44 once) now carry this directly, rather than leaving it implicit. A matching FAQ entry was added to the pricing page.
- **Copy style:** em dashes (`—`) removed from all customer-facing site copy and replaced with hyphens (`-`). Internal docs (this PRD, README, AGENTS.md) are unaffected.
- **Real tool logos (replaces generic Lucide icons in the tool directory):** each of the 10 tools in `src/lib/data/tools.ts` now shows its actual brand logo (`public/logos/*`) instead of a generic outline icon, rendered via `src/components/tool-logo.tsx`. Sourced from official/authoritative locations per tool: `simple-icons` (with each brand's official hex baked in) for Claude, GitHub, Vercel, Flutter, React (used for React Native) and Xcode; the tool's own site assets for Cursor (their app-icon PNG) and OneSignal (their SVG mark, rasterised); Neon's GitHub org avatar; and a high-resolution Wikimedia SVG for the colourful Google Play triangle (Google's own favicon was only 32px). The old `src/components/icon.tsx` (Lucide wrapper) was removed as it's no longer used anywhere.
- **Brand & Design System adopted (supersedes the "dark-first" styling decision in Section 24):** implemented the palette, typography scale and logo from `Idea2App Brand & Design System — Cursor Specification.md`. The site moved from a dark-first theme to the spec's light "paper" theme (`#FAFAF9` background, `#111827` ink text, `#2563EB` Idea Blue accent), since the design system explicitly calls for the paper/ink/blue palette rather than dark mode. Implemented by re-pointing the existing semantic colour tokens in `globals.css` (`background`, `elevated`, `foreground`, `muted`, `accent`, etc.) rather than rewriting components, so the retheme is a token-level change. Added: the real logo (cropped from `Idea2App_Logo.png` into an icon mark used in the header, footer and as the site favicon/apple-touch-icon; the wordmark is rendered as real text with the "2" in accent blue, per Section 4 of the spec, rather than as an image, for crispness and accessibility); a small hand-drawn "squiggle" SVG accent system (`src/components/brand/squiggle.tsx`), used sparingly - an underline beneath "idea" in the homepage headline, and a hover-circle behind step numbers; a permanently dark "code panel" style for prompt/code blocks regardless of the surrounding light theme (per the spec's "Code Aesthetic" section); and a larger/bolder heading scale matching the spec's H1/H2 sizes. Font stays **Geist** (the spec's explicit alternative to Inter) rather than switching fonts. Out of scope for this pass: the full hand-drawn "scribble becomes structured UI" hero illustration/animation (Section 16 of the design spec) - the hero keeps its existing layout with only the squiggle-underline and copy/type updates.

---

# 24. Implementation Status (as of 15 Sep 2026)

This section documents what has actually been built and deployed, so it
stays separate from decisions (Section 23) and original scope (Section 22).

## Live

- **URL:** [https://idea2app.co](https://idea2app.co) — canonical domain.
  `www.idea2app.co` redirects to it with a 308 (permanent) at the DNS/edge
  level, not in application code.
- **Repository:** [github.com/tomgooday/idea2app](https://github.com/tomgooday/idea2app)
  (`main` branch).
- **Hosting:** Vercel project `idea2app` (team `tom-4081s-projects`),
  connected to the GitHub repository — every push to `main` auto-deploys
  to production. No staging environment/branch deploys configured yet
  (Build Pass 2 concern, once there's a database to separate).
- **DNS:** registered with a third-party registrar (GoDaddy), nameservers
  unchanged (`ns03`/`ns04.domaincontrol.com`). Apex has a single `A` record
  → `76.76.21.21` (Vercel). `www` is a `CNAME` → `idea2app.co`. SSL is
  auto-provisioned by Vercel.

## Stack as built

- **Framework:** Next.js 16 (App Router, Turbopack), TypeScript.
- **Styling:** Tailwind CSS v4, light "paper" design system (paper
  background, ink typography, a single Idea Blue accent, no gradients/stock
  imagery) per `Idea2App Brand & Design System — Cursor Specification.md`
  — see Section 23 decision log entry. No dark mode toggle; a `.section-dark`
  utility exists for occasional dark sections but isn't applied anywhere yet.
- **Icons:** `lucide-react`, plus a small hand-drawn "squiggle" SVG accent
  system in `src/components/brand/squiggle.tsx`.
- **Logo:** real brand assets, cropped from `Idea2App_Logo.png` into
  `public/brand/` and `src/app/icon.png` / `src/app/apple-icon.png`
  (favicon, apple touch icon). Header/footer use `src/components/brand/logo.tsx`.
- **Cache Components:** not enabled (`cacheComponents` left off in
  `next.config.ts`) — every route is fully static for Build Pass 1, so the
  simpler default caching model is sufficient. Revisit if/when Build Pass 2
  introduces per-user/dynamic data.
- **Content model:** no CMS or database yet. All content (steps, tools,
  prompts, pricing) lives as typed data in `src/lib/data/*.ts`, matching
  the "basic CMS/content management capability" placeholder from Section
  18 — intentionally simple until Build Pass 2.

## Routes shipped (30 statically prerendered pages)

- `/` — homepage
- `/steps` — 10-step framework overview
- `/steps/[slug]` — one detail page per step (10 pages)
- `/tools` — tool directory
- `/tools/[slug]` — one detail page per tool (10 pages)
- `/prompts` — prompt library (copy-to-clipboard)
- `/pricing` — DIY / PRO / Done With You, plus a "Done For You" coming-later callout
- `/icon.png`, `/apple-icon.png` — favicon and Apple touch icon (Next.js
  metadata file convention), generated from the real logo

## Known gaps / not yet done

- No live checkout — pricing CTAs open a pre-filled `mailto:hello@idea2app.co`
  as an interest-registration placeholder.
- No auth, dashboard, project creation, or progress tracking (Build Pass 2).
- Content gating (Section 23) is a simple constant, not a real entitlement
  check — bypassable via page source. Fine as a soft deterrent for now;
  needs real access control once purchases exist. Free preview is now
  Step 1 only, plus one free sample prompt; everything else is
  blurred/locked behind a "Get the DIY Playbook" CTA.
- No staging environment — Neon/database separation from Section 5 and 15
  hasn't started, since there's no database yet.
- No analytics installed yet (PostHog was the decision — see Section 23 —
  but it isn't wired into the codebase yet).
- Local git identity used for commits is a placeholder (`Tom Gooday` /
  `tom@idea2app.co`) — fine for now since GitHub auth for pushes goes
  through `gh`, not git commit identity, but worth setting properly if
  this matters for commit attribution later.