import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/section-heading";
import { PromptCard } from "@/components/prompt-card";
import { prompts } from "@/lib/data/prompts";

export const metadata: Metadata = {
  title: "Prompt Library",
  description:
    "Copyable, high-quality prompts for turning your idea into a spec, designing your database, building features, testing and debugging with AI.",
};

export default function PromptsPage() {
  return (
    <>
      <section className="border-b border-border py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="AI Prompt Library"
            title="The exact prompts, at the exact step you need them."
            description="Copy, edit, and hand these straight to Claude or Cursor. The first is free - the full library, one prompt per step, is part of the DIY Playbook."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {prompts.map((prompt) => (
              <PromptCard key={prompt.slug} prompt={prompt} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
