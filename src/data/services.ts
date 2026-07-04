export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "business-internet",
    title: "Business Internet",
    shortDescription:
      "Dedicated fiber and broadband connections with guaranteed uptime for your operations.",
    description:
      "Our business internet solutions provide dedicated bandwidth, SLA-backed uptime, and 24/7 support. Whether you need fiber, fixed wireless, or redundant connections, Fly Telecom keeps your business connected.",
    features: [
      "Dedicated fiber up to 10 Gbps",
      "99.99% uptime SLA",
      "Static IP addresses",
      "24/7 network monitoring",
    ],
    icon: "🌐",
  },
  {
    slug: "voip-phone-systems",
    title: "VoIP Phone Systems",
    shortDescription:
      "Cloud-based phone systems with advanced features at a fraction of traditional costs.",
    description:
      "Replace legacy PBX systems with our modern VoIP platform. Get unlimited calling, auto-attendant, call recording, and seamless mobile integration — all managed from a simple web dashboard.",
    features: [
      "Unlimited domestic calling",
      "Auto-attendant & IVR",
      "Mobile & desktop apps",
      "Call analytics dashboard",
    ],
    icon: "📞",
  },
  {
    slug: "cloud-pbx",
    title: "Cloud PBX",
    shortDescription:
      "Fully managed private branch exchange hosted in the cloud with zero hardware.",
    description:
      "Fly Telecom Cloud PBX eliminates on-premise hardware while delivering enterprise-grade telephony. Scale extensions instantly, integrate with CRM tools, and pay only for what you use.",
    features: [
      "No hardware to maintain",
      "CRM integrations",
      "Scalable extensions",
      "Disaster recovery built-in",
    ],
    icon: "☁️",
  },
  {
    slug: "sd-wan",
    title: "SD-WAN",
    shortDescription:
      "Software-defined networking that optimizes traffic across multiple links.",
    description:
      "Our SD-WAN solution intelligently routes traffic across MPLS, broadband, and LTE links. Reduce costs, improve application performance, and gain centralized visibility across all your branch locations.",
    features: [
      "Multi-link failover",
      "Application-aware routing",
      "Centralized management",
      "Built-in security",
    ],
    icon: "🔗",
  },
  {
    slug: "managed-it",
    title: "Managed IT Services",
    shortDescription:
      "End-to-end IT support so your team can focus on what matters most.",
    description:
      "From help desk to infrastructure management, our managed IT team acts as an extension of your business. Proactive monitoring, patch management, and strategic planning included.",
    features: [
      "24/7 help desk",
      "Proactive monitoring",
      "Cybersecurity suite",
      "Strategic IT planning",
    ],
    icon: "🛡️",
  },
  {
    slug: "unified-communications",
    title: "Unified Communications",
    shortDescription:
      "Video, chat, and voice in one platform for seamless team collaboration.",
    description:
      "Bring your team together with Fly Telecom Unified Communications. HD video conferencing, team messaging, file sharing, and presence — all integrated into a single, secure platform.",
    features: [
      "HD video conferencing",
      "Team messaging",
      "Screen sharing",
      "Calendar integration",
    ],
    icon: "💬",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
