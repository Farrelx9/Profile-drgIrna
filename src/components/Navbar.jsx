import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#layanan" },
  { label: "Jadwal", href: "#jadwal" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-5xl rounded-full bg-teal-950/85 backdrop-blur-xl border border-white/20 shadow-2xl shadow-teal-950/40 text-paper py-2.5 px-4 sm:px-6"
          : "top-0 inset-x-0 w-full bg-gradient-to-b from-teal-950/90 via-teal-950/50 to-transparent backdrop-blur-sm text-paper py-4 px-6 sm:px-10 border-b border-white/10"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform shadow-sm shadow-amber-400" />
          <span className="font-display text-base sm:text-lg text-paper tracking-wide">
            drg. Irna Kurnia
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/10 p-1 rounded-full border border-white/10 backdrop-blur-md">
          {links.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? "text-teal-950 font-semibold"
                    : "text-paper/80 hover:text-paper"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-amber-400 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#kontak"
            className="px-5 py-2 rounded-full bg-amber-400 text-teal-950 text-xs font-semibold hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20 hover:scale-105 active:scale-95"
          >
            Buat Janji
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 text-paper backdrop-blur-md"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
        >
          <div className="w-4 h-3.5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-left ${
                open ? "rotate-45 translate-x-0.5 -translate-y-0.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-left ${
                open ? "-rotate-45 translate-x-0.5 translate-y-0.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-3 p-4 rounded-2xl bg-teal-950/95 border border-white/15 backdrop-blur-2xl shadow-2xl text-paper"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? "bg-amber-400 text-teal-950 font-semibold"
                      : "text-paper/90 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontak"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-4 py-3 rounded-xl bg-amber-400 text-teal-950 font-semibold text-sm shadow-lg shadow-amber-400/20"
              >
                Buat Janji Temu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
