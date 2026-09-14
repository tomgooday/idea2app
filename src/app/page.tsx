import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { StepCard } from "@/components/step-card";
import { ToolCard } from "@/components/tool-card";
import { PricingCard } from "@/components/pricing-card";
import { steps } from "@/lib/data/steps";
import { tools } from "@/lib/data/tools";
import { pricingPlans } from "@/lib/data/pricing";
import { siteConfig } from "@/lib/config";

const ecosystem = [
  "Claude",
  "Cursor",
  "GitHub",
  "Neon",
  "Vercel",
  "Flutter",
  "OneSignal",
  "Xcode",
  "App Store",
  "Google Play",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid mask-fade-bottom pointer-events-none absolute inset-0" />
        <Container className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/steps"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-elevated px-4 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              {siteConfig.proposition}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            <h1 className="mt-8 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              From idea to App Store in 10 steps.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
              Build a real iOS, Android and web application using AI — even
              if you&apos;ve never written a line of code.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/steps" size="lg">
                Start Building
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/steps" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="border-b border-border py-24 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            title={
              <>
                AI made coding easier.
                <br />
                It didn&apos;t make building an app simple.
              </>
            }
            description="A non-technical founder with an idea still needs to understand AI tools, databases, hosting, authentication, mobile frameworks, notifications, and both app stores — and how they all connect."
          />

          <div className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {ecosystem.map((tool, i) => (
              <span key={tool} className="flex items-center gap-3">
                <span className="rounded-full border border-border-strong bg-elevated px-4 py-2 text-sm text-foreground">
                  {tool}
                </span>
                {i < ecosystem.length - 1 ? (
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                ) : null}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-xl text-center text-xl font-medium text-foreground">
            We connect the dots.
          </p>
        </Container>
      </section>

      {/* 10 steps preview */}
      <section className="border-b border-border py-24 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="The Framework"
              title="10 steps. One clear path."
              description="Every step tells you what to build, what tools to use, and what to give the AI — in order."
            />
            <Button href="/steps" variant="secondary">
              View all 10 steps
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.slice(0, 6).map((step) => (
              <StepCard key={step.slug} step={step} />
            ))}
          </div>
        </Container>
      </section>

      {/* Tools preview */}
      <section className="border-b border-border py-24 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="The Stack"
              title="A recommended tool for every step."
              description="No more guessing what to use. Every tool is explained — what it does, why we recommend it, and what it costs."
            />
            <Button href="/tools" variant="secondary">
              View tool directory
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.slice(0, 6).map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing preview */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title="Start free. Go deeper when you're ready."
            description="Pro and Premium pricing is being finalised — join the list to get notified at launch."
          />

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border py-24 sm:py-28">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              You have an idea. Let&apos;s find out what it takes.
            </h2>
            <Button href="/steps" size="lg">
              Start with Step 1
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
