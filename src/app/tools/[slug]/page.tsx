import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ToolLogo } from "@/components/tool-logo";
import { getAdjacentTools, getToolBySlug, tools } from "@/lib/data/tools";
import { steps } from "@/lib/data/steps";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/tools/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.description,
  };
}

export default async function ToolDetailPage({
  params,
}: PageProps<"/tools/[slug]">) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const { previous, next } = getAdjacentTools(slug);
  const relatedSteps = steps.filter((step) => tool.usedInSteps.includes(step.number));

  return (
    <>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Tool directory
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <ToolLogo tool={tool} size="md" className="rounded-2xl" />
            <div>
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {tool.category}
              </span>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {tool.name}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted">
            {tool.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={tool.link} external size="md">
              Visit {tool.name.split(" ")[0]}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              {tool.pricing}
            </span>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-10">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Why we recommend it
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{tool.why}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Getting started
                </h2>
                <ul className="mt-4 space-y-3">
                  {tool.gettingStarted.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tool.alternatives.length > 0 ? (
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    Alternatives
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">
                    {tool.alternatives.join(", ")} are reasonable substitutes
                    if you have a strong reason to use them - the framework
                    doesn&apos;t lock you into any single tool.
                  </p>
                </div>
              ) : null}
            </div>

            <aside className="space-y-6">
              {relatedSteps.length > 0 ? (
                <div className="rounded-2xl border border-border bg-elevated p-6">
                  <h3 className="text-sm font-semibold text-foreground">
                    Used in these steps
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {relatedSteps.map((step) => (
                      <li key={step.slug}>
                        <Link
                          href={`/steps/${step.slug}`}
                          className="text-sm text-muted transition-colors hover:text-foreground"
                        >
                          Step {step.number}: {step.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <Link
                href="/prompts"
                className="block rounded-2xl border border-border bg-elevated p-6 transition-colors hover:border-border-strong hover:bg-elevated-hover"
              >
                <h3 className="text-sm font-semibold text-foreground">
                  Relevant prompts →
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Browse the prompt library for prompts that pair with this
                  tool.
                </p>
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-10">
        <Container className="flex items-center justify-between gap-4">
          {previous ? (
            <Button href={`/tools/${previous.slug}`} variant="secondary">
              <ArrowLeft className="h-4 w-4" />
              {previous.name}
            </Button>
          ) : (
            <span />
          )}
          {next ? (
            <Button href={`/tools/${next.slug}`} variant="secondary">
              {next.name}
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button href="/tools" variant="secondary">
              Back to tool directory
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </Container>
      </section>
    </>
  );
}
