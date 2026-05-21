import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4">
              04 — Contact
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-6xl md:text-8xl leading-[0.95] text-balance"
            >
              Let's make <br />
              <em className="text-primary glow-text">something</em> <br />
              quiet & loud.
            </motion.h2>
          </div>
          <div className="md:col-span-5 space-y-10 md:pt-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Studio</p>
              <p className="font-display text-2xl">42 Foundry Lane, East Quarter</p>
              <p className="text-muted-foreground text-sm mt-1">By appointment, Tues — Sat</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Bookings</p>
              <a href="mailto:hello@msphoto.studio" className="font-display text-2xl text-primary hover:underline underline-offset-4">
                hello@msphoto.studio
              </a>
              <p className="text-muted-foreground text-sm mt-1">Reply within 24 hours</p>
            </div>
            <div className="flex gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Vimeo</a>
              <a href="#" className="hover:text-primary transition-colors">Behance</a>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} MS Photography Studios</span>
          <span className="font-mono">Lat 40.7°N — Lon 74.0°W</span>
        </div>
      </div>
    </section>
  );
}
