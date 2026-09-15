import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Tool } from "@/lib/data/tools";

/**
 * Renders a tool's real logo (see /public/logos) inside a uniform white
 * chip. Real brand marks, not generic icons - per the "Tools" ask: show
 * the actual technology, not a stand-in glyph.
 */
export function ToolLogo({
  tool,
  size = "md",
  className,
}: {
  tool: Tool;
  size?: "sm" | "md";
  className?: string;
}) {
  const box = size === "md" ? "h-14 w-14" : "h-10 w-10";
  const pad = size === "md" ? "p-3" : "p-2";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl border border-border bg-elevated",
        box,
        pad,
        className
      )}
    >
      <Image
        src={`/logos/${tool.logo}`}
        alt={`${tool.name} logo`}
        width={64}
        height={64}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
