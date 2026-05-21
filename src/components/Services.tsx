import { motion } from "framer-motion";

const services = [
  {
    n: "02.1",
    title: "Editorial Portrait",
    body: "Single-light, character-driven sittings for talent, founders and press features.",
    points: ["Studio or location", "Two looks included", "Retouched master files"],
  },
  {
    n: "02.2",
    title: "Brand Films",
    body: "Cinematic short-form video for brands that want mood over noise. Concept to cut.",
    points: ["6K cinema capture", "Original score available", "Color graded delivery"],
  },
  {
    n: "02.3",
    title: "Weddings & Events",
    body: "Documentary-led coverage with a film aesthetic. Shadows kept, moments preserved.",
    points: ["Dual photographer", "Edit in 4 weeks", "Heirloom album option"],
  },
  {
    n: "02.4",
    title: "Product & Still Life",
    body: "Tactile, low-key product imagery for luxury, spirits, fragrance and design.",
    points: ["In-studio sets", "Motion loops add-on", "Usage-licensed delivery"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              02 — Services
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05]">
              Lit with intent. <br />
              <em className="text-primary">Cut with patience.</em>
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground leading-relaxed self-end">
            Every project starts with a conversation about light, distance and silence. Then we plan
            the frames. We work small, considered, and close to the subject.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border/40">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background p-10 md:p-12 group hover:bg-card transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
                <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:rotate-45 transition-all duration-500">
                  +
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{s.title}</h3>
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">{s.body}</p>
              <ul className="space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
