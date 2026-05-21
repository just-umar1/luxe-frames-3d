import { motion } from "framer-motion";

const services = [
  {
    n: "03.1",
    title: "The Half Day",
    body: "Ceremony and portraits — perfect for elopements and intimate city weddings.",
    points: ["6 hours coverage", "One photographer", "Online gallery in 3 weeks"],
  },
  {
    n: "03.2",
    title: "The Full Story",
    body: "Getting ready through first dance. Our most-booked wedding collection.",
    points: ["10 hours coverage", "Photo + film crew", "Heirloom album included"],
  },
  {
    n: "03.3",
    title: "Destination",
    body: "Multi-day coverage abroad — welcome dinner, ceremony, and the morning after.",
    points: ["2–3 day coverage", "Travel & lodging quoted", "Cinematic feature film"],
  },
  {
    n: "03.4",
    title: "Film Only",
    body: "A standalone cinematic edit when you already have a photographer you love.",
    points: ["8 hours coverage", "4K colour-graded film", "Original score licensing"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/60 mb-3">
              03 — Collections
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Wedding <em className="font-script font-normal">collections</em>
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground leading-relaxed self-end">
            Four ways to work with us — from quiet elopements to multi-day destinations. Every booking includes pre-wedding planning calls and a private online gallery.
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
                <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-foreground group-hover:text-foreground group-hover:rotate-45 transition-all duration-500">
                  +
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{s.title}</h3>
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">{s.body}</p>
              <ul className="space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-1 h-1 rounded-full bg-foreground/70" />
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
