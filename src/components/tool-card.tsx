import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ToolLogo } from "@/components/tool-logo";
import type { Tool } from "@/lib/data/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-elevated p-6 transition-colors duration-150 hover:border-border-strong hover:bg-elevated-hover"
    >
      <div className="flex items-center justify-between">
        <ToolLogo tool={tool} size="sm" />
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {tool.category}
        </span>
      </div>

      <div>
        <h3 className="text-base font-semibold text-foreground">
          {tool.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {tool.description}
        </p>
      </div>

      <div className="mt-auto space-y-2 border-t border-border pt-4 text-sm">
        <p className="text-muted">
          <span className="font-medium text-foreground">Why we recommend it: </span>
          {tool.why}
        </p>
        <p className="text-muted-foreground">{tool.pricing}</p>
      </div>

      <div className="flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity duration-150 group-hover:opacity-100">
        Learn more
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}
