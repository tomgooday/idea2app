export type PricingPlan = {
  slug: "free" | "pro" | "premium";
  name: string;
  price: string;
  billingNote: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
};

/**
 * Informational pricing only for Build Pass 1 — no live checkout yet.
 * Stripe integration is deferred to Build Pass 2 (see PRD Section 23).
 */
export const pricingPlans: PricingPlan[] = [
  {
    slug: "free",
    name: "Free",
    price: "$0",
    billingNote: "forever",
    description: "See the whole framework and decide if it's for you.",
    features: [
      "Overview of all 10 steps",
      "Basic guides for each step",
      "Selected prompts from the library",
      "Full tool directory",
    ],
    cta: "Start Building",
    href: "/steps",
  },
  {
    slug: "pro",
    name: "Pro",
    price: "TBD",
    billingNote: "one-time or subscription",
    description:
      "The complete framework, prompt library and templates to take your app from idea to launch.",
    features: [
      "Complete 10-step framework, in full detail",
      "Full AI prompt library",
      "All templates (PRD, schema, checklists, and more)",
      "Project dashboard with progress tracking",
      "AI-generated PRD from your answers",
      "AI-generated database schema",
      "Launch checklists for iOS and Android",
    ],
    cta: "Notify Me",
    href: "/pricing",
    highlighted: true,
  },
  {
    slug: "premium",
    name: "Premium",
    price: "TBD",
    billingNote: "Build With Me",
    description:
      "Everything in Pro, plus expert eyes on your product as you build it.",
    features: [
      "Everything in Pro",
      "Expert architecture reviews",
      "Troubleshooting support",
      "Ongoing product guidance",
    ],
    cta: "Notify Me",
    href: "/pricing",
  },
];
