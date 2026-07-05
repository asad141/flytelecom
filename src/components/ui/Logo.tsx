import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  height?: number;
  link?: boolean;
  variant?: "default" | "footer" | "light";
};

export function Logo({
  className,
  height = 48,
  link = true,
  variant = "default",
}: LogoProps) {
  const useLight = variant === "footer" || variant === "light";
  const src = useLight ? siteConfig.logo.srcLight : siteConfig.logo.src;
  const displayHeight = variant === "footer" ? height : height;

  const mark = (
    <Image
      src={src}
      alt={siteConfig.logo.alt}
      width={siteConfig.logo.width}
      height={siteConfig.logo.height}
      className={cn("h-auto w-auto object-contain", className)}
      style={{ height: displayHeight, width: "auto" }}
      priority={variant === "default"}
      aria-hidden={link ? undefined : true}
    />
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
