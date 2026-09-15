# Idea2App — Time-Leverage & Operations Spec

> Part 1 of 4 in the growth playbook. See also: `02-au-target-segments-and-channels.md`,
> `03-au-rollout-phases.md`, `04-conversion-funnel-and-measurement.md`.
>
> **Status:** Proposal / not yet actioned. Nothing in this document has been
> implemented or decided — see the PRD's Section 23 (Decisions Log) for what's
> actually been agreed. This is a working spec to react to and refine.

## Purpose

Idea2App is run by one person. The constraint on growth is not customer
demand, it's founder hours. This spec defines how to keep the business
running on a small, predictable weekly time budget as DIY, PRO and Done
With You start selling — by treating anything that doesn't scale without
more of the founder's time as something to automate, templatize, or cap,
rather than something to just do by hand.

## Core principle

Every product or operational decision should be judged against one
question:

> **Does this scale without more of my time?**

Concretely:

- **DIY and PRO** should be 100% self-serve and asynchronous — no calls,
  no manual steps between "customer pays" and "customer has access."
- **Done With You** should be capped in volume and heavily templated —
  the same playbook, prompts, checklists and Loom videos reused for every
  client, not bespoke work each time.
- **Done For You** (the future product-studio offering) is the biggest
  time sink of all four products and should not launch until DIY, PRO and
  Done With You are validated and there's a team to run it, per the PRD's
  Section 14 note that it's a "future" offering.

## Where founder time leaks today

| Where time leaks today | Manual today | Fix | Result |
|---|---|---|---|
| Sales & payment | `mailto:` interest link, manual follow-up | Lemon Squeezy hosted checkout | Sales close themselves, 24/7 |
| Tax & invoicing | Founder would own GST/ABN tracking | Lemon Squeezy as merchant of record | Compliance handled by the platform, not the founder |
| Content delivery | Doesn't exist yet | Webhook-triggered access grant on purchase | Zero marginal cost per sale |
| PRO support & "expert review" | Would default to on-demand DMs | One weekly group office-hours call | Support time capped to ~1 hour/week |
| Done With You delivery | Bespoke per client | One reusable SOP + templates + Looms, capped cohort size | Prevents scope creep from eating the week |
| Done With You intake | Ad hoc calls with anyone who asks | Application form + fixed monthly slots | Filters and schedules before it reaches the calendar |

## Recommendation: use a merchant of record

> **Decided:** Lemon Squeezy — see PRD Section 23. The comparison below is
> kept for context on why.

For a solo AU operator, **Lemon Squeezy or Paddle acting as merchant of
record** removes GST registration, invoicing, and cross-border tax
handling entirely — they are the legal seller, not Idea2App. That's less
engineering to build right now (no custom Stripe + Clerk checkout needed
to start selling) and less ongoing admin, at the cost of a slightly
higher transaction fee than raw Stripe.

This directly resolves the open PRD item: *"AU-specific billing details
(GST, ABN, invoicing entity)"* (Section 23) — a merchant of record makes
that problem someone else's job.

Recommended sequencing: launch DIY/PRO checkout on a merchant of record
first. Only build a custom Stripe integration (as scoped in Build Pass 2)
once volume and the need for tighter product integration (accounts,
dashboard, progress tracking) justify the engineering time.

## Before spending time on promotion, close these gaps

- [ ] Replace the `mailto:` pricing CTA with Lemon Squeezy hosted checkout
      for DIY and PRO. This is the single biggest unlock — it turns every
      sale from a manual email thread into an automatic transaction.
- [x] Pick a merchant of record — **Lemon Squeezy** (see PRD Section 23).
      Still needed before the checkout above can go live: the store
      created, DIY/PRO set up as products with fixed prices (not ranges),
      and `support@idea2app.co` set as the store's support/receipt email.
- [ ] Automate fulfilment: the purchase webhook should grant access to
      gated step content instantly (Notion / Gumroad / a gated route +
      magic link) — no manual delivery per sale.
- [ ] Add an email capture (free checklist PDF or a bonus prompt) before
      the paywall, so a visitor who isn't ready to buy doesn't just leave
      (see `04-conversion-funnel-and-measurement.md` for why this matters).
- [ ] Stand up PRO's "private community" as Discord or Skool with
      auto-invite on purchase (Zapier/Make triggered by the checkout
      webhook) — no manual invites.
- [ ] Batch all PRO "expert review" and support into one weekly group
      office-hours call instead of on-demand 1:1s.
- [ ] Gate Done With You behind a short application form (Typeform) with a
      fixed number of monthly slots.
- [ ] Wire up PostHog (already decided per PRD Section 23, not yet
      installed) before spending effort on promotion — you need
      step-completion and pricing-page funnels to know what's actually
      working rather than guessing.

## A simple weekly time budget

Once the above is in place, a sustainable week looks roughly like:

| Activity | Time |
|---|---|
| Content creation (LinkedIn, YouTube, blog) | ~3 hours |
| Community engagement | ~1–2 hours |
| One group office-hours call (PRO support/review) | ~1 hour |
| Done With You delivery | Capped to a fixed number of client-hours per week, agreed per cohort |
| Admin (checkout, community, delivery) | ~0 hours — automated per the checklist above |

If a week doesn't fit that shape, something needs to move from the
founder to a tool, a template, or a batched/scheduled slot rather than
being handled ad hoc.

## Open decisions

- ~~Which merchant of record: Lemon Squeezy vs. Paddle~~ — **decided:
  Lemon Squeezy** (see PRD Section 23).
- Exact price points for DIY and PRO within the $99–299 and $500–1,500
  ranges — Lemon Squeezy needs a fixed price per product/variant, not a
  range.
- Delivery mechanism for DIY once purchased: Lemon Squeezy's native
  file-delivery (upload the playbook as a downloadable bundle, no code)
  vs. a custom webhook into a gated route. Native file delivery is the
  zero-engineering option and fits Build Pass 1 (no auth/DB yet).
- Community platform: Discord vs. Skool for the PRO community, and
  whether the purchase → invite automation (Zapier/Make off the Lemon
  Squeezy webhook) is worth building before or after the first sale.
- Number of Done With You slots per month, and the price point within the
  $3k–10k+ range that matches the intended cohort size.
