import { motion } from "framer-motion";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const photos = [
  { src: p2, title: "Vows at Dusk", loc: "Tuscany" },
  { src: p1, title: "First Light", loc: "Amalfi Coast" },
  { src: p6, title: "Velvet Silhouette", loc: "Paris" },
  { src: p4, title: "After the Rain", loc: "Kyoto" },
  { src: p5, title: "Candle & Lace", loc: "Marrakesh" },
  { src: p3, title: "Rings & Gold", loc: "Florence" },
];

export function PhotoGallery() {
  return (
    <section id="photos" className="relative py-28 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/60 mb-3">
              01 — Photography
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Wedding <em className="font-script font-normal">photographs</em>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Quiet, documentary frames — pulled from real wedding days across the past two seasons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden bg-card ${i % 3 === 1 ? "md:mt-10" : ""}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms] ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-1">
                    {p.loc}
                  </p>
                  <h3 className="font-display text-xl">{p.title}</h3>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
