import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { pricingPlans } from "@/lib/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three ways to build your app: DIY the 10-step playbook, go Pro with community and reviews, or have us build it with you. Done For You coming later.",
};

const faqs = [
  {
    question: "Do I need to know how to code?",
    answer:
      "No. The framework is built for non-technical founders. You'll understand what's happening at every step, but the AI coding agent does the implementation — and with Done With You, our team helps directly.",
  },
  {
    question: "What's the difference between DIY and Pro?",
    answer:
      "DIY gives you the complete 10-step playbook — videos, the full prompt library, and every template and checklist, all self-serve. Pro adds a private community, priority access to new prompts and templates, and an expert review of your app as you build it.",
  },
  {
    question: "What does Done With You actually include?",
    answer:
      "Everything in Pro, plus direct, hands-on help from our team as you build — architecture and code reviews, troubleshooting, and support getting through App Store and Google Play submission. You still drive the project; we sit alongside you.",
  },
  {
    question: "Is Done For You available now?",
    answer:
      "Not yet. Done For You — where you hand us the idea and we build it — is a larger, product-studio-style offering we're planning after DIY, Pro and Done With You are live. Join the waitlist to hear when it opens.",
  },
  {
    question: "When can I actually buy DIY, Pro, or Done With You?",
    answer:
      "Checkout isn't live on the site yet — that's next on our build list. In the meantime, use the buttons on this page to register interest and we'll reach out directly.",
  },
  {
    question: "Can I use my own tools instead of the recommended stack?",
    answer:
      "Yes. The framework explains why each tool is recommended and lists alternatives, so you can substitute where it makes sense for you.",
  },
];

export default function PricingPage() {
  const mainPlans = pricingPlans.filter((plan) => !plan.comingSoon);
  const futurePlan = pricingPlans.find((plan) => plan.comingSoon);

  return (
    <>
      <section className="border-b border-border py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="Pick how hands-on you want us to be."
            description="Browsing the whole 10-step framework is free. These three products take you from framework to a real, launched app."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
            {mainPlans.map((plan) => (
              <PricingCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </Container>
      </section>

      {futurePlan ? (
        <section className="border-t border-border py-16 sm:py-20">
          <Container>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-border-strong bg-elevated p-10 text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                Coming Later
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {futurePlan.tagline}
              </h2>
              <p className="max-w-xl text-balance leading-relaxed text-muted">
                {futurePlan.description}
              </p>
              <Button
                href={futurePlan.href}
                external
                variant="secondary"
                size="md"
                className="mt-2"
              >
                {futurePlan.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Container>
        </section>
      ) : null}

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
