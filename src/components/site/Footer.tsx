export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-accent" />
          <span className="font-extrabold tracking-tight">WrapZapEats</span>
          <span className="text-sm text-muted-foreground ml-3">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-muted-foreground">
          <a href="#menu" className="hover:text-foreground transition-colors">
            Menu
          </a>
          <a href="#branches" className="hover:text-foreground transition-colors">
            Locations
          </a>
          <a href="tel:+94773405028" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
