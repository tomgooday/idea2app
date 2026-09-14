import { Check } from "lucide-react";
import type { PricingPlan } from "@/lib/data/pricing";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-2xl border p-8",
        plan.highlighted
          ? "border-accent bg-accent-soft/40 shadow-[0_0_0_1px_rgba(109,110,248,0.4)]"
          : "border-border bg-elevated"
      )}
    >
      <div>
        <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted">{plan.description}</p>
      </div>

      <div>
        <span className="text-4xl font-semibold tracking-tight text-foreground">
          {plan.price}
        </span>
        <span className="ml-2 text-sm text-muted-foreground">
          {plan.billingNote}
        </span>
      </div>

      <Button
        href={plan.href}
        variant={plan.highlighted ? "primary" : "secondary"}
        className="w-full"
      >
        {plan.cta}
      </Button>

      <ul className="space-y-3 border-t border-border pt-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
