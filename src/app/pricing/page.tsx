import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { pricingPlans } from "@/lib/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free with the complete 10-step overview. Pro and Premium unlock the full framework, prompt library, templates and project dashboard.",
};

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. The framework is built for non-technical founders. You'll understand what's happening at every step, but the AI coding agent does the implementation.",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer:
      "Free gives you the complete 10-step overview and a starter prompt set so you can see exactly how the framework works. Pro unlocks the full depth of every step, the complete prompt library, all templates, and the project dashboard.",
  },
  {
    question: "When can I buy Pro or Premium?",
    answer:
      "Pricing and checkout are coming in the next build phase. Join the list on this page and we'll let you know the moment it's live.",
  },
  {
    question: "Can I use my own tools instead of the recommended stack?",
    answer:
      "Yes. The framework explains why each tool is recommended and lists alternatives, so you can substitute where it makes sense for you.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="Simple pricing for a serious system."
            description="Start free. Upgrade when you're ready to go from framework to finished app."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-16 sm:py-20">
        <Container>
          <SectionHeading align="center" title="Frequently asked questions" />
          <div className="mx-auto mt-12 max-w-2xl space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border bg-elevated p-6"
              >
                <h3 className="text-base font-medium text-foreground">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
