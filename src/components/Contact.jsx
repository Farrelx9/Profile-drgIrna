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
                  Jl. Tanjung Sadari No.61, Perak Bar.,
                  <br />
                  Kec. Krembangan, Surabaya, Jawa Timur 60177
                </dd>
              </div>
              <div>
                <dt className="text-xs text-gold">Telepon / WhatsApp</dt>
                <dd className="mt-1 text-ink">+62 812-8885-6100</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/6281288856100"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-900 text-paper text-sm hover:bg-teal-700 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.004 2C6.486 2 2.01 6.476 2.01 11.994c0 1.885.523 3.65 1.432 5.157L2 22l4.985-1.408a9.937 9.937 0 0 0 5.019 1.353c5.518 0 9.995-4.476 9.995-9.995C21.999 6.476 17.522 2 12.004 2zm0 18.09a8.075 8.075 0 0 1-4.13-1.13l-.296-.176-2.98.843.828-2.955-.192-.303a8.06 8.06 0 0 1-1.245-4.375c0-4.474 3.64-8.114 8.115-8.114 4.474 0 8.114 3.64 8.114 8.114 0 4.475-3.64 8.096-8.114 8.096z" />
                </svg>
                Chat via WhatsApp
              </motion.a>
              <motion.a
                href="https://www.instagram.com/irnadrg/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-teal-900 text-teal-900 text-sm hover:bg-teal-900 hover:text-paper transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="aspect-[4/3] md:aspect-auto md:h-full min-h-[320px] bg-teal-100 relative group overflow-hidden rounded-lg border border-teal-100/80 shadow-sm">
            <iframe
              title="Lokasi klinik"
              className="w-full h-full grayscale contrast-125 pointer-events-none md:pointer-events-auto"
              loading="lazy"
              src="https://maps.google.com/maps?q=Jl.+Tanjung+Sadari+No.61,+Perak+Barat,+Krembangan,+Surabaya,+Jawa+Timur+60177&z=16&output=embed"
            />
            <a
              href="https://share.google/Ud6E9kyx4qQyy4gZz"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-3 right-3 px-4 py-2 bg-teal-900 text-paper text-xs font-medium shadow-md rounded hover:bg-teal-800 transition-all flex items-center gap-1.5 opacity-90 md:opacity-0 md:group-hover:opacity-100"
            >
              <span>Buka di Google Maps</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}