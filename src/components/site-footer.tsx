import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Container } from "@/components/ui/container";

const columns = [
  {
    title: "Framework",
    links: [
      { href: "/steps", label: "The 10 Steps" },
      { href: "/tools", label: "Tool Directory" },
      { href: "/prompts", label: "Prompt Library" },
    ],
  },
  {
    title: "Product",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/steps", label: "Start Building" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="py-14">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-foreground"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent text-[13px] font-bold text-accent-foreground">
                {siteConfig.name.charAt(0)}
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {siteConfig.tagline} A guided path from idea to App Store —
              not another AI-generates-your-app promise.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-medium text-foreground">
                  {column.title}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>{siteConfig.domain}</p>
        </div>
      </Container>
    </footer>
  );
}
