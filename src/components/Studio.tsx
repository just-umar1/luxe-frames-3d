import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { n: "12", l: "Years behind the lens" },
  { n: "240+", l: "Productions delivered" },
  { n: "18", l: "Industry awards" },
  { n: "4", l: "Cities, one studio" },
];

export function Studio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="studio" ref={ref} className="relative py-32 px-6 border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full" style={{ background: "var(--gradient-ember)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-24">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              03 — Studio
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05] text-balance">
              MS Photography is a small <em className="text-primary">crew</em> with a long memory for light.
            </h2>
          </div>
          <motion.p
            style={{ y }}
            className="md:col-span-4 md:col-start-9 text-muted-foreground leading-relaxed"
          >
            Founded by Mira Solano in 2013, we run a low-key studio in the industrial east end —
            two stages, a colorist's suite, and a wall of glass we've collected for a decade.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 border border-border/40">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10"
            >
              <div className="font-display text-5xl md:text-6xl text-primary mb-3">{s.n}</div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
