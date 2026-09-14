import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Step } from "@/lib/data/steps";
import { Badge } from "@/components/ui/badge";

export function StepCard({ step }: { step: Step }) {
  return (
    <Link
      href={`/steps/${step.slug}`}
      className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-elevated p-6 transition-colors duration-150 hover:border-border-strong hover:bg-elevated-hover"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-sm text-muted-foreground">
          {String(step.number).padStart(2, "0")}
        </span>
        <Badge>{step.difficulty}</Badge>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {step.summary}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity duration-150 group-hover:opacity-100">
        See how
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}
