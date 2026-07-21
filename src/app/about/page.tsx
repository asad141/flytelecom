import Link from "next/link";
import { aboutContent } from "@/data/about";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/PageHero";

export const metadata = createMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.name} — our mission, values, and the team behind your trusted telecom partner since 2010.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageHero
      title={aboutContent.title}
      description={aboutContent.intro}
      footer={
        <>
          To learn more, contact us at{" "}
          <Link
            href="mailto:Info@flytelecom.com"
            className="text-fly-cyan hover:underline"
          >
            Info@flytelecom.com
          </Link>
          .
        </>
      }
    />
  );
}
