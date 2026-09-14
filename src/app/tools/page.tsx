import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { ToolCard } from "@/components/tool-card";
import { getToolsByCategory } from "@/lib/data/tools";

export const metadata: Metadata = {
  title: "Tool Directory",
  description:
    "The recommended stack for building a real app with AI — what each tool does, why we recommend it, pricing, and alternatives.",
};

export default function ToolsPage() {
  const grouped = getToolsByCategory();
  const categories = Object.keys(grouped) as Array<keyof typeof grouped>;

  return (
    <>
      <section className="border-b border-border py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="The Stack"
            title="The recommended tool for every part of the stack."
            description="Claude → Cursor → GitHub → Neon → Vercel → Flutter → OneSignal → Xcode → App Store → Google Play. The architecture allows any of these to be swapped later without rebuilding the framework."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {category}
              </h2>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[category].map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
