export const siteConfig = {
  name: "Fly Telecom",
  tagline: "Reliable Telecom Solutions for Your Business",
  description:
    "Fly Telecom delivers high-speed internet, VoIP, cloud PBX, and enterprise connectivity solutions. Trusted by businesses nationwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://flytelecom.com",
  locale: "en_US",
  logo: {
    src: "/logo.svg",
    srcLight: "/logo-light.svg",
    alt: "Fly Telecom — Business Internet, VoIP & Cloud Communications",
    width: 320,
    height: 64,
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "hello@flytelecom.com",
    address: {
      street: "123 Telecom Avenue",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "US",
    },
  },
  social: {
    twitter: "@flytelecom",
    facebook: "https://facebook.com/flytelecom",
    linkedin: "https://linkedin.com/company/flytelecom",
  },
} as const;

export type SiteConfig = typeof siteConfig;
