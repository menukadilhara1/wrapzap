const branches = [
  {
    city: "Colombo",
    name: "Colombo 03",
    address: "42 Marine Dr, Kollupitiya, Colombo 00300",
    hours: "10:30 — 23:00 daily",
    radius: "5.0 km",
    eta: "24 min",
    flagship: true,
  },
  {
    city: "Colombo",
    name: "Nugegoda",
    address: "118 High Level Rd, Nugegoda 10250",
    hours: "10:30 — 22:30 daily",
    radius: "4.5 km",
    eta: "26 min",
  },
  {
    city: "Colombo",
    name: "Rajagiriya",
    address: "85 Sri Jayawardenepura Mw, Rajagiriya 10100",
    hours: "10:30 — 22:30 daily",
    radius: "4.2 km",
    eta: "27 min",
  },
  {
    city: "Kandy",
    name: "Peradeniya",
    address: "27 Galaha Rd, Peradeniya 20400",
    hours: "11:00 — 22:00 daily",
    radius: "5.5 km",
    eta: "29 min",
  },
  {
    city: "Galle",
    name: "Fort",
    address: "12 Pedlar St, Galle Fort 80000",
    hours: "11:00 — 22:30 daily",
    radius: "4.8 km",
    eta: "25 min",
  },
  {
    city: "Negombo",
    name: "Lewis Place",
    address: "61 Lewis Pl, Negombo 11500",
    hours: "11:00 — 23:00 daily",
    radius: "5.2 km",
    eta: "28 min",
  },
];

export function Stats() {
  return (
    <section id="branches" className="border-y border-border bg-card">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-accent tracking-widest uppercase">
              Our kitchens
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.05]">
              Find your nearest branch.
            </h2>
          </div>
          <p className="text-base text-muted-foreground font-medium max-w-sm">
            Six kitchens providing healthy food delivery in Colombo, Kandy, Galle and Negombo — more cities dropping this year.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {branches.map((b) => (
            <li key={`${b.city}-${b.name}`} className="bg-card p-7 lg:p-8 flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                    {b.city}
                  </span>
                  <h3 className="text-2xl font-extrabold tracking-[-0.02em] leading-tight">
                    {b.name}
                  </h3>
                </div>
                {b.flagship && (
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-accent-soft text-accent border border-accent/10 whitespace-nowrap">
                    Flagship
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                {b.address}
              </p>

              <div className="grid grid-cols-3 gap-3 pt-1">
                <Stat label="Hours" value={b.hours.split(" ")[0] + "–" + b.hours.split(" ")[2]} />
                <Stat label="Radius" value={b.radius} />
                <Stat label="Avg ETA" value={b.eta} />
              </div>

              <div className="flex items-center gap-3 pt-2 mt-auto">
                <a
                  href="#download"
                  className="flex-1 text-center px-4 py-3 rounded-xl bg-foreground text-background text-sm font-bold hover:bg-foreground/90 transition-colors"
                >
                  Order from here
                </a>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(b.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl border border-border text-sm font-bold hover:bg-secondary transition-colors"
                >
                  Directions
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col leading-tight">
      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
        {label}
      </span>
      <span className="text-sm font-extrabold tabular-nums mt-1">{value}</span>
    </div>
  );
}
