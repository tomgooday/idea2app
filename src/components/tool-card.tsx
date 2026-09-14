import { Icon } from "@/components/icon";
import type { Tool } from "@/lib/data/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-elevated p-6">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Icon name={tool.icon} className="h-5 w-5" />
        </span>
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
        {tool.alternatives.length > 0 ? (
          <p className="text-muted-foreground">
            Alternatives: {tool.alternatives.join(", ")}
          </p>
        ) : null}
      </div>

      <a
        href={tool.link}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium text-accent hover:text-accent-hover"
      >
        Visit {tool.name.split(" ")[0]} →
      </a>
    </div>
  );
}
