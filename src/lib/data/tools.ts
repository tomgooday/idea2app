export type ToolCategory =
  | "AI"
  | "Development"
  | "Source Control"
  | "Database"
  | "Hosting"
  | "Mobile"
  | "Notifications"
  | "iOS"
  | "Android";

export type Tool = {
  slug: string;
  name: string;
  category: ToolCategory;
  /** Lucide icon name, rendered by <ToolIcon />. */
  icon: string;
  description: string;
  why: string;
  link: string;
  pricing: string;
  alternatives: string[];
  /** Step numbers (see steps.ts) this tool is used in. */
  usedInSteps: number[];
};

export const tools: Tool[] = [
  {
    slug: "claude",
    name: "Claude",
    category: "AI",
    icon: "Sparkles",
    description:
      "The large language model that acts as your product thinking partner and coding collaborator throughout the framework.",
    why: "Strong reasoning for product specs, database design and code — and it pairs directly with Cursor.",
    link: "https://claude.ai",
    pricing: "Free tier available · Pro from ~US$20/mo",
    alternatives: ["ChatGPT", "Gemini"],
    usedInSteps: [1, 2, 4],
  },
  {
    slug: "cursor",
    name: "Cursor",
    category: "Development",
    icon: "Code2",
    description:
      "An AI-native code editor where you and an AI coding agent build your application together, feature by feature.",
    why: "Purpose-built for working with AI coding agents across a full codebase, not just single files.",
    link: "https://cursor.com",
    pricing: "Free tier available · Pro from ~US$20/mo",
    alternatives: ["GitHub Copilot", "Windsurf"],
    usedInSteps: [4],
  },
  {
    slug: "github",
    name: "GitHub",
    category: "Source Control",
    icon: "GitBranch",
    description:
      "Where your code lives, versioned and backed up, and where Vercel deploys from.",
    why: "The standard for source control — required by almost every hosting and CI tool you'll use.",
    link: "https://github.com",
    pricing: "Free for individuals and small teams",
    alternatives: ["GitLab", "Bitbucket"],
    usedInSteps: [4, 5, 8],
  },
  {
    slug: "neon",
    name: "Neon (PostgreSQL)",
    category: "Database",
    icon: "Database",
    description:
      "A serverless PostgreSQL database with instant branching — perfect for separate development, staging and production databases.",
    why: "Database branching makes it trivial to keep environments separate without running your own infrastructure.",
    link: "https://neon.tech",
    pricing: "Free tier available · usage-based pricing beyond that",
    alternatives: ["Supabase", "PlanetScale"],
    usedInSteps: [3, 5, 10],
  },
  {
    slug: "vercel",
    name: "Vercel",
    category: "Hosting",
    icon: "Rocket",
    description:
      "Hosting, deployment, environment variables and server infrastructure for your application.",
    why: "Deep integration with Next.js and GitHub means every push can deploy automatically, with previews for every change.",
    link: "https://vercel.com",
    pricing: "Free tier available · Pro from ~US$20/mo",
    alternatives: ["Netlify", "Railway"],
    usedInSteps: [5, 10],
  },
  {
    slug: "flutter",
    name: "Flutter",
    category: "Mobile",
    icon: "Smartphone",
    description:
      "A single codebase that compiles to native iOS, Android and web apps.",
    why: "The most mature option for shipping one codebase to every platform without maintaining three separate apps.",
    link: "https://flutter.dev",
    pricing: "Free and open source",
    alternatives: ["React Native", "native iOS/Android"],
    usedInSteps: [6],
  },
  {
    slug: "react-native",
    name: "React Native",
    category: "Mobile",
    icon: "Smartphone",
    description:
      "A cross-platform mobile framework built on React — a strong alternative to Flutter, especially if your team already knows React.",
    why: "Recommended as an alternative when you or your AI coding agent are already deep in a React/Next.js codebase.",
    link: "https://reactnative.dev",
    pricing: "Free and open source",
    alternatives: ["Flutter", "native iOS/Android"],
    usedInSteps: [6],
  },
  {
    slug: "onesignal",
    name: "OneSignal",
    category: "Notifications",
    icon: "Bell",
    description:
      "Push notifications, email and transactional communications through one simple API.",
    why: "Avoids building your own notification infrastructure — connects in an afternoon, not a sprint.",
    link: "https://onesignal.com",
    pricing: "Free tier available · usage-based pricing beyond that",
    alternatives: ["Firebase Cloud Messaging", "Resend"],
    usedInSteps: [7],
  },
  {
    slug: "xcode",
    name: "Xcode / App Store Connect",
    category: "iOS",
    icon: "Apple",
    description:
      "Apple's toolchain for building, signing and submitting your app to the iOS App Store.",
    why: "Required by Apple for iOS builds and submissions — there's no way around it, so we make it painless.",
    link: "https://developer.apple.com/xcode/",
    pricing: "Apple Developer Program: US$99/year",
    alternatives: [],
    usedInSteps: [9],
  },
  {
    slug: "google-play-console",
    name: "Google Play Console",
    category: "Android",
    icon: "PlayCircle",
    description:
      "Google's platform for building, signing and submitting your Android app to Google Play.",
    why: "Required by Google for Android distribution — we walk you through the build pipeline and submission checklist.",
    link: "https://play.google.com/console",
    pricing: "One-time US$25 registration fee",
    alternatives: [],
    usedInSteps: [9],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(): Record<ToolCategory, Tool[]> {
  return tools.reduce((acc, tool) => {
    acc[tool.category] = acc[tool.category] ?? [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<ToolCategory, Tool[]>);
}
