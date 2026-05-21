import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { n: "180+", l: "Weddings filmed" },
  { n: "12", l: "Years documenting love" },
  { n: "22", l: "Countries travelled" },
  { n: "100%", l: "Couples we'd shoot again" },
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
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/60 mb-4">
              04 — Studio
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              A small wedding <em className="font-script font-normal">crew</em> with a long memory for light.
            </h2>
          </div>
          <motion.p
            style={{ y }}
            className="md:col-span-4 md:col-start-9 text-muted-foreground leading-relaxed"
          >
            Founded by Mira Solano in 2013, MS Studios is a two-person photo & film team
            travelling worldwide for weddings — quietly, without ever interrupting the day.
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
              <div className="font-display text-5xl md:text-6xl text-foreground mb-3">{s.n}</div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
