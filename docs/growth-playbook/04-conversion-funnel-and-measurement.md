# Idea2App — Conversion Funnel & Measurement Spec

> Part 4 of 4 in the growth playbook. See also: `01-time-leverage-and-operations.md`,
> `02-au-target-segments-and-channels.md`, `03-au-rollout-phases.md`.
>
> **Status:** Proposal / not yet actioned. This is a working spec to react to
> and refine, not a decision recorded in the PRD.

## Purpose

Define how a cold visitor sourced from any channel in
`02-au-target-segments-and-channels.md` actually becomes a paying DIY,
PRO, or Done With You customer — and how to measure whether that's
happening.

## The funnel

| Stage | What they see | Price | Job it does |
|---|---|---|---|
| Cold reach | LinkedIn / YouTube / community post | Free | Awareness + trust |
| Site visit | Free Step 1, one free prompt, tool directory | Free | Prove depth ("a prototype is not a product") |
| Lead capture | Email for a checklist PDF or bonus prompt — **gap, not built yet** | Free | Own the relationship, enable nurture |
| Tripwire | DIY — The 10-Step Playbook | $99–299 | Low-risk first yes |
| Upsell | PRO, pitched to DIY buyers around their sticking point | $500–1,500 | Recurring high-margin revenue, no new build cost |
| Backend offer | Done With You, pitched to PRO members who stall | $3k–10k+ | Highest revenue per hour of founder time, capped volume |
| Future | Done For You studio | Custom | Only after case studies exist from the tiers above (per PRD Section 14) |

## Known gap: the funnel currently leaks at lead capture

Today, a visitor who reaches the site either buys immediately or leaves —
there is no email capture between "free preview" and "purchase." Every
promotion effort described in `02-au-target-segments-and-channels.md` and
`03-au-rollout-phases.md` will leak at this point until it's fixed. This
is the same item flagged as an open task in
`01-time-leverage-and-operations.md`.

**Fix:** add a lead magnet (a free checklist PDF or a bonus prompt) gated
behind an email address, positioned right where a visitor currently either
buys DIY or bounces (e.g. on the Steps 2–10 gated content and the pricing
page). This turns "not ready to buy yet" visitors into a list that can be
nurtured toward a later purchase instead of a permanent loss.

## Upsell mechanics

- **DIY → PRO:** PRO should be pitched to DIY buyers around the point
  where they'd naturally get stuck (e.g. Step 3 database design, or Step 6
  mobile packaging) — this is a natural, need-based upsell rather than a
  generic "upgrade" nudge, and doesn't require new content to build since
  PRO reuses DIY's core material plus community/review.
- **PRO → Done With You:** Done With You should be pitched specifically to
  PRO members who've stalled or want the outcome faster, surfaced through
  the weekly office-hours call (see `01-time-leverage-and-operations.md`)
  rather than as a generic checkout upsell — this keeps Done With You
  volume naturally capped to real demand.
- **Referral loop:** happy DIY/PRO customers should be asked for
  testimonials and offered a referral incentive (e.g. a free PRO upgrade
  for a successful referral), per Phase 4 in
  `03-au-rollout-phases.md` — a compounding acquisition loop with no ad
  spend.

## Measurement plan (PostHog)

Per the open PostHog decision in PRD Section 23, the following funnels
should exist as soon as PostHog is installed (Phase 0 of
`03-au-rollout-phases.md`):

- **Channel → site visit:** UTM-tagged links per channel/post, so each
  piece of content in `02-au-target-segments-and-channels.md` can be
  attributed.
- **Site visit → lead capture:** conversion rate on the new email-capture
  step once it exists — the primary signal that the funnel gap above has
  been fixed.
- **Site visit → Step completion:** how far free/unauthenticated visitors
  get through Steps 1–10 before hitting the paywall (existing PRD Section
  20 success metrics: step completion, percentage reaching Step 10).
- **Lead capture → DIY purchase:** email nurture effectiveness once a
  sequence exists.
- **DIY purchase → PRO purchase:** upsell conversion rate and typical time
  lag between the two.
- **PRO → Done With You:** how many PRO members convert to Done With You,
  and via which touchpoint (office hours vs. self-initiated).

## Relationship to existing PRD success metrics

This funnel is a more granular breakdown of the metrics already defined in
PRD Section 20 (signup conversion, paid conversion, step completion,
percentage reaching Step 10, number of apps launched) — nothing here
replaces those metrics, it specifies the acquisition path that feeds them
and adds the missing lead-capture step.

## Open decisions

- What the lead magnet actually is (a standalone PDF checklist vs. an
  extra unlocked prompt vs. a short email course).
- Email sending/nurture tool (e.g. a lightweight ESP) — not yet chosen.
- Whether upsell prompts (DIY→PRO, PRO→Done With You) should ever be
  automated (e.g. a triggered email at a stuck step) or should stay
  human-delivered via office hours, at least initially.
