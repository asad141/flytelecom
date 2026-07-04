import { Logo } from "@/components/ui/Logo";

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex aspect-square max-w-lg items-center justify-center lg:max-w-none">
      <div className="absolute inset-0 animate-pulse-ring rounded-full bg-fly-blue/15" />
      <div
        className="absolute inset-8 animate-pulse-ring rounded-full bg-fly-cyan/15"
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
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6ee7b7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="animate-float relative z-10 px-4">
        <Logo height={56} link={false} />
      </div>

      <div className="absolute -left-4 top-12 animate-float-delayed rounded-xl border border-fly-blue/30 bg-fly-navy/90 px-4 py-3 shadow-lg">
        <p className="text-xs font-semibold text-fly-sky">Network Uptime</p>
        <p className="text-2xl font-bold text-white">99.99%</p>
      </div>

      <div className="absolute -right-2 bottom-16 animate-float rounded-xl border border-fly-cyan/30 bg-fly-navy/90 px-4 py-3 shadow-lg">
        <p className="text-xs font-semibold text-fly-sky">Support</p>
        <p className="text-2xl font-bold text-white">24/7</p>
      </div>
    </div>
  );
}
