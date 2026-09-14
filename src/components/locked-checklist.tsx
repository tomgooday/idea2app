import { Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Shows the first checklist item in full (a real preview), then blurs the
 * rest behind a paywall CTA. Used on step detail pages for steps outside
 * the free preview range — see `isStepFree` in lib/data/steps.ts.
 */
export function LockedChecklist({ items }: { items: string[] }) {
  const [first, ...rest] = items;

  return (
    <div className="space-y-3">
      {first ? (
        <ul>
          <li className="flex items-start gap-3 text-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span className="leading-relaxed">{first}</span>
          </li>
        </ul>
      ) : null}

      {rest.length > 0 ? (
        <div className="relative overflow-hidden rounded-xl">
          <ul className="space-y-3 pointer-events-none py-1 opacity-70 blur-[5px] select-none">
            {rest.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-t from-background via-background/85 to-transparent px-4 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Lock className="h-3.5 w-3.5" />
              {rest.length} more action{rest.length === 1 ? "" : "s"} in the
              DIY Playbook
            </span>
            <Button href="/pricing" size="sm">
              Get the DIY Playbook
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
