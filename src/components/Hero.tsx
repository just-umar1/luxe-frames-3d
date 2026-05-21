import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";

const HeroCanvas = lazy(() => import("./HeroCanvas").then((m) => ({ default: m.HeroCanvas })));

function ClientCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <Suspense fallback={null}>
      <HeroCanvas />
    </Suspense>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* ambient ember */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-60" style={{ background: "var(--gradient-ember)" }} />
        <div className="absolute inset-0 bg-grain opacity-[0.15] mix-blend-overlay" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
      </div>

      {/* 3D canvas */}
      <div className="absolute inset-0 z-0">
        <ClientCanvas />
      </div>

      {/* Copy */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 pointer-events-none">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6"
            >
              MS Photography Studios — Est. 2013
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] tracking-tight text-balance"
            >
              We chase <br />
              <em className="text-primary glow-text">light</em> through <br />
              dark rooms.
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:col-span-4 md:col-start-9 space-y-6 pointer-events-auto"
          >
            <p className="text-muted-foreground leading-relaxed">
              A photography & film studio built for brands, weddings and editorial work that prefers
              shadow to spectacle.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
              >
                View the archive
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 border border-border text-xs uppercase tracking-[0.25em] hover:border-primary hover:text-primary transition-colors"
              >
                Book a sitting
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-float-slow" />
      </motion.div>
    </section>
  );
}
