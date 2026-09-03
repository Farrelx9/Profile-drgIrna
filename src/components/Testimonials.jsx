import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Dijelaskan detail sebelum ditambal, jadi gak deg-degan. Ruangannya juga bersih banget.",
    name: "Ratna W.",
  },
  {
    quote:
      "Anak saya biasanya takut ke dokter gigi, tapi drg. Irna sabar banget menghadapinya.",
    name: "Budi S.",
  },
  {
    quote:
      "Hasil whitening-nya natural, bukan putih berlebihan. Sesuai yang saya minta.",
    name: "Melisa T.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="border-t border-teal-100">
      <div className="max-w-content mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl text-teal-900 leading-tight">
            Kata pasien
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <blockquote className="border-l-2 border-gold pl-6">
                <p className="text-ink leading-relaxed">"{t.quote}"</p>
                <cite className="block mt-4 text-sm text-muted not-italic">
                  {t.name}
                </cite>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
