import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/data/steps";
import { getToolBySlug } from "@/lib/data/tools";

export const metadata: Metadata = {
  title: "The 10 Steps",
  description:
    "The complete framework for turning an idea into a real, launched application — idea, prototype, database, code, backend, mobile, testing, app stores, and launch.",
};

export default function StepsPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="The Framework"
            title="Idea → Prototype → Database → Code → Backend → Mobile → Testing → App Stores → Launch"
            description="Ten steps. Each one tells you exactly what to build, what tool to use, and what to hand the AI — so you always know what happens next."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ol className="space-y-4">
            {steps.map((step) => (
              <li key={step.slug}>
                <Link
                  href={`/steps/${step.slug}`}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-elevated p-6 transition-colors hover:border-border-strong hover:bg-elevated-hover sm:flex-row sm:items-center sm:gap-8 sm:p-8"
                >
                  <div className="flex shrink-0 items-center gap-4 sm:w-16 sm:flex-col sm:items-start sm:gap-1">
                    <span className="font-mono text-3xl font-semibold text-muted-foreground">
                      {String(step.number).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h2>
                      <Badge>{step.difficulty}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {step.estimatedTime}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.tools.map((toolSlug) => {
                        const tool = getToolBySlug(toolSlug);
                        return tool ? (
                          <span
                            key={toolSlug}
                            className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {tool.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-accent sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                    View step
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
