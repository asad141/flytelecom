import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex aspect-square max-w-lg items-center justify-center lg:max-w-none">
      {/* Morphing background blob */}
      <div className="blob-morph absolute inset-4 rounded-full bg-fly-blue/10 blur-2xl" />

      {/* Pulse rings */}
      <div className="absolute inset-0 animate-pulse-ring rounded-full bg-fly-blue/15" />
      <div
        className="absolute inset-8 animate-pulse-ring rounded-full bg-fly-cyan/15"
        style={{ animationDelay: "1s" }}
      />

      {/* Spinning dashed ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 400 400" className="h-full w-full opacity-40" aria-hidden="true">
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="url(#ring-gradient)"
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />
          <defs>
            <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6ee7b7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Twinkling particles */}
      {[
        { top: "10%", left: "15%", size: 4, duration: "2.5s", delay: "0s" },
        { top: "20%", right: "12%", size: 3, duration: "3.5s", delay: "0.8s" },
        { top: "70%", left: "8%", size: 5, duration: "4s", delay: "0.3s" },
        { top: "80%", right: "18%", size: 3, duration: "2.8s", delay: "1.2s" },
        { top: "45%", left: "5%", size: 4, duration: "3.2s", delay: "0.6s" },
        { top: "35%", right: "7%", size: 3, duration: "3.8s", delay: "1.5s" },
      ].map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: "left" in p ? p.left : undefined,
            right: "right" in p ? p.right : undefined,
            width: p.size,
            height: p.size,
            ["--duration" as string]: p.duration,
            ["--delay" as string]: p.delay,
          }}
        />
      ))}

      {/* Hero image */}
      <div className="animate-float relative z-10 h-[85%] w-[85%]">
        <Image
          src="/hero-image.png"
          alt="Fly Telecom SMS messaging shown on a smartphone"
          fill
          className="object-contain drop-shadow-2xl"
          preload
        />
      </div>

      {/* Floating badges */}
      <div className="badge-float border-glow absolute -left-4 top-12 rounded-xl border border-fly-blue/30 bg-fly-navy/90 px-4 py-3 shadow-lg backdrop-blur-sm">
        <p className="text-xs font-semibold text-fly-sky">Global Routes</p>
        <p className="text-2xl font-bold text-white">A2P SMS</p>
      </div>

      <div className="badge-float-delayed border-glow absolute -right-2 bottom-16 rounded-xl border border-fly-cyan/30 bg-fly-navy/90 px-4 py-3 shadow-lg backdrop-blur-sm">
        <p className="text-xs font-semibold text-fly-sky">Support</p>
        <p className="text-2xl font-bold text-white">24/7</p>
      </div>
    </div>
  );
}
