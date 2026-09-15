import { cn } from "@/lib/utils";

/**
 * Hand-drawn "squiggle" accents - the distinctive Idea2App brand layer.
 * Use sparingly and deliberately (Brand & Design System, Sections 11-13):
 * a brand accent, not a background texture.
 */

export function SquiggleUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 14"
      fill="none"
      className={cn("h-[0.4em] w-full text-accent", className)}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 9.5C14 3 23 3 33 7.5C43 12 53 4 63 5C73 6 82 12 92 8C99 5.2 105 4.5 118 6"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SquiggleCircle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={cn("pointer-events-none absolute inset-0 h-full w-full text-border-strong", className)}
      aria-hidden="true"
    >
      <path
        d="M50 6C24 6 7 22 7 47C7 73 25 93 51 93C76 93 92 76 92 52C92 34 82 20 66 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SquiggleArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 24"
      fill="none"
      className={cn("h-4 w-14 text-accent", className)}
      aria-hidden="true"
    >
      <path
        d="M2 14C14 18 30 19 42 11C44.5 9.3 46 7.7 47 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M38 3.5C42 4.5 46 5.5 49.5 7.5C50.2 10.8 48.8 15 47 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
