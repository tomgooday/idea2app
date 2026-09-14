export type Difficulty = "Easy" | "Moderate" | "Advanced";

export type Step = {
  number: number;
  slug: string;
  title: string;
  /** Short line used on cards / timeline. */
  summary: string;
  difficulty: Difficulty;
  estimatedTime: string;
  /** Tool slugs (see tools.ts) recommended for this step. */
  tools: string[];
  /** What the user walks away with. */
  output: string;
  /** Longer explanation for the step detail page. */
  overview: string;
  whatYouWillDo: string[];
  keyPrinciple?: string;
  commonMistake?: string;
};

export const steps: Step[] = [
  {
    number: 1,
    slug: "define-your-idea",
    title: "Define Your Idea",
    summary:
      "Turn a vague idea into a clear product specification before you touch any tools.",
    difficulty: "Easy",
    estimatedTime: "1–2 hours",
    tools: ["claude"],
    output: "A clear product specification.",
    overview:
      "Every app that stalls out usually stalls for the same reason: nobody wrote down what it actually is. Step 1 forces the clarity that every later step depends on — your product proposition, who it's for, the core problem it solves, and the smallest version of it worth building.",
    whatYouWillDo: [
      "Write a one-sentence product proposition",
      "Define your target customer and their core problem",
      "Scope your MVP — the smallest version worth building",
      "Map your key user journeys",
      "List functional requirements in plain language",
    ],
    keyPrinciple:
      "A prototype and a production application are different things — start by being ruthless about what actually needs to exist in version one.",
    commonMistake:
      "Trying to define every feature you can imagine instead of the smallest useful version.",
  },
  {
    number: 2,
    slug: "prototype",
    title: "Prototype",
    summary:
      "Create a visual, clickable prototype so you can see and feel the app before any real code exists.",
    difficulty: "Easy",
    estimatedTime: "2–4 hours",
    tools: ["claude"],
    output: "A working product prototype.",
    overview:
      "Before AI writes a single line of production code, you need to know what you're actually asking it to build. A prototype lets you and anyone else — a co-founder, a friend, a future user — react to something real instead of a description.",
    whatYouWillDo: [
      "Define your core screens",
      "Map navigation between screens",
      "Identify primary actions on each screen",
      "Walk through your key user journeys end-to-end",
      "Confirm the core functionality is actually there",
    ],
    keyPrinciple:
      "If you can't click through it, you don't actually know what you're building yet.",
    commonMistake:
      "Polishing visual design at this stage instead of validating flow and functionality.",
  },
  {
    number: 3,
    slug: "design-the-database",
    title: "Design the Database",
    summary:
      "Design entities, relationships and permissions before letting an AI coding agent build the full app.",
    difficulty: "Moderate",
    estimatedTime: "2–3 hours",
    tools: ["neon"],
    output: "A production-ready database schema.",
    overview:
      "This is the step most non-technical builders skip — and it's the one that causes the most pain later. AI coding agents are very good at generating an application structure quickly, and very bad at un-generating it once it's wrong. Designing your database first gives the AI a stable foundation to build against.",
    whatYouWillDo: [
      "Define your core entities (users, projects, content — whatever your app is about)",
      "Map relationships between entities",
      "Define tables and fields",
      "Design your authentication model and permissions",
      "Sketch the API surface your app will need",
    ],
    keyPrinciple:
      "Design the database before allowing the AI coding agent to build the full application.",
    commonMistake:
      "Letting the AI invent your data model on the fly as it builds features, one prompt at a time.",
  },
  {
    number: 4,
    slug: "build-with-ai",
    title: "Build With AI",
    summary:
      "Give an AI coding agent your specification and database, then build incrementally, feature by feature.",
    difficulty: "Moderate",
    estimatedTime: "Ongoing",
    tools: ["claude", "cursor", "github"],
    output: "A real, working codebase.",
    overview:
      "This is where the app actually gets built. With a clear specification and a defined database, an AI coding agent stops guessing and starts executing. The goal isn't to generate everything in one giant prompt — it's to build the same way an experienced engineer would: incrementally, with each feature tested before moving to the next.",
    whatYouWillDo: [
      "Create your repository and establish the project structure",
      "Create your database from the schema you designed in Step 3",
      "Implement features incrementally, one at a time",
      "Test each feature as it's built",
      "Commit changes to GitHub as you go",
    ],
    keyPrinciple:
      "Treat the AI coding agent like a very fast junior developer — give it clear instructions, and check its work.",
    commonMistake:
      "Asking the AI to 'build the whole app' in a single prompt and hoping for the best.",
  },
  {
    number: 5,
    slug: "backend-and-hosting",
    title: "Backend & Hosting",
    summary:
      "Set up hosting, environment variables, and separate development, staging and production databases.",
    difficulty: "Moderate",
    estimatedTime: "1–2 hours",
    tools: ["vercel", "neon", "github"],
    output: "A properly separated dev → staging → production setup.",
    overview:
      "Your app needs somewhere to live, and it needs to live somewhere safely. This step sets up hosting and infrastructure the way professional teams do it — with clear separation between the environment you experiment in and the environment real users touch.",
    whatYouWillDo: [
      "Connect your GitHub repository to Vercel for deployment",
      "Set up environment variables for each environment",
      "Create separate staging and production databases in Neon",
      "Understand the development → staging → production pipeline",
      "Confirm your API infrastructure and server logs are working",
    ],
    keyPrinciple:
      "Never build directly against your production environment — a mistake there is a mistake real users can see.",
    commonMistake:
      "Testing new features directly on the production database because it 'seemed fine.'",
  },
  {
    number: 6,
    slug: "turn-it-into-a-mobile-app",
    title: "Turn It Into a Mobile App",
    summary:
      "Turn your web app into a real iOS and Android app from a single codebase.",
    difficulty: "Advanced",
    estimatedTime: "1–2 weeks",
    tools: ["flutter", "react-native"],
    output: "iOS and Android builds of your app.",
    overview:
      "A browser tab isn't an app store listing. This step covers turning your product into something that lives on a phone's home screen — and understanding the real trade-offs between a simple web app, a PWA, and a true native mobile build.",
    whatYouWillDo: [
      "Understand the trade-offs between web app, PWA, Flutter, React Native and native development",
      "Set up a Flutter project (or React Native, if there's a strong reason to)",
      "Connect your mobile app to the backend you built in Step 5",
      "Build your core screens for mobile",
      "Test on iOS and Android simulators",
    ],
    keyPrinciple:
      "One codebase → iOS + Android + Web. For the standard pathway, we recommend Flutter unless you have a strong reason to choose React Native.",
    commonMistake:
      "Jumping straight to native iOS/Android development before confirming the product works at all.",
  },
  {
    number: 7,
    slug: "notifications-and-communications",
    title: "Notifications & Communications",
    summary:
      "Add push notifications, email, and transactional messaging so your app can talk back to users.",
    difficulty: "Easy",
    estimatedTime: "2–4 hours",
    tools: ["onesignal"],
    output: "Working push and email notifications.",
    overview:
      "An app that never talks back to its users doesn't get used for long. This step adds the communication layer — push notifications, email, and transactional messages — through a simple API rather than building your own notification infrastructure from scratch.",
    whatYouWillDo: [
      "Set up a OneSignal account and connect it to your app",
      "Implement push notifications for key events",
      "Implement transactional email notifications",
      "Test notification delivery on real devices",
      "Decide which events actually deserve a notification",
    ],
    commonMistake:
      "Notifying users about everything, which trains them to ignore all of it.",
  },
  {
    number: 8,
    slug: "testing",
    title: "Testing",
    summary:
      "Test the complete user journey — locally, in staging, end-to-end and on real devices — before you ship.",
    difficulty: "Moderate",
    estimatedTime: "1–3 days",
    tools: ["github"],
    output: "A verified, working end-to-end journey.",
    overview:
      "This is the step that separates a demo from a product. Before deploying, you walk the entire journey a real user would take — and confirm it actually works, not just that it compiles.",
    whatYouWillDo: [
      "Run local testing for each feature",
      "Test the full journey in your staging environment",
      "Write and run end-to-end tests for critical paths",
      "Test on real mobile devices, not just simulators",
      "Run a production smoke test after deploying",
    ],
    keyPrinciple:
      "Example journey to test: sign up → create account → perform core action → receive notification → data saved → log out → log in → data persists.",
    commonMistake:
      "Testing individual features in isolation but never testing the full journey end-to-end.",
  },
  {
    number: 9,
    slug: "app-stores",
    title: "App Stores",
    summary:
      "Set up developer accounts, certificates and metadata, then submit to the App Store and Google Play.",
    difficulty: "Advanced",
    estimatedTime: "3–7 days (incl. review)",
    tools: ["xcode", "google-play-console"],
    output: "Your app submitted to both app stores.",
    overview:
      "App store submission is where a lot of self-taught builders lose momentum — not because the process is hard, but because it's unfamiliar. This step demystifies developer accounts, signing, metadata and the review process for both platforms.",
    whatYouWillDo: [
      "Set up an Apple Developer account and App Store Connect listing",
      "Set up a Google Play Console account",
      "Handle certificates, signing and permissions",
      "Prepare app metadata, screenshots and privacy disclosures",
      "Submit for review on both platforms",
    ],
    commonMistake:
      "Submitting without the privacy and permissions disclosures reviewers expect, causing avoidable rejections.",
  },
  {
    number: 10,
    slug: "launch",
    title: "Launch",
    summary:
      "Run your final launch checklist and take your app live — for real, in public.",
    difficulty: "Moderate",
    estimatedTime: "1 day",
    tools: ["vercel", "neon"],
    output: "A real, publicly available application.",
    overview:
      "This is the finish line. Launch is a checklist, not a leap of faith — domain, production environment, monitoring, legal pages, and store listings all confirmed before you tell a single person your app exists.",
    whatYouWillDo: [
      "Point your domain at your production environment",
      "Confirm production environment variables and backups",
      "Set up analytics and error monitoring",
      "Publish your privacy policy and terms",
      "Go live on the App Store and Google Play, and tell people",
    ],
    keyPrinciple:
      "The output of Step 10 isn't a course completion certificate. It's a real, publicly available application.",
  },
];

/**
 * Steps 1-2 are fully open as a preview. Steps 3-10 are the core paid IP
 * of the DIY Playbook, so their full checklist is gated on the public
 * site — see PRD Section 23 ("Content gating").
 *
 * This is a Build Pass 1 stopgap (no real entitlement check). Build Pass 2
 * replaces this with real access control tied to a purchase/account.
 */
const FREE_PREVIEW_STEP_COUNT = 2;

export function isStepFree(number: number): boolean {
  return number <= FREE_PREVIEW_STEP_COUNT;
}

export function getStepBySlug(slug: string): Step | undefined {
  return steps.find((step) => step.slug === slug);
}

export function getAdjacentSteps(number: number) {
  return {
    previous: steps.find((s) => s.number === number - 1),
    next: steps.find((s) => s.number === number + 1),
  };
}
