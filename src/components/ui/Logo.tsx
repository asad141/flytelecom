import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  height?: number;
  link?: boolean;
  variant?: "default" | "footer";
};

export function Logo({
  className,
  height = 48,
  link = true,
  variant = "default",
}: LogoProps) {
  const size = variant === "footer" ? height * 0.5 : height * 0.52;

  const mark = (
    <span
      className={cn(
        "inline-flex select-none items-baseline font-bold leading-none tracking-tight",
        className
      )}
      style={{ fontSize: `${size}px` }}
      aria-hidden={link ? undefined : true}
    >
      <span className="text-fly-blue">FLY</span>
      <span className="text-foreground">TELECOM</span>
    </span>
  );

  if (!link) {
    return (
      <span role="img" aria-label={siteConfig.logo.alt}>
        {mark}
      </span>
    );
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90"
      aria-label={siteConfig.logo.alt}
    >
      {mark}
    </Link>
  );
}
