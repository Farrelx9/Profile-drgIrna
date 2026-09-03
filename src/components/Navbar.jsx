import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#layanan" },
  { label: "Jadwal", href: "#jadwal" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-teal-100"
    >
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg text-teal-900">
          drg. Irna Dental Care
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-teal-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="text-sm px-4 py-2 border border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-paper transition-colors"
          >
            Buat Janji
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 w-6"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
        >
          <span className={`h-px bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-teal-100 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-teal-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setOpen(false)}
            className="text-sm px-4 py-2 border border-teal-900 text-teal-900 text-center"
          >
            Buat Janji
          </a>
        </nav>
      )}
    </motion.header>
  );
}
