import { cn } from "@/lib/cn";

type StickySectionProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
  id?: string;
};

export function StickySection({
  children,
  className,
  index = 1,
  id,
}: StickySectionProps) {
  return (
    <section
      id={id}
      className={cn("sticky-section", className)}
      style={{ zIndex: index }}
    >
      {children}
    </section>
  );
}
