import {
  Sparkles,
  Code2,
  GitBranch,
  Database,
  Rocket,
  Smartphone,
  Bell,
  Apple,
  PlayCircle,
  type LucideProps,
} from "lucide-react";

const icons = {
  Sparkles,
  Code2,
  GitBranch,
  Database,
  Rocket,
  Smartphone,
  Bell,
  Apple,
  PlayCircle,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Component = icons[name as IconName] ?? Sparkles;
  return <Component {...props} />;
}
