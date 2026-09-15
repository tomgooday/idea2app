"use client";

import { useState } from "react";
import { Check, Copy, Lock } from "lucide-react";
import type { Prompt } from "@/lib/data/prompts";
import { Button } from "@/components/ui/button";

export function PromptCard({ prompt }: { prompt: Prompt }) {
  const [copied, setCopied] = useState(false);
  const free = prompt.free ?? false;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable - silently ignore in Build Pass 1.
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
        {free ? (
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
        ) : (
          <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-border-strong bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            DIY Playbook
          </span>
        )}
      </div>

      {free ? (
        <pre className="code-panel overflow-x-auto rounded-xl p-4 text-[13px] leading-relaxed">
          <code className="whitespace-pre-wrap font-mono">{prompt.prompt}</code>
        </pre>
      ) : (
        <div className="relative overflow-hidden rounded-xl">
          <pre className="code-panel overflow-x-auto rounded-xl p-4 text-[13px] leading-relaxed pointer-events-none opacity-60 blur-[5px] select-none">
            <code className="whitespace-pre-wrap font-mono">{prompt.prompt}</code>
          </pre>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-t from-code-bg via-code-bg/90 to-transparent px-4 text-center">
            <span className="text-xs font-medium text-ink-muted">
              Unlock the full prompt in the DIY Playbook
            </span>
            <Button href="/pricing" size="sm">
              Get the DIY Playbook
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
