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
    <section id="top" className="relative h-[88vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <ClientCanvas />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: "var(--gradient-ember)" }}
        />
        <div className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-[10px] uppercase tracking-[0.5em] text-foreground/60 mb-8"
        >
          Wedding Photography & Film
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-script text-6xl md:text-8xl text-foreground leading-none"
        >
          MS Studios
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 max-w-md text-sm md:text-base text-foreground/70 leading-relaxed"
        >
          Quiet, cinematic wedding stories — light, shadow and the moments between vows.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#photos"
            className="px-7 py-3 border border-foreground/80 text-[11px] uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-colors"
          >
            View Galleries
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-foreground/20 text-[11px] uppercase tracking-[0.3em] hover:border-foreground/80 transition-colors"
          >
            Enquire
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-foreground/60"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.5em]">Scroll</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-foreground origin-top"
        />
      </motion.div>
    </section>
  );
}
