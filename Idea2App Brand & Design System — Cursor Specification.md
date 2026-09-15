# Idea2App
## Brand & Design System

### Version 1.0

---

# 1. Brand Essence

## Brand

**Idea2App**

## Core proposition

> From idea to App Store in 10 steps.

## Brand idea

**Ideas are messy. Building software doesn't have to be.**

Idea2App combines two visual worlds:

### IDEA
- handwritten
- imperfect
- exploratory
- playful
- pencil sketches
- squiggles
- arrows
- underlines
- annotations

### APP
- structured
- precise
- technical
- geometric
- clean
- modern
- systematic

The visual identity should show the transition:

**Scribble → Structure**

---

# 2. Brand Personality

Idea2App should feel:

- Smart
- Modern
- Technical
- Optimistic
- Approachable
- Creative
- Practical
- Slightly playful

It should NOT feel:

- Corporate
- Childish
- Cartoonish
- "AI generated"
- Futuristic for the sake of it
- Cyberpunk
- Generic SaaS
- Like an online coding course

The ideal feeling is:

> **A brilliant product designer's notebook meets modern developer tooling.**

Reference the design quality of products such as:

- Linear
- Vercel
- Stripe
- Notion
- Raycast

But introduce the **hand-drawn idea layer** as the distinctive Idea2App element.

---

# 3. Visual Concept

The central visual motif is:

## "The Squiggle"

A pencil line represents an idea being formed.

The line can:

- loop
- circle something
- underline text
- point at something
- connect two objects
- become an arrow
- transform into a UI element
- transform into an app icon
- transition from hand-drawn to geometric

The squiggle should be used sparingly.

It is a **brand accent**, not a background texture.

---

# 4. Logo

Primary logo:

**Idea2App**

The "2" should be visually important because it represents:

**Idea → App**

Recommended wordmark treatment:

**Idea** + **2** + **App**

The "2" can use the brand accent colour.

The icon should combine:

1. a pencil/squiggle
2. an arrow
3. an app/window frame

The conceptual meaning:

**A messy idea becomes a structured application.**

---

# 5. Logo Variants

Create the following variants:

### Primary

Horizontal:

**[Icon] Idea2App**

Used for:

- website header
- desktop
- presentations
- documents

### Compact

**[Icon] Idea2App**

with no tagline.

### Symbol

The icon only.

Used for:

- favicon
- mobile app icon
- social avatar
- browser icon
- small UI elements

### Reversed

White logo on dark background.

### Monochrome

Black logo on white.

White logo on black.

---

# 6. Logo Rules

Do NOT:

- add gradients to the logo
- add drop shadows
- distort the logo
- rotate the logo
- use multiple colours inside the icon unnecessarily
- put the squiggle everywhere
- use a cartoon pencil

The logo should remain recognisable at very small sizes.

---

# 7. Colour Palette

## Primary — Idea Blue

Use a strong technology blue.

```css
--idea-blue: #2563EB;
```

Alternative darker blue:

```css
--idea-blue-dark: #1D4ED8;
```

This is the primary CTA and brand accent.

---

## Ink

```css
--ink: #111827;
```

Primary text.

---

## Charcoal

```css
--charcoal: #374151;
```

Secondary text.

---

## Paper

```css
--paper: #FAFAF9;
```

Warm off-white background.

This is important.

Do not make the entire site pure white.

The slight warmth gives the "paper / notebook" connection without becoming retro.

---

## White

```css
--white: #FFFFFF;
```

Cards and high-contrast surfaces.

---

## Pencil Grey

```css
--pencil: #9CA3AF;
```

Used for:

- squiggles
- secondary annotations
- borders
- inactive elements

---

## Soft Blue

```css
--blue-soft: #EFF6FF;
```

Used for:

- highlighted cards
- backgrounds
- hover states
- step indicators

---

# 8. Optional Accent Colours

Use accent colours very sparingly.

Potential:

```css
--green: #10B981;
--orange: #F59E0B;
--purple: #8B5CF6;
```

These should communicate status or category rather than becoming part of the primary brand.

Blue remains the dominant brand colour.

---

# 9. Typography

Use a modern geometric / neo-grotesk sans-serif.

Preferred:

**Inter**

Alternative:

**Geist**

Use:

### Headlines

Large, bold, tight tracking.

Example:

> From idea to  
> **App Store.**

### Body

Regular weight with generous line height.

### UI

Medium / semibold.

---

# 10. Typography Hierarchy

### H1

72px desktop

48px mobile

Weight: 700–800

Line height: ~0.95–1.05

---

### H2

48px desktop

36px mobile

Weight: 700

---

### H3

24–32px

Weight: 650–700

---

### Body

18px

Line height: 1.6

---

### Small

14px

Used for:

- labels
- metadata
- navigation
- captions

---

# 11. Squiggle System

Create a reusable set of SVG squiggle components.

Examples:

### Underline

A short hand-drawn line beneath important text.

Example:

> Build your **idea**
> ~~~~~~~~~

### Circle

Hand-drawn circle around a word or number.

### Arrow

Loose pencil arrow pointing toward an action.

### Connector

A squiggle connecting:

**Idea → Prototype → Code → App**

### Loop

A circular scribble used around an important concept.

---

# 12. Squiggle Style

The squiggles should look:

- hand drawn
- slightly imperfect
- energetic
- thin
- deliberate

They should NOT look like:

- children's drawings
- comic book illustrations
- graffiti
- chalk
- messy digital brush strokes

Think:

**Product designer sketching in a notebook.**

---

# 13. Squiggle Colour

Primary:

```css
#2563EB
```

Secondary:

```css
#9CA3AF
```

Use blue for emphasis.

Use grey for decoration.

---

# 14. Key Visual Device

The strongest visual device should be:

## "From Scribble to Structure"

For example:

A hero illustration could start with:

```
      ~~~~~
   ~~       ~~
  ~   IDEA     ~~~~~>
                    ┌──────────────┐
                    │              │
                    │    YOUR APP  │
                    │              │
                    └──────────────┘
```

The left side is hand drawn.

The right side becomes a clean interface.

This concept should appear throughout the website.

---

# 15. Homepage Hero

Recommended structure:

### Eyebrow

**THE AI APP-BUILDING PLAYBOOK**

### Headline

> **From idea to App Store  
> in 10 steps.**

Highlight **idea** with a subtle blue squiggle.

### Supporting copy

> Build a real iOS, Android and web application using AI — even if you've never written a line of code.

### CTA

**Start Building →**

Secondary:

**See the 10 steps**

---

# 16. Hero Visual

Do NOT use generic AI imagery.

Instead create a visual showing:

### LEFT

Handwritten idea:

> "What if we built an app that..."

with pencil scribbles, circles and arrows.

↓

### CENTRE

A transition from scribble into structured UI.

↓

### RIGHT

A polished app interface.

The visual communicates the entire product proposition without requiring explanation.

---

# 17. Navigation

Keep navigation extremely simple.

Logo:

**Idea2App**

Navigation:

- How It Works
- 10 Steps
- Tools
- Pricing

CTA:

**Start Building**

---

# 18. Buttons

Primary:

Blue background.

White text.

Rounded corners.

Example:

**Start Building →**

Secondary:

White / transparent.

Dark border.

Example:

**See How It Works**

Buttons should feel like modern software rather than marketing buttons.

---

# 19. Cards

Use relatively subtle rounded corners.

Recommended:

```css
border-radius: 16px;
```

Avoid excessive "pill" UI.

Cards should feel like product interfaces.

Use:

- thin borders
- subtle shadows
- lots of whitespace

---

# 20. The 10 Steps UI

The 10-step framework should be the signature component.

Each step should look like a combination of:

**technical product documentation + notebook annotation.**

Example:

```
01

DEFINE YOUR IDEA

Turn a vague idea into
a clear product specification.

                         ~~~~~~~>
                          Start here
```

Each step should have:

- number
- difficulty
- title
- description
- tools
- output
- CTA

---

# 21. Step Numbers

Make step numbers visually prominent.

Example:

**01**

Use:

- large typography
- light grey
- blue accent
- occasional hand-drawn circle

The number should make the framework feel tangible.

---

# 22. Tool Logos

Display the technology stack as a clean technical system:

Claude
↓
Cursor
↓
GitHub
↓
Neon
↓
Vercel
↓
Flutter
↓
OneSignal
↓
App Store / Google Play

Do not make this look like an advertisement for those companies.

Idea2App is the product.

The tools are the infrastructure underneath it.

---

# 23. Backgrounds

Primary background:

**Paper**

#FAFAF9

Secondary sections:

**White**

Occasional dark section:

**#111827**

The dark section can be used for:

- technical architecture
- AI/code examples
- final CTA

This creates visual contrast.

---

# 24. Code Aesthetic

Where code is displayed, use a dark editor-style panel.

Example:

```text
┌─────────────────────────────────────┐
│  ● ● ●                              │
│                                     │
│  const idea = "build something";    │
│                                     │
│  await ship(idea);                  │
│                                     │
└─────────────────────────────────────┘
```

This should feel like a developer environment.

Use syntax highlighting sparingly.

---

# 25. Animation

Animation should be subtle.

Recommended:

- squiggle drawing itself on screen
- arrow moving from Idea → App
- cards entering sequentially
- step progress animations
- hover states
- subtle button movement

Avoid:

- excessive parallax
- spinning 3D objects
- flashy AI animations
- particle effects
- excessive gradients

The brand should feel **fast and intelligent**, not flashy.

---

# 26. Iconography

Use a consistent outline icon system.

Icons should be:

- geometric
- simple
- 1.5–2px stroke
- rounded ends

Occasionally replace a conventional icon with a hand-drawn squiggle version.

Example:

Normal:

→

Brand:

A slightly imperfect hand-drawn arrow.

---

# 27. Photography

Photography should be used minimally.

Avoid generic:

- developers typing
- robots
- server rooms
- people looking at laptops

Prefer:

- sketches
- interfaces
- app screenshots
- code
- diagrams
- product artefacts

The product itself is the visual hero.

---

# 28. Voice & Copy

Tone:

**Confident, direct, intelligent and slightly playful.**

Avoid corporate language.

Instead of:

> "Leverage AI-powered technological solutions to accelerate your digital transformation."

Say:

> **You have the idea. AI can help you build it.**

Instead of:

> "Our comprehensive framework facilitates..."

Say:

> **We've figured out what to use, when to use it and what to tell the AI.**

---

# 29. Brand Phrases

Potential recurring phrases:

**Your idea. AI. A real app.**

**From scribble to software.**

**From idea to App Store.**

**Stop wondering how. Start building.**

**The AI app-building playbook.**

**10 steps. One clear path.**

**You bring the idea. We connect the dots.**

---

# 30. The Brand Metaphor

The strongest recurring metaphor is:

### "The sketch becomes software."

This can be used throughout the site.

Example:

**Section 1**

A messy idea.

~~~~~~ IDEA ~~~~~~

↓

**Section 2**

A structured product.

┌─────────────┐
│ PRODUCT     │
│ SPEC        │
└─────────────┘

↓

**Section 3**

A real application.

┌──────────────────┐
│      YOUR APP    │
│                  │
└──────────────────┘

---

# 31. Cursor Implementation Requirements

Create the design system as reusable components.

Do NOT hard-code styling individually into each page.

Create:

- global colour tokens
- typography tokens
- spacing tokens
- border radius tokens
- shadow tokens
- button components
- card components
- badge components
- step components
- squiggle SVG components
- icon components

Use CSS variables / Tailwind tokens.

---

# 32. Required Components

Create:

### Brand

`Logo`

`LogoMark`

`Squiggle`

`SquiggleArrow`

`SquiggleUnderline`

`SquiggleCircle`

---

### UI

`Button`

`Card`

`Badge`

`Container`

`Section`

`Heading`

`StepCard`

`ToolCard`

`PricingCard`

---

### Framework

`StepTimeline`

`StepProgress`

`ToolStack`

`PromptCard`

`Checklist`

---

# 33. Responsive Design

Desktop:

1440px design target.

Tablet:

768px+

Mobile:

375px+

The design should be mobile-first where practical.

On mobile:

- reduce headline size
- preserve generous whitespace
- collapse navigation
- stack cards
- simplify decorative squiggles
- maintain visual hierarchy

---

# 34. Accessibility

Ensure:

- WCAG AA contrast
- keyboard navigation
- semantic HTML
- accessible buttons
- accessible links
- alt text
- reduced-motion support

Squiggles must never be required to understand the content.

---

# 35. Overall Design Rule

Whenever deciding between two visual options:

**Choose the cleaner option.**

Then add the **Idea2App squiggle** as the distinctive brand layer.

The site should feel:

> **80% modern technology product**
>
> **20% creative notebook**

Not:

> 50% technology + 50% hand-drawn illustration.

The technology should remain the dominant visual language.

---

# 36. Final Design Test

The website should pass this test:

If the logo and copy were removed, could someone still recognise the site as Idea2App?

The answer should eventually be:

**Yes — because of the combination of:**

**Cobalt blue + warm paper + black typography + pencil squiggles + structured UI.**

That combination is the Idea2App visual signature.

---

# 37. Cursor Instruction

Update the existing Idea2App website to implement this brand system.

Do not rebuild the product architecture unless necessary.

First inspect the existing codebase and identify:

- framework
- styling system
- components
- pages
- assets
- typography
- existing colour tokens

Then implement the brand system globally.

Prioritise:

1. Logo
2. Typography
3. Colour system
4. Hero
5. Navigation
6. 10-step framework
7. Cards
8. Buttons
9. Tool directory
10. Pricing
11. Footer

The finished site should feel like a **credible, premium technology company**, not an AI-generated website.

The squiggle is the distinctive Idea2App brand asset.

Use it deliberately and consistently.

Do not cover the page in scribbles.

**Core visual principle:**

> **Messy idea → structured technology → real app.**

### One change I'd make to your current site

The current website is **very clean but visually generic**. The copy and structure are good; the thing missing is a memorable *visual device*. The squiggle gives you that. The existing site already has the right information architecture — 10-step framework, stack, pricing and CTA — so I wouldn't throw that away.

I'd make the **squiggle-to-app transformation the hero animation**. That's the bit that could make Idea2App recognisable from a screenshot.

And I'd keep **Idea2App** as the brand rather than changing it to "Couch to App": `idea2app.co` already gives you an extremely clear name/domain, and the current proposition is immediately understandable.

The generated logo direction above is the starting point I'd use for the designer/Cursor implementation.