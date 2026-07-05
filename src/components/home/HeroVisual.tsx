import { Logo } from "@/components/ui/Logo";

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex aspect-square max-w-lg items-center justify-center lg:max-w-none">
      <div className="absolute inset-0 animate-pulse-ring rounded-full bg-fly-blue/20" />
      <div
        className="absolute inset-8 animate-pulse-ring rounded-full bg-fly-cyan/20"
        style={{ animationDelay: "1s" }}
      />
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
              <stop offset="0%" stopColor="#4B89DC" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#7EC8F7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="animate-float relative z-10 rounded-2xl border border-white/20 bg-white p-8 shadow-2xl shadow-blue-900/40">
        <Logo height={56} link={false} />
      </div>

      <div className="absolute -left-4 top-12 animate-float-delayed rounded-xl border border-fly-sky/30 bg-fly-navy/90 px-4 py-3 shadow-lg backdrop-blur-sm">
        <p className="text-xs font-semibold text-fly-sky">Network Uptime</p>
        <p className="text-2xl font-bold text-white">99.99%</p>
      </div>

      <div className="absolute -right-2 bottom-16 animate-float rounded-xl border border-fly-cyan/30 bg-fly-navy/90 px-4 py-3 shadow-lg backdrop-blur-sm">
        <p className="text-xs font-semibold text-fly-sky">Support</p>
        <p className="text-2xl font-bold text-white">24/7</p>
      </div>
    </div>
  );
}
