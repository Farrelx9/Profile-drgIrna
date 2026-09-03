import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="kontak" className="border-t border-teal-100">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl text-teal-900 leading-tight">
              Buat janji temu
            </h2>
            <p className="mt-5 text-muted leading-relaxed max-w-sm">
              Hubungi klinik untuk membuat janji atau menanyakan hal lain.
              Balasan biasanya dalam satu hari kerja.
            </p>

            <dl className="mt-10 space-y-5">
              <div>
                <dt className="text-xs text-gold">Alamat</dt>
                <dd className="mt-1 text-ink">
                  Jl. Contoh Raya No. 12, {/* TODO: ganti dengan alamat asli */}
                  <br />
                  [Nama Kota]
                </dd>
              </div>
              <div>
                <dt className="text-xs text-gold">Telepon / WhatsApp</dt>
                <dd className="mt-1 text-ink">+62 812-0000-0000</dd>
              </div>
              <div>
                <dt className="text-xs text-gold">Email</dt>
                <dd className="mt-1 text-ink">halo@klinikdrgirna.id</dd>
              </div>
            </dl>

            <motion.a
              href="https://wa.me/6281200000000"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-block px-6 py-3 bg-teal-900 text-paper text-sm hover:bg-teal-700 transition-colors"
            >
              Chat via WhatsApp
            </motion.a>
          </Reveal>

          <Reveal delay={0.15} className="aspect-[4/3] md:aspect-auto md:h-full min-h-[320px] bg-teal-100">
            {/* TODO: ganti src dengan embed Google Maps lokasi klinik */}
            <iframe
              title="Lokasi klinik"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
              src="https://maps.google.com/maps?q=Surabaya&z=14&output=embed"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
