import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    eyebrow: "Dokter Gigi Umum & Estetik",
    title: "Perawatan gigi yang teliti,",
    titleLine2: "untuk senyum yang tenang dipakai.",
    desc: "Klinik gigi mandiri drg. Irna Kusuma melayani perawatan umum hingga estetik dengan pendekatan yang personal — setiap pasien diperiksa dan dijelaskan tuntas sebelum tindakan.",
    image: "https://placehold.co/1600x1000/123832/FBFAF7?text=Pemeriksaan+Umum",
  },
  {
    eyebrow: "Perawatan Estetik",
    title: "Senyum lebih cerah,",
    titleLine2: "tetap terlihat alami.",
    desc: "Whitening dan veneer dikerjakan proporsional, disesuaikan dengan bentuk wajah dan warna gigi asli — bukan sekadar putih berlebihan.",
    image: "https://placehold.co/1600x1000/1F5C52/FBFAF7?text=Perawatan+Estetik",
  },
  {
    eyebrow: "Ramah untuk Keluarga",
    title: "Nyaman untuk si kecil,",
    titleLine2: "tenang untuk orang tua.",
    desc: "Penanganan pasien anak dengan pendekatan yang sabar dan tidak terburu-buru, supaya kunjungan ke dokter gigi tidak jadi pengalaman yang menakutkan.",
    image: "https://placehold.co/1600x1000/0D2B27/FBFAF7?text=Ramah+Keluarga",
  },
];

const AUTOPLAY_MS = 6000;

const imageVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1 },
};

const contentVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index, paused, go]);

  const slide = slides[index];

  return (
    <section
      id="top"
      className="relative h-[88vh] min-h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* full-bleed background */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={slide.image}
          alt={slide.eyebrow}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/45 to-teal-900/70" />

      {/* content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-sm text-gold tracking-[0.15em] uppercase mb-4">
              {slide.eyebrow}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-paper">
              {slide.title}
              <br />
              {slide.titleLine2}
            </h1>
            <p className="mt-6 text-paper/75 text-lg max-w-lg mx-auto leading-relaxed">
              {slide.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#kontak"
            className="px-8 py-3 rounded-full bg-gold text-ink text-sm hover:bg-gold/90 transition-colors"
          >
            Buat janji temu
          </a>
          <a
            href="#layanan"
            className="px-8 py-3 rounded-full border border-paper/40 text-paper text-sm hover:border-paper transition-colors"
          >
            Lihat layanan
          </a>
        </div>

        <div className="mt-10 flex items-center gap-6 text-paper/70 text-xs">
          <span>
            <strong className="text-paper font-display text-base mr-1.5">8+</strong>
            tahun praktik
          </span>
          <span className="w-px h-3 bg-paper/30" />
          <span>
            <strong className="text-paper font-display text-base mr-1.5">3.000+</strong>
            pasien
          </span>
          <span className="w-px h-3 bg-paper/30" />
          <span>
            <strong className="text-paper font-display text-base mr-1.5">4.9</strong>
            rating
          </span>
        </div>

        <div className="mt-8 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Ke slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-gold" : "w-1.5 bg-paper/40 hover:bg-paper/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* side arrows, always visible but subtle */}
      <button
        onClick={() => go(index - 1)}
        aria-label="Slide sebelumnya"
        className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-paper/30 items-center justify-center text-paper/80 hover:text-paper hover:border-paper/70 transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Slide berikutnya"
        className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-paper/30 items-center justify-center text-paper/80 hover:text-paper hover:border-paper/70 transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}
