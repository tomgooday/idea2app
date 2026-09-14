export type PricingPlan = {
  slug: "diy" | "pro" | "done-with-you" | "done-for-you";
  /** Product name, e.g. "DIY". */
  name: string;
  /** Marketing title, e.g. "The 10-Step Playbook". */
  tagline: string;
  priceRange: string;
  billingNote: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  comingSoon?: boolean;
};

/**
 * Pricing structure confirmed with stakeholder — see PRD Section 14 and
 * Section 23 (Decisions Log). Prices are ranges for now; exact price points
 * are still being finalised, and there is no live checkout in Build Pass 1.
 */
export const pricingPlans: PricingPlan[] = [
  {
    slug: "diy",
    name: "DIY",
    tagline: "The 10-Step Playbook",
    priceRange: "$99–299",
    billingNote: "one-time",
    description:
      "Everything you need to build it yourself: videos, prompts, templates and checklists for all 10 steps.",
    features: [
      "Complete 10-step framework — video walkthroughs for every step",
      "Full AI prompt library",
      "All templates (PRD, database schema, API spec, and more)",
      "Step-by-step checklists for every step",
      "Lifetime access to updates",
    ],
    cta: "Get the Playbook",
    href: "mailto:hello@idea2app.com.au?subject=DIY%20Playbook%20interest",
  },
  {
    slug: "pro",
    name: "PRO",
    tagline: "Build Your App",
    priceRange: "$500–1,500",
    billingNote: "one-time",
    description:
      "The playbook, plus the support and accountability to actually finish building.",
    features: [
      "Everything in DIY",
      "Private community of other builders",
      "Expert review of your app as you build it",
      "Priority access to new prompts and templates",
      "Project dashboard with progress tracking",
    ],
    cta: "Join Pro",
    href: "mailto:hello@idea2app.com.au?subject=Pro%20interest",
    highlighted: true,
  },
  {
    slug: "done-with-you",
    name: "Done With You",
    tagline: "Launch Your App",
    priceRange: "$3k–10k+",
    billingNote: "project-based",
    description:
      "You bring the idea and the drive. We sit alongside you and help you actually build and launch it.",
    features: [
      "Everything in Pro",
      "Hands-on help building your app, step by step",
      "Architecture and code reviews from a real engineer",
      "Direct support through App Store and Google Play submission",
      "A real, launched app at the end",
    ],
    cta: "Apply Now",
    href: "mailto:hello@idea2app.com.au?subject=Done%20With%20You%20application",
  },
  {
    slug: "done-for-you",
    name: "Done For You",
    tagline: "Give us your idea. We'll build it.",
    priceRange: "Coming later",
    billingNote: "",
    description:
      "For founders who want the outcome, not the process. A full product studio offering — coming after DIY, Pro and Done With You are live.",
    features: [
      "You describe the idea — we scope, build and launch it",
      "For founders who'd rather pay for the outcome than learn the process",
    ],
    cta: "Join the Waitlist",
    href: "mailto:hello@idea2app.com.au?subject=Done%20For%20You%20waitlist",
    comingSoon: true,
  },
];
