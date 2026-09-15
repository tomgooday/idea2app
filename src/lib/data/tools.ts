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
  /** Filename in /public/logos - the tool's real logo, rendered by <ToolLogo />. */
  logo: string;
  description: string;
  why: string;
  link: string;
  pricing: string;
  alternatives: string[];
  /** Step numbers (see steps.ts) this tool is used in. */
  usedInSteps: number[];
  /** Quick-start bullets shown on the tool detail page. */
  gettingStarted: string[];
};

export const tools: Tool[] = [
  {
    slug: "claude",
    name: "Claude",
    category: "AI",
    logo: "claude.svg",
    description:
      "The large language model that acts as your product thinking partner and coding collaborator throughout the framework.",
    why: "Strong reasoning for product specs, database design and code - and it pairs directly with Cursor.",
    link: "https://claude.ai",
    pricing: "Free tier available · Pro from ~US$20/mo",
    alternatives: ["ChatGPT", "Gemini"],
    usedInSteps: [1, 2, 4],
    gettingStarted: [
      "Create a free account at claude.ai",
      "Start with the MVP product spec prompt from the prompt library",
      "Keep one long-running conversation per major decision (spec, schema, architecture)",
      "Paste real context (your spec, schema, code) rather than describing it from memory",
    ],
  },
  {
    slug: "cursor",
    name: "Cursor",
    category: "Development",
    logo: "cursor.png",
    description:
      "An AI-native code editor where you and an AI coding agent build your application together, feature by feature.",
    why: "Purpose-built for working with AI coding agents across a full codebase, not just single files.",
    link: "https://cursor.com",
    pricing: "Free tier available · Pro from ~US$20/mo",
    alternatives: ["GitHub Copilot", "Windsurf"],
    usedInSteps: [4],
    gettingStarted: [
      "Install Cursor and open your project's GitHub repository",
      "Give it your product spec and database schema as context before building anything",
      "Ask it to implement one feature at a time, not the whole app in one prompt",
      "Review every diff before accepting - you're the reviewer, not just the requester",
    ],
  },
  {
    slug: "github",
    name: "GitHub",
    category: "Source Control",
    logo: "github.svg",
    description:
      "Where your code lives, versioned and backed up, and where Vercel deploys from.",
    why: "The standard for source control - required by almost every hosting and CI tool you'll use.",
    link: "https://github.com",
    pricing: "Free for individuals and small teams",
    alternatives: ["GitLab", "Bitbucket"],
    usedInSteps: [4, 5, 8],
    gettingStarted: [
      "Create a free GitHub account and a new private repository",
      "Have your AI coding agent commit as it builds, not in one giant commit at the end",
      "Connect the repository to Vercel in Step 5 for automatic deployments",
      "Use branches for anything experimental so `main` always stays deployable",
    ],
  },
  {
    slug: "neon",
    name: "Neon (PostgreSQL)",
    category: "Database",
    logo: "neon.png",
    description:
      "A serverless PostgreSQL database with instant branching - perfect for separate development, staging and production databases.",
    why: "Database branching makes it trivial to keep environments separate without running your own infrastructure.",
    link: "https://neon.tech",
    pricing: "Free tier available · usage-based pricing beyond that",
    alternatives: ["Supabase", "PlanetScale"],
    usedInSteps: [3, 5, 10],
    gettingStarted: [
      "Create a free Neon account and a new project",
      "Use the database prompt from the prompt library to design your schema first",
      "Create separate branches (or projects) for development, staging and production",
      "Connect your production branch to Vercel with environment variables, never hard-coded credentials",
    ],
  },
  {
    slug: "vercel",
    name: "Vercel",
    category: "Hosting",
    logo: "vercel.svg",
    description:
      "Hosting, deployment, environment variables and server infrastructure for your application.",
    why: "Deep integration with Next.js and GitHub means every push can deploy automatically, with previews for every change.",
    link: "https://vercel.com",
    pricing: "Free tier available · Pro from ~US$20/mo",
    alternatives: ["Netlify", "Railway"],
    usedInSteps: [5, 10],
    gettingStarted: [
      "Create a free Vercel account and import your GitHub repository",
      "Set environment variables separately for Preview and Production",
      "Use Preview deployments to test every change before it reaches production",
      "Point your custom domain at your Production deployment in Step 10",
    ],
  },
  {
    slug: "flutter",
    name: "Flutter",
    category: "Mobile",
    logo: "flutter.svg",
    description:
      "A single codebase that compiles to native iOS, Android and web apps.",
    why: "The most mature option for shipping one codebase to every platform without maintaining three separate apps.",
    link: "https://flutter.dev",
    pricing: "Free and open source",
    alternatives: ["React Native", "native iOS/Android"],
    usedInSteps: [6],
    gettingStarted: [
      "Install the Flutter SDK and set up an iOS and Android simulator",
      "Connect your Flutter app to the same backend APIs you built in Step 5",
      "Rebuild your core screens from the prototype in Step 2 using Flutter widgets",
      "Test on a real device before moving on to Step 7",
    ],
  },
  {
    slug: "react-native",
    name: "React Native",
    category: "Mobile",
    logo: "react-native.svg",
    description:
      "A cross-platform mobile framework built on React - a strong alternative to Flutter, especially if your team already knows React.",
    why: "Recommended as an alternative when you or your AI coding agent are already deep in a React/Next.js codebase.",
    link: "https://reactnative.dev",
    pricing: "Free and open source",
    alternatives: ["Flutter", "native iOS/Android"],
    usedInSteps: [6],
    gettingStarted: [
      "Set up a React Native project with Expo for the fastest start",
      "Reuse any shared logic from your Next.js codebase where possible",
      "Connect to the same backend APIs you built in Step 5",
      "Test on a real device before moving on to Step 7",
    ],
  },
  {
    slug: "onesignal",
    name: "OneSignal",
    category: "Notifications",
    logo: "onesignal.png",
    description:
      "Push notifications, email and transactional communications through one simple API.",
    why: "Avoids building your own notification infrastructure - connects in an afternoon, not a sprint.",
    link: "https://onesignal.com",
    pricing: "Free tier available · usage-based pricing beyond that",
    alternatives: ["Firebase Cloud Messaging", "Resend"],
    usedInSteps: [7],
    gettingStarted: [
      "Create a free OneSignal account and add your app",
      "Connect the SDK to your web and/or mobile app",
      "Pick 2-3 key events actually worth notifying users about",
      "Test delivery on a real device before considering it done",
    ],
  },
  {
    slug: "xcode",
    name: "Xcode / App Store Connect",
    category: "iOS",
    logo: "xcode.svg",
    description:
      "Apple's toolchain for building, signing and submitting your app to the iOS App Store.",
    why: "Required by Apple for iOS builds and submissions - there's no way around it, so we make it painless.",
    link: "https://developer.apple.com/xcode/",
    pricing: "Apple Developer Program: US$99/year",
    alternatives: [],
    usedInSteps: [9],
    gettingStarted: [
      "Enrol in the Apple Developer Program (US$99/year)",
      "Create your app's listing in App Store Connect",
      "Configure signing certificates and provisioning profiles in Xcode",
      "Prepare screenshots, metadata and privacy disclosures before submitting",
    ],
  },
  {
    slug: "google-play-console",
    name: "Google Play Console",
    category: "Android",
    logo: "google-play-console.png",
    description:
      "Google's platform for building, signing and submitting your Android app to Google Play.",
    why: "Required by Google for Android distribution - we walk you through the build pipeline and submission checklist.",
    link: "https://play.google.com/console",
    pricing: "One-time US$25 registration fee",
    alternatives: [],
    usedInSteps: [9],
    gettingStarted: [
      "Register a Google Play Console account (one-time US$25 fee)",
      "Create your app's store listing",
      "Set up your Android build and signing pipeline",
      "Prepare screenshots, metadata and privacy disclosures before submitting",
    ],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getAdjacentTools(slug: string) {
  const index = tools.findIndex((tool) => tool.slug === slug);
  return {
    previous: index > 0 ? tools[index - 1] : undefined,
    next: index >= 0 && index < tools.length - 1 ? tools[index + 1] : undefined,
  };
}

export function getToolsByCategory(): Record<ToolCategory, Tool[]> {
  return tools.reduce((acc, tool) => {
    acc[tool.category] = acc[tool.category] ?? [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<ToolCategory, Tool[]>);
}
