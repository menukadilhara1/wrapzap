import logo from "@/assets/logo.png";

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 h-20 z-50 flex items-center justify-between px-6 lg:px-10 backdrop-blur-2xl bg-background/60 border-b border-white/30">
      <div className="flex items-center gap-8">
        <a href="#" className="flex items-center" aria-label="WrapZapEats">
          <img src={logo} alt="WrapZapEats — Zap Your Hunger" className="h-12 w-auto" />
        </a>
        <div className="hidden lg:flex gap-7 text-sm font-medium text-muted-foreground">
          <a href="#menu" className="hover:text-foreground transition-colors">
            The Menu
          </a>
          <a href="#branches" className="hover:text-foreground transition-colors">
            Locations
          </a>
          <a href="#download" className="hover:text-foreground transition-colors">
            Download
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <a
          href="tel:+94773405028"
          className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +94 77 340 5028
        </a>
        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors shadow-soft"
          >
            Get the App
          </a>
        </div>
      </div>
    </nav>
  );
}
