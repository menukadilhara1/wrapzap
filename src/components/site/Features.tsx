const features = [
  {
    n: "01",
    t: "Set your goal",
    d: "Tell the app your training split and macro targets. We calibrate your menu instantly.",
  },
  {
    n: "02",
    t: "Order in 3 taps",
    d: "Curated recommendations or browse the full menu. Reorder favorites with one tap.",
  },
  {
    n: "03",
    t: "Eat. Train. Repeat.",
    d: "Hot, fresh, and fast. Track every macro automatically — no logging required.",
  },
];

export function Features() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-24 pb-12 lg:pt-32 lg:pb-16">
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-bold text-accent uppercase tracking-widest">
          How it works
        </span>
        <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
          Skip the cooking. Hit your goals.
        </h2>
        <p className="mt-4 text-muted-foreground font-medium max-w-md">
          The premier gym meal delivery in Sri Lanka. Get precision macro meals in Sri Lanka without
          the hassle of meal prep in Colombo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-[2rem] overflow-hidden border border-border">
        {features.map((f) => (
          <div
            key={f.n}
            className="bg-card p-8 lg:p-10 flex flex-col gap-6 hover:bg-secondary transition-colors"
          >
            <span className="text-accent font-extrabold tabular-nums text-sm tracking-widest">
              {f.n}
            </span>
            <h3 className="text-2xl font-bold tracking-tight">{f.t}</h3>
            <p className="text-muted-foreground font-medium leading-relaxed">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
