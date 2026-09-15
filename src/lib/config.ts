/**
 * Central site configuration.
 *
 * Per the PRD, the brand name must not be hard-coded throughout the
 * application. Every place that needs the brand, tagline, or domain should
 * import it from here so it can be changed in one place.
 */
export const siteConfig = {
  name: "Idea2App",
  domain: "idea2app.co",
  url: "https://idea2app.co",
  tagline: "From idea to App Store in 10 steps.",
  description:
    "Idea2App packages the tools, prompts, templates and technical knowledge you need to turn an idea into a real iOS, Android and web app using AI - even if you've never written a line of code. It's the blueprint to build, launch and maintain your own app, not another hosted prototype.",
  proposition:
    "Not another AI prototype. The blueprint to launch a real app.",
  social: {
    twitter: "",
    github: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
