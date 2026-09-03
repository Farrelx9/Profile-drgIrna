import Reveal from "./Reveal";

const services = [
  {
    name: "Pemeriksaan & Scaling",
    desc: "Pembersihan karang gigi menyeluruh dan pemeriksaan rutin untuk menjaga kesehatan gigi dan gusi.",
  },
  {
    name: "Tambal Gigi",
    desc: "Penambalan gigi berlubang menggunakan bahan resin komposit sewarna gigi.",
  },
  {
    name: "Pemutihan Gigi",
    desc: "Perawatan whitening untuk hasil gigi lebih cerah dengan proses yang aman bagi enamel.",
  },
  {
    name: "Veneer & Estetik",
    desc: "Perbaikan bentuk dan warna gigi untuk hasil senyum yang natural.",
  },
  {
    name: "Pencabutan Gigi",
    desc: "Pencabutan gigi umum maupun gigi bungsu dengan penanganan minim nyeri.",
  },
  {
    name: "Behel & Ortodonti",
    desc: "Konsultasi dan pemasangan kawat gigi untuk merapikan susunan gigi.",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="border-t border-teal-100 bg-teal-900">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl text-paper leading-tight max-w-md">
            Layanan yang tersedia
          </h2>
          <p className="mt-4 text-teal-100/70 max-w-md">
            Perawatan dasar hingga estetik, disesuaikan dengan kebutuhan dan
            kenyamanan setiap pasien.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.name}
              delay={(i % 2) * 0.08}
              className={`py-6 pr-8 border-teal-700/60 ${
                i % 2 === 0 ? "md:border-r" : "md:pl-8"
              } ${i < services.length - (services.length % 2 === 0 ? 2 : 1) ? "border-b" : ""}`}
            >
              <h3 className="text-paper font-display text-xl">
                {service.name}
              </h3>
              <p className="mt-2 text-teal-100/70 text-sm leading-relaxed">
                {service.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
