"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import type { Prompt } from "@/lib/data/prompts";

export function PromptCard({ prompt }: { prompt: Prompt }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — silently ignore in Build Pass 1.
    }
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-elevated p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {prompt.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {prompt.description}
          </p>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-border-strong bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-elevated-hover"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-accent" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto rounded-xl bg-background p-4 text-[13px] leading-relaxed text-muted-foreground">
        <code className="whitespace-pre-wrap font-mono">{prompt.prompt}</code>
      </pre>
    </div>
  );
}
