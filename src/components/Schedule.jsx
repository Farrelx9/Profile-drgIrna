import { motion } from "framer-motion";
import Reveal from "./Reveal";

const schedule = [
  { day: "Senin – Jumat", hours: "16.00 – 20.00" },
  { day: "Sabtu - Minggu", hours: "Tutup" },

];

export default function Schedule() {
  return (
    <section id="jadwal" className="border-t border-teal-100">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl text-teal-900 leading-tight">
              Jadwal praktik
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Disarankan membuat janji temu terlebih dahulu agar waktu
              pemeriksaan tidak perlu menunggu lama.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-teal-900">
                  <th className="pb-3 text-sm font-normal text-muted">Hari</th>
                  <th className="pb-3 text-sm font-normal text-muted">
                    Jam Praktik
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <motion.tr
                    key={row.day}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="border-b border-teal-100"
                  >
                    <td className="py-4 text-ink">{row.day}</td>
                    <td className="py-4 text-muted">{row.hours}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
