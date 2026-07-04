type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={alignClass}>
      <div
        className={`heading-accent mb-5 ${align === "center" ? "mx-auto" : ""}`}
      />
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-heading"
        }`}
      >
        {title.includes("Fly Telecom") ? (
          <>
            {title.split("Fly Telecom")[0]}
            <span className={light ? "text-accent-light" : "text-fly-sky"}>
              Fly Telecom
            </span>
            {title.split("Fly Telecom")[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-on-dark-muted" : "text-body"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
