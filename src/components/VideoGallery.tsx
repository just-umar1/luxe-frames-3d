import { motion } from "framer-motion";
import p2 from "@/assets/portfolio-2.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const films = [
  { poster: p2, title: "Eleanor & Tom", dur: "4:12", loc: "Lake Como" },
  { poster: p6, title: "Aanya & Rohan", dur: "5:48", loc: "Udaipur" },
  { poster: p4, title: "Marie & Luc", dur: "3:36", loc: "Provence" },
  { poster: p5, title: "Noor & Kareem", dur: "6:02", loc: "Marrakesh" },
];

export function VideoGallery() {
  return (
    <section id="films" className="relative py-28 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-foreground/60 mb-3">
              02 — Films
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Wedding <em className="font-script font-normal">films</em>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Short cinematic edits — scored and graded, delivered in 4K. Click any frame to preview the reel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {films.map((f, i) => (
            <motion.button
              key={f.title}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden bg-card text-left"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={f.poster}
                  alt={f.title}
                  loading="lazy"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1400ms] ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />

              {/* Play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-20 h-20 rounded-full border border-foreground/70 backdrop-blur-sm bg-background/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>

              <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/70 border border-foreground/30 px-2 py-1">
                {f.dur}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60 mb-1">
                    {f.loc}
                  </p>
                  <h3 className="font-display text-2xl">{f.title}</h3>
                </div>
                <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/70 group-hover:text-foreground transition-colors">
                  Watch →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
