import heroImg from "@/assets/hero-phone-app.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pb-32">
      <div
        aria-hidden
        className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-white rounded-full mix-blend-overlay blur-[120px] opacity-70 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/10 w-fit">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold text-accent tracking-widest uppercase">
              Now on iOS & Android
            </span>
          </div>

          <h1 className="text-[3.25rem] sm:text-6xl lg:text-7xl leading-[0.95] font-extrabold tracking-[-0.04em] text-balance">
            High-Protein Meal Delivery
            <br />
            <span className="text-muted-foreground">for Athletes in Colombo.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-[42ch] font-medium">
            Chef-crafted high-protein meals and healthy gym food delivery designed for athletes in Colombo — calibrated to your training block and at
            your door in under 30 minutes. Order it all from the WrapZapEats app.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <AppStoreButton store="ios" />
            <AppStoreButton store="android" />
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:gap-6 pt-4 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-bold">Fuel for Bulks</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="font-bold">Fuel for Cuts</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="font-bold">Built for Athletes</span>
            </div>
          </div>
        </motion.div>

        {/* Right — phone + dish hero image with floating chips */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-7 relative"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"
          />

          <div className="relative z-10">
            <div className="relative">
              <img
                src={heroImg}
                alt="WrapZapEats high protein meal delivery app in Colombo"
                width={1280}
                height={1280}
                className="w-full h-auto block drop-shadow-[0_40px_60px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AppStoreButton({ store }: { store: "ios" | "android" }) {
  const dark = store === "ios";
  return (
    <a
      href="#download"
      className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all hover:shadow-lg ${
        dark
          ? "bg-foreground text-background hover:bg-foreground/90"
          : "bg-card text-foreground border border-border hover:bg-secondary"
      }`}
    >
      {dark ? (
        <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
          <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.46 1.58-1.5 3.12-.85 1.32-1.748 2.62-3.146 2.65-1.39.03-1.84-.82-3.43-.82-1.6 0-2.09.79-3.4.85-1.36.05-2.39-1.42-3.26-2.74-1.78-2.6-3.16-7.36-1.31-10.59.92-1.6 2.56-2.62 4.34-2.65 1.34-.03 2.61.91 3.42.91.81 0 2.36-1.12 3.98-.95.68.03 2.59.27 3.81 2.06-.1.06-2.28 1.34-2.25 4 .03 3.18 2.79 4.24 2.83 4.26z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
          <path
            fill="currentColor"
            d="M3.6 1.84a1.5 1.5 0 0 0-.6 1.2v17.92a1.5 1.5 0 0 0 .6 1.2l10.2-10.16L3.6 1.84zm11.46 9.4 2.69-2.68-9.6-5.45 6.91 8.13zm0 1.52-6.91 8.13 9.6-5.45-2.69-2.68zm5.94-3.4-2.66-1.51-3.05 3.04 3.05 3.04 2.7-1.53a1.7 1.7 0 0 0 0-3.04z"
          />
        </svg>
      )}
      <span className="flex flex-col items-start leading-tight">
        <span
          className={`text-[10px] uppercase tracking-wider font-semibold ${dark ? "text-background/70" : "text-muted-foreground"}`}
        >
          {dark ? "Download on the" : "Get it on"}
        </span>
        <span className="text-base font-bold">{dark ? "App Store" : "Google Play"}</span>
      </span>
    </a>
  );
}
