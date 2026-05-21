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

// arched, scattered letters with depth via opacity + vertical offset
const TITLE = "MSPHOTOGRAPHY";
const SUBTITLE = "STUDIOS";

function ArchedTitle() {
  const letters = TITLE.split("");
  const total = letters.length;
  return (
    <div className="relative w-full">
      <div className="flex items-end justify-center gap-[0.5vw] md:gap-[0.4vw] select-none">
        {letters.map((ch, i) => {
          // arc: y dips in the middle, opacity fades toward the right
          const t = i / (total - 1); // 0..1
          const arc = Math.sin(t * Math.PI) * 60; // px down at center
          const opacity = 1 - t * 0.85;
          const scale = 1 - t * 0.25;
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity, y: arc }}
              transition={{
                duration: 1.1,
                delay: 0.15 + i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display font-extrabold uppercase leading-none tracking-[-0.03em] text-foreground"
              style={{
                fontSize: "clamp(3.5rem, 12vw, 14rem)",
                transform: `scale(${scale})`,
                transformOrigin: "bottom center",
              }}
            >
              {ch}
            </motion.span>
          );
        })}
      </div>
      <div className="flex justify-center mt-[-1vw]">
        {SUBTITLE.split("").map((ch, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.35 - i * 0.04, y: 0 }}
            transition={{ duration: 1, delay: 0.8 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold uppercase tracking-[0.05em] text-foreground"
            style={{ fontSize: "clamp(2rem, 7vw, 8rem)" }}
          >
            {ch}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D canvas — subtle background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ClientCanvas />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full" style={{ background: "var(--gradient-ember)" }} />
        <div className="absolute inset-0 bg-grain opacity-[0.1] mix-blend-overlay" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-vignette)" }} />
      </div>


      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-foreground/70"
      >
        <span className="font-display text-[10px] uppercase tracking-[0.5em]">Scroll</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-foreground origin-top"
        />
      </motion.div>
    </section>
  );
}
