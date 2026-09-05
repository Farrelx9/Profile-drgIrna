import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    eyebrow: "Dokter Gigi Umum & Estetik",
    title: "Perawatan gigi yang teliti,",
    titleLine2: "untuk senyum yang tenang dipakai.",
    desc: "Klinik gigi mandiri drg. Irna Kurnia melayani perawatan umum hingga estetik dengan pendekatan yang personal — setiap pasien diperiksa dan dijelaskan tuntas sebelum tindakan.",
    video: "/videos/hero-1.mp4",
  },
  {
    eyebrow: "Perawatan Estetik",
    title: "Senyum lebih cerah,",
    titleLine2: "tetap terlihat alami.",
    desc: "Whitening dan veneer dikerjakan proporsional, disesuaikan dengan bentuk wajah dan warna gigi asli — bukan sekadar putih berlebihan.",
    video: "/videos/hero-2.mp4",
  },
  {
    eyebrow: "Ramah untuk Keluarga",
    title: "Nyaman untuk si kecil,",
    titleLine2: "tenang untuk orang tua.",
    desc: "Penanganan pasien anak dengan pendekatan yang sabar dan tidak terburu-buru, supaya kunjungan ke dokter gigi tidak jadi pengalaman yang menakutkan.",
    video: "/videos/hero-3.mp4",
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
      className="relative h-[88vh] min-h-[620px] overflow-hidden bg-teal-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* full-bleed video background */}
      <AnimatePresence mode="wait">
        <motion.video
          key={index}
          src={slide.video}
          autoPlay
          loop
          muted
          playsInline
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* multi-layer readability overlay: dark vignette + rich teal gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/95 via-teal-950/75 to-teal-950/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-950/40 via-teal-950/75 to-teal-950/90 pointer-events-none" />

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
            <div className="inline-block px-4 py-1 rounded-full bg-amber-400/15 border border-amber-300/30 backdrop-blur-md mb-5">
              <p className="text-xs text-amber-300 font-semibold tracking-[0.2em] uppercase drop-shadow-sm">
                {slide.eyebrow}
              </p>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.15] text-paper drop-shadow-md">
              {slide.title}
              <br />
              {slide.titleLine2}
            </h1>
            <p className="mt-6 text-paper/90 text-lg max-w-lg mx-auto leading-relaxed drop-shadow-sm">
              {slide.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#kontak"
            className="px-8 py-3.5 rounded-full bg-amber-400 text-teal-950 text-sm font-semibold hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20 hover:scale-105 active:scale-95"
          >
            Buat janji temu
          </a>
          <a
            href="#layanan"
            className="px-8 py-3.5 rounded-full bg-white/10 border border-white/30 text-paper text-sm hover:bg-white/20 hover:border-white/50 backdrop-blur-md transition-all"
          >
            Lihat layanan
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4 sm:gap-6 px-6 py-2.5 rounded-full bg-teal-950/50 border border-white/10 backdrop-blur-md text-paper/85 text-xs shadow-inner">
          <span>
            <strong className="text-amber-300 font-display text-base mr-1.5">6+</strong>
            tahun praktik
          </span>
          <span className="w-px h-3 bg-white/20" />
          <span>
            <strong className="text-amber-300 font-display text-base mr-1.5">1.000+</strong>
            pasien
          </span>
          <span className="w-px h-3 bg-white/20" />
          <span>
            <strong className="text-amber-300 font-display text-base mr-1.5">4.0</strong>
            rating
          </span>
        </div>

        <div className="mt-7 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Ke slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-amber-400 shadow-sm shadow-amber-400/50" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* side arrows, always visible but subtle */}
      <button
        onClick={() => go(index - 1)}
        aria-label="Slide sebelumnya"
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-teal-950/40 border border-white/20 items-center justify-center text-paper/80 hover:text-paper hover:bg-teal-950/70 hover:border-white/50 backdrop-blur-md transition-all"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Slide berikutnya"
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-teal-950/40 border border-white/20 items-center justify-center text-paper/80 hover:text-paper hover:bg-teal-950/70 hover:border-white/50 backdrop-blur-md transition-all"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}
