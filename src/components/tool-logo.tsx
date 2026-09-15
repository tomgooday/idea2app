import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Tool } from "@/lib/data/tools";

/**
 * Renders a tool's real logo (see /public/logos) inside a uniform white
 * chip. Real brand marks, not generic icons - per the "Tools" ask: show
 * the actual technology, not a stand-in glyph.
 */
const sizes = {
  xs: { box: "h-6 w-6", pad: "p-0.5", radius: "rounded-md" },
  sm: { box: "h-10 w-10", pad: "p-2", radius: "rounded-xl" },
  md: { box: "h-14 w-14", pad: "p-3", radius: "rounded-xl" },
} as const;

export function ToolLogo({
  tool,
  size = "md",
  className,
}: {
  tool: Tool;
  size?: "xs" | "sm" | "md";
  className?: string;
}) {
  const { box, pad, radius } = sizes[size];

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center border border-border bg-elevated",
        radius,
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
