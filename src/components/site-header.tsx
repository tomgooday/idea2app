import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/steps", label: "The 10 Steps" },
  { href: "/tools", label: "Tools" },
  { href: "/prompts", label: "Prompts" },
  { href: "/pricing", label: "Pricing" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-foreground"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-[13px] font-bold text-accent-foreground">
            {siteConfig.name.charAt(0)}
          </span>
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/steps" variant="primary" size="sm">
            Start Building
          </Button>
        </div>
      </Container>
    </header>
  );
}
