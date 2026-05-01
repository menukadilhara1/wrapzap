import steakBowl from "@/assets/dish-steak-bowl.jpg";
import salmonWrap from "@/assets/dish-salmon-wrap.jpg";
import medWrap from "@/assets/dish-mediterranean.jpg";

import { motion } from "framer-motion";

const dishes = [
  {
    img: medWrap,
    name: "Mediterranean Scramble",
    desc: "Egg whites, lean turkey sausage, blistered tomatoes, feta. Wrapped in a flax tortilla.",
    protein: 38,
    cal: 410,
    price: 12,
    tag: "Breakfast",
    alt: "High protein Mediterranean scramble gym meal",
  },
  {
    img: steakBowl,
    name: "Steak & Sweet Potato Bowl",
    desc: "Grass-fed flank, roasted sweet potatoes, charred broccoli, tahini drizzle.",
    protein: 52,
    cal: 580,
    price: 16,
    tag: "Hypertrophy",
    alt: "Healthy steak and sweet potato gym meal",
  },
  {
    img: salmonWrap,
    name: "Spicy Salmon Nori Wrap",
    desc: "Wild-caught salmon, avocado, cucumber, sriracha yogurt, toasted nori.",
    protein: 34,
    cal: 460,
    price: 15,
    tag: "Lean Cut",
    alt: "Macro-balanced spicy salmon nori wrap meal",
  },
];

export function MenuShowcase() {
  return (
    <section
      id="menu"
      className="max-w-[1440px] mx-auto px-6 lg:px-10 pt-12 pb-24 lg:pt-16 lg:pb-32"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <span className="text-xs font-bold text-accent uppercase tracking-widest">The Menu</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl text-balance">
            Built around your training block.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md font-medium">
            From high-performance protein wraps in Colombo to calorie-dense bowls. No seed oils. Just
            real ingredients and real macros.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {dishes.map((d, index) => (
          <motion.article
            key={d.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-card p-3 rounded-[2rem] border border-border/60 hover:-translate-y-1 transition-all duration-500 group glass-edge"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="aspect-[4/3] w-full rounded-[1.5rem] bg-secondary overflow-hidden relative">
              <img
                src={d.img}
                alt={d.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-3 left-3 bg-background/90 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {d.tag}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold tracking-tight">{d.name}</h3>
                <span className="font-bold tabular-nums shrink-0">${d.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 font-medium">{d.desc}</p>
              <div className="flex items-center gap-2 mt-5">
                <span className="px-2.5 py-1 bg-accent-soft text-accent rounded-md text-xs font-bold tabular-nums">
                  {d.protein}g Protein
                </span>
                <span className="px-2.5 py-1 bg-secondary rounded-md text-xs font-medium tabular-nums">
                  {d.cal} Cal
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
