export type PromptCategory =
  | "Product"
  | "Database"
  | "Architecture"
  | "Coding"
  | "Testing"
  | "Debugging";

export type Prompt = {
  slug: string;
  category: PromptCategory;
  title: string;
  description: string;
  relatedStep: number;
  prompt: string;
  /** True for the single free sample shown in full on the public site. */
  free?: boolean;
};

export const prompts: Prompt[] = [
  {
    slug: "mvp-product-spec",
    category: "Product",
    title: "Turn my idea into an MVP spec",
    description:
      "Use this first - it converts a rough idea into a structured product specification you can hand to every later step.",
    relatedStep: 1,
    free: true,
    prompt: `Turn my idea into an MVP product specification.

My idea: [describe your app idea in a sentence or two]

Please produce:
1. A one-sentence product proposition
2. The primary target customer and their core problem
3. The smallest possible MVP that solves that problem
4. 3-5 key user journeys
5. A list of functional requirements in plain language

Be ruthless about scope - cut anything that isn't required for the MVP to be useful, and call out what you cut and why.`,
  },
  {
    slug: "postgres-schema-design",
    category: "Database",
    title: "Design a production-ready PostgreSQL schema",
    description:
      "Use this after you have a product spec, before you let an AI coding agent build anything.",
    relatedStep: 3,
    prompt: `Based on this product specification, design a production-ready PostgreSQL schema.

Product specification:
[paste your product specification here]

Please include:
1. All core entities and their relationships
2. Tables and fields, with sensible types and constraints
3. An authentication model (who can sign in, and how)
4. A permissions model (who can see/edit what)
5. The core API endpoints this schema implies

Explain any non-obvious modelling decisions, and flag anything in my spec that's ambiguous or would be expensive to change later.`,
  },
  {
    slug: "architecture-review",
    category: "Architecture",
    title: "Review this application architecture",
    description:
      "Use this before Step 4 to sanity-check your project structure, or any time something feels harder than it should.",
    relatedStep: 4,
    prompt: `Review this application architecture.

[paste your project structure, key files, or a description of your architecture]

Please assess:
1. Whether the structure will scale as features are added
2. Any obvious coupling or fragility between components
3. Whether the database and API design match how the frontend actually uses them
4. Anything that will become hard to change later if left as-is

Be specific and prioritise the 2-3 issues that matter most - I don't need an exhaustive list.`,
  },
  {
    slug: "implement-feature-safely",
    category: "Coding",
    title: "Implement this feature without breaking anything",
    description:
      "The core prompt for Step 4 - use it every time you ask the AI coding agent to build something new.",
    relatedStep: 4,
    prompt: `Implement this feature without changing existing functionality.

Feature to build:
[describe the feature]

Relevant context:
[paste relevant files, schema, or existing code]

Requirements:
1. Do not modify code outside what's required for this feature
2. Follow the existing patterns and conventions in the codebase
3. Handle obvious edge cases and errors
4. After implementing, tell me exactly what you changed and why
5. Suggest how I should test this feature before moving on`,
  },
  {
    slug: "e2e-test-plan",
    category: "Testing",
    title: "Create an end-to-end test plan",
    description:
      "Use this in Step 8 to confirm the full user journey works, not just individual features.",
    relatedStep: 8,
    prompt: `Create an end-to-end test plan for this application.

App description / core user journey:
[describe what a real user does from sign-up to core action]

Please produce:
1. A step-by-step test script covering the full journey (e.g. sign up → create account → perform core action → receive notification → data saved → log out → log in → data persists)
2. Edge cases worth testing (empty states, bad input, slow network, permission errors)
3. What to test in staging vs. what needs a production smoke test
4. Anything in this journey that's risky enough to need automated (not just manual) tests`,
  },
  {
    slug: "debug-an-error",
    category: "Debugging",
    title: "Analyse this error",
    description:
      "Use whenever something breaks and you're not sure why - works for build errors, runtime errors, or unexpected behaviour.",
    relatedStep: 4,
    prompt: `Analyse this error and help me fix it.

Error / unexpected behaviour:
[paste the error message, stack trace, or describe what's happening vs. what you expected]

Relevant context:
[paste relevant code, logs, or steps to reproduce]

Please:
1. Explain what's actually going wrong, in plain language
2. Identify the most likely root cause
3. Propose the smallest fix that resolves it without side effects
4. Tell me if this is a symptom of a deeper issue I should address`,
  },
];

export function isPromptFree(slug: string): boolean {
  return prompts.find((p) => p.slug === slug)?.free ?? false;
}

export function getPromptsByCategory(): Record<PromptCategory, Prompt[]> {
  return prompts.reduce((acc, prompt) => {
    acc[prompt.category] = acc[prompt.category] ?? [];
    acc[prompt.category].push(prompt);
    return acc;
  }, {} as Record<PromptCategory, Prompt[]>);
}
