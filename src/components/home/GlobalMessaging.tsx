import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Container } from "@/components/ui/Container";

export function GlobalMessaging() {
  return (
    <div className="w-full py-8 sm:py-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Phone image */}
          <AnimateOnScroll direction="left">
            <div className="flex items-center justify-center">
              <Image
                src="/section image.png"
                alt="Fly Telecom global messaging platform on mobile"
                width={480}
                height={520}
                className="w-full max-w-sm object-contain drop-shadow-2xl lg:max-w-md"
                priority
              />
            </div>
          </AnimateOnScroll>

          {/* Text content */}
          <AnimateOnScroll direction="right" delay={150}>
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl">
              Global Messaging Solutions for{" "}
              <span className="text-fly-blue">Enterprises</span>
              <br />
              <span className="text-fly-blue">&amp; Mobile Operators</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-body">
              Fly Telecom provides enterprise-grade messaging solutions that
              enable businesses and mobile operators to connect with customers
              worldwide. From SMS and OTP delivery to Voice, WhatsApp Business,
              Email, and RCS, our reliable infrastructure and intelligent
              routing ensure fast, secure, and high-quality communication at
              global scale.
            </p>
          </AnimateOnScroll>
        </div>
      </Container>
    </div>
  );
}
