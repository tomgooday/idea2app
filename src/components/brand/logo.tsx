import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Idea2App logo mark - cropped from `Idea2App_Logo.png` (the "Symbol"
 * variant per Brand & Design System, Section 5). Used for favicons, the
 * header/footer, and anywhere a compact brand icon is needed.
 */
export function LogoMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt=""
      width={size}
      height={size}
      className={cn("rounded-[22%]", className)}
    />
  );
}

/**
 * The wordmark is rendered as real text (not an image) so it stays crisp,
 * accessible and themeable - the "2" carries the brand accent colour, per
 * Section 4: "The '2' should be visually important."
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-semibold tracking-tight text-foreground", className)}>
      Idea<span className="text-accent">2</span>App
    </span>
  );
}

/**
 * Full horizontal lockup: icon + wordmark. This is the primary logo
 * variant (Section 5) used in the site header and footer.
 */
export function Logo({
  size = 28,
  className,
  wordmarkClassName,
}: {
  size?: number;
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark size={size} />
      <Wordmark className={cn("text-[15px]", wordmarkClassName)} />
    </span>
  );
}
