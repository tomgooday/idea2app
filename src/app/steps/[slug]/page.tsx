import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Lightbulb, AlertTriangle, Lock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LockedChecklist } from "@/components/locked-checklist";
import { getAdjacentSteps, getStepBySlug, isStepFree, steps } from "@/lib/data/steps";
import { getToolBySlug } from "@/lib/data/tools";

export function generateStaticParams() {
  return steps.map((step) => ({ slug: step.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/steps/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const step = getStepBySlug(slug);
  if (!step) return {};
  return {
    title: `Step ${step.number} - ${step.title}`,
    description: step.summary,
  };
}

export default async function StepDetailPage({
  params,
}: PageProps<"/steps/[slug]">) {
  const { slug } = await params;
  const step = getStepBySlug(slug);
  if (!step) notFound();

  const { previous, next } = getAdjacentSteps(step.number);
  const recommendedTools = step.tools
    .map((toolSlug) => getToolBySlug(toolSlug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const free = isStepFree(step.number);

  return (
    <>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <Link
            href="/steps"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All 10 steps
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm text-muted-foreground">
              Step {String(step.number).padStart(2, "0")} / 10
            </span>
            <Badge>{step.difficulty}</Badge>
            <span className="text-sm text-muted-foreground">
              {step.estimatedTime}
            </span>
            {free ? (
              <Badge className="border-accent/40 text-accent">
                Free preview
              </Badge>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" />
                DIY Playbook
              </span>
            )}
          </div>

          <h1 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {step.title}
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-muted">
            {step.overview}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-10">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  What you&apos;ll do
                </h2>
                <div className="mt-4">
                  {free ? (
                    <ul className="space-y-3">
                      {step.whatYouWillDo.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <LockedChecklist items={step.whatYouWillDo} />
                  )}
                </div>
              </div>

              {free && step.keyPrinciple ? (
                <div className="flex gap-3 rounded-2xl border border-accent/30 bg-accent-soft p-5">
                  <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-foreground">
                    <span className="font-medium">Key principle: </span>
                    {step.keyPrinciple}
                  </p>
                </div>
              ) : null}

              {free && step.commonMistake ? (
                <div className="flex gap-3 rounded-2xl border border-border-strong bg-elevated p-5">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <p className="text-sm leading-relaxed text-muted">
                    <span className="font-medium text-foreground">
                      Common mistake:{" "}
                    </span>
                    {step.commonMistake}
                  </p>
                </div>
              ) : null}

              {!free ? (
                <div className="rounded-2xl border border-border-strong bg-elevated p-6">
                  <p className="text-sm leading-relaxed text-muted">
                    The key principle, common mistakes to avoid, and the
                    exact prompts for this step are part of the{" "}
                    <span className="font-medium text-foreground">
                      DIY Playbook
                    </span>
                    .
                  </p>
                  <Button href="/pricing" size="sm" className="mt-4">
                    See what&apos;s included
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ) : null}
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-elevated p-6">
                <h3 className="text-sm font-semibold text-foreground">
                  Recommended tools
                </h3>
                <ul className="mt-3 space-y-2">
                  {recommendedTools.map((tool) => (
                    <li key={tool.slug}>
                      <Link
                        href="/tools"
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {tool.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-elevated p-6">
                <h3 className="text-sm font-semibold text-foreground">
                  Expected output
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.output}
                </p>
              </div>

              <Link
                href="/prompts"
                className="block rounded-2xl border border-border bg-elevated p-6 transition-colors hover:border-border-strong hover:bg-elevated-hover"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  Relevant prompts →
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Browse the prompt library for prompts that match this step.
                </p>
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-10">
        <Container className="flex items-center justify-between gap-4">
          {previous ? (
            <Button href={`/steps/${previous.slug}`} variant="secondary">
              <ArrowLeft className="h-4 w-4" />
              Step {previous.number}: {previous.title}
            </Button>
          ) : (
            <span />
          )}
          {next ? (
            <Button href={`/steps/${next.slug}`} variant="primary">
              Step {next.number}: {next.title}
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button href="/pricing" variant="primary">
              You&apos;ve seen the whole framework
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </Container>
      </section>
    </>
  );
}
