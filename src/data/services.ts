export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
  image?: string;
};

export const services: Service[] = [
  {
    slug: "a2p-sms",
    title: "A2P SMS",
    shortDescription:
      "Send OTPs, alerts and confirmations straight from your application to your customers' phones.",
    description:
      "Fly Telecom's Application-to-Person (A2P) SMS platform lets your systems send one-time passcodes, transactional alerts, and account notifications directly to customer handsets in real time. Built for high-volume, mission-critical messages that need to land fast and reliably.",
    features: [
      "Real-time OTP & 2FA delivery",
      "Priority routing for critical alerts",
      "99%+ delivery rates worldwide",
      "Detailed delivery receipts & logs",
    ],
    icon: "📤",
    image: "/A2P LOGO.png",
  },
  {
    slug: "sms",
    title: "SMS",
    shortDescription:
      "Reach any handset instantly with direct, universal text messaging — no app required.",
    description:
      "Reach any mobile handset on the planet with Fly Telecom SMS — no app, no data plan, no barriers. Our direct carrier connections deliver your messages instantly, whether you're sending a single text or millions.",
    features: [
      "Global carrier connectivity",
      "Two-way messaging support",
      "Sender ID & short code options",
      "Simple REST API integration",
    ],
    icon: "✉️",
    image: "/SMS LOGO.png",
  },
  {
    slug: "whatsapp",
    title: "WhatsApp",
    shortDescription:
      "Connect with customers on the messaging app they already use every day.",
    description:
      "Meet your customers where they already are. Fly Telecom's WhatsApp Business API integration lets you send notifications, support rich media, and hold two-way conversations on the world's most popular messaging app.",
    features: [
      "Verified business profile",
      "Rich media & template messages",
      "Two-way customer conversations",
      "Chatbot & CRM integrations",
    ],
    icon: "💬",
    image: "/WHATSAPP LOGO.png",
  },
  {
    slug: "viber",
    title: "Viber",
    shortDescription:
      "Deliver branded business messages to Viber's large, active user base.",
    description:
      "Tap into Viber's large, highly engaged user base with branded business messages. Fly Telecom's Viber integration supports promotional broadcasts, transactional alerts, and rich media at scale.",
    features: [
      "Branded sender profiles",
      "Promotional & transactional messaging",
      "Rich media support",
      "Regional reach across Viber's user base",
    ],
    icon: "💬",
    image: "/VIBER LOGO.png",
  },
  {
    slug: "telegram",
    title: "Telegram",
    shortDescription:
      "Send fast, secure updates and support through Telegram's business channel.",
    description:
      "Deliver fast, secure updates and support through Telegram's business messaging channel. Fly Telecom's Telegram integration is ideal for time-sensitive alerts, customer support, and community engagement.",
    features: [
      "End-to-end secure delivery",
      "Bot & channel integrations",
      "Fast, low-latency delivery",
      "Rich formatting & media support",
    ],
    icon: "✈️",
    image: "/TELEGRAM LOGO.png",
  },
  {
    slug: "rcs",
    title: "RCS",
    shortDescription:
      "Deliver rich, verified messages with buttons and media, right in the native inbox.",
    description:
      "Rich Communication Services (RCS) brings verified branding, interactive buttons, carousels, and rich media directly into your customers' native messaging inbox — no app download required. Fly Telecom's RCS platform is the next generation of business messaging.",
    features: [
      "Verified sender branding",
      "Interactive buttons & carousels",
      "Rich media & read receipts",
      "Native inbox delivery, no app needed",
    ],
    icon: "📱",
    image: "/RCS LOGO.png",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
