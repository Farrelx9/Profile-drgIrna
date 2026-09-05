import Reveal from "./Reveal";

const credentials = [
  {
    title: "Pendidikan Dokter Gigi",
    place: "Universitas Brawijaya, 2014",
  },
  {
    title: "Sertifikasi Kedokteran Gigi Estetik",
    place: "PDGI, 2018",
  },
  {
    title: "Anggota Aktif",
    place: "Persatuan Dokter Gigi Indonesia (PDGI)",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-teal-100">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl text-teal-900 leading-tight">
              Tentang drg. Irna
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Saya percaya kunjungan ke dokter gigi tidak perlu menegangkan.
              Setiap pasien saya periksa dengan lengkap, saya jelaskan
              kondisinya dengan bahasa yang mudah dipahami, dan tindakan
              hanya dilakukan setelah pasien benar-benar memahami pilihannya.
            </p>
          </Reveal>

          <div className="space-y-0">
            {credentials.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div
                  className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5 ${
                    i !== 0 ? "border-t border-teal-100" : ""
                  }`}
                >
                  <span className="text-sm text-gold w-40 shrink-0">
                    {item.place}
                  </span>
                  <span className="text-ink">{item.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
