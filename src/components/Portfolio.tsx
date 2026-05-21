import { motion } from "framer-motion";
import { useRef, useState } from "react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { src: p1, title: "Chiaroscuro", cat: "Portrait", year: "2025" },
  { src: p2, title: "Vows at Dusk", cat: "Wedding", year: "2025" },
  { src: p3, title: "Glass & Gold", cat: "Product", year: "2024" },
  { src: p4, title: "Neon Rain", cat: "Street", year: "2025" },
  { src: p5, title: "Set Light", cat: "Film", year: "2024" },
  { src: p6, title: "Velvet Silhouette", cat: "Editorial", year: "2025" },
];

function Card({ item, i }: { item: (typeof items)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -10, y: px * 14 });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={i % 3 === 1 ? "md:mt-16" : ""}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ perspective: "1200px" }}
        className="group cursor-pointer"
      >
        <div
          className="relative overflow-hidden bg-card transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
          <div
            className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between"
            style={{ transform: "translateZ(40px)" }}
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-1">
                {item.cat} — {item.year}
              </p>
              <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
            </div>
            <span className="w-9 h-9 rounded-full border border-primary/60 flex items-center justify-center text-primary text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-500">
              →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              01 — Selected Work
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-balance max-w-2xl leading-[1.05]">
              Frames pulled from <em className="text-primary">the dark</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            A rotating archive of recent commissions across portrait, editorial, brand film and event coverage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((it, i) => (
            <Card key={it.title} item={it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
