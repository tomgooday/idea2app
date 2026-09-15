import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { StepCard } from "@/components/step-card";
import { ToolCard } from "@/components/tool-card";
import { PricingCard } from "@/components/pricing-card";
import { SquiggleUnderline } from "@/components/brand/squiggle";
import { steps } from "@/lib/data/steps";
import { tools } from "@/lib/data/tools";
import { pricingPlans } from "@/lib/data/pricing";

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

const prototypeLimits = [
  "A hosted demo, locked to their platform",
  "Fine until you outgrow their limits or their pricing",
  "No real database, codebase or hosting you control",
  "Nothing to submit to the App Store or Google Play",
];

const blueprintWins = [
  "A real codebase, database and hosting - all yours",
  "Built to keep shipping long after you launch",
  "No platform lock-in and no usage ceiling",
  "A real path to the App Store and Google Play",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid mask-fade-bottom pointer-events-none absolute inset-0" />
        <Container className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              The AI App-Building Playbook
            </p>

            <h1 className="mt-5 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              From{" "}
              <span className="relative inline-block">
                idea
                <SquiggleUnderline className="absolute inset-x-0 -bottom-1.5" />
              </span>{" "}
              to App Store in 10 steps.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
              Tools like Lovable, Bolt and Base44 hand you a prototype in
              their sandbox. Idea2App gives you the blueprint to build,
              launch and maintain a real iOS, Android and web app yourself -
              on your own stack, with no platform ceiling.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/steps" size="lg">
                Start Building
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/steps" variant="secondary" size="lg">
                See the 10 Steps
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
            description="A non-technical founder with an idea still needs to understand AI tools, databases, hosting, authentication, mobile frameworks, notifications, and both app stores - and how they all connect."
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

      {/* Prototype vs. blueprint */}
      <section className="border-b border-border py-24 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="The Difference"
            title="A prototype is not a product."
            description="Lovable, Bolt and Base44 are great for a quick demo. Idea2App is for founders who want to own and run the real thing."
          />

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-elevated p-8">
              <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Prototype tools
              </h3>
              <ul className="mt-5 space-y-4">
                {prototypeLimits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/40 bg-accent-soft p-8">
              <h3 className="text-sm font-medium uppercase tracking-wide text-accent">
                Idea2App
              </h3>
              <ul className="mt-5 space-y-4">
                {blueprintWins.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 10 steps preview */}
      <section className="border-b border-border py-24 sm:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="The Framework"
              title="10 steps. One clear path."
              description="Every step tells you what to build, what tools to use, and what to give the AI - in order."
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
              description="No more guessing what to use. Every tool is explained - what it does, why we recommend it, and what it costs."
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
            title="Pick how hands-on you want us to be."
            description="Step 1 and a sample prompt are free to try. The full playbook, prompts and templates are how you actually build and launch."
          />

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
            {pricingPlans
              .filter((plan) => !plan.comingSoon)
              .map((plan) => (
                <PricingCard key={plan.slug} plan={plan} />
              ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted">
            Prefer to just hand us the idea?{" "}
            <Link href="/pricing" className="font-medium text-accent hover:text-accent-hover">
              Done For You is coming soon →
            </Link>
          </p>
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
