import { useEffect, useState } from "react";

const links = [
  { label: "Photos", href: "#photos" },
  { label: "Films", href: "#films" },
  { label: "Collections", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/60 py-3" : "py-6"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-8 flex items-center justify-between">
        <a href="#top" className="font-script text-2xl md:text-3xl tracking-tight text-foreground/95 hover:text-foreground transition-colors">
          MS Studios
        </a>
        <ul className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.35em] text-foreground/80">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="hover:text-foreground/50 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 text-foreground/70">
          <a href="#" aria-label="Instagram" className="hover:text-foreground transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-foreground transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 8.5a6 6 0 0 1-4-1.5v8a5.5 5.5 0 1 1-5.5-5.5v3a2.5 2.5 0 1 0 2.5 2.5V3h3a4 4 0 0 0 4 4v1.5z"/></svg>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-foreground transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M10 9l5 3-5 3V9z" fill="currentColor"/></svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
