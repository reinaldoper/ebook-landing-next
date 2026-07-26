import Reveal from "./Reveal";

const OTHERS = [
  "Conteúdo superficial",
  "Poucas ilustrações",
  "Assuntos isolados",
  "Informações desatualizadas",
];

const OURS = [
  "Conteúdo completo",
  "Três áreas integradas",
  "Diagramas e ilustrações",
  "Linguagem simples",
  "Baseado em normas técnicas",
  "Voltado para aplicações reais",
];

export default function Comparison() {
  return (
    <section className="bg-lightgray py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-electric">
            Comparativo
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-dark sm:text-3xl">
            O diferencial deste e-book
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-red-100 bg-white p-6">
            <h3 className="font-label text-sm font-bold uppercase tracking-wide text-slate-400">
              Outros materiais
            </h3>
            <ul className="mt-4 space-y-3">
              {OTHERS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-500">
                  <i className="fa-solid fa-xmark text-red-400" aria-hidden="true"></i>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="rounded-2xl border-2 border-electric bg-dark p-6 text-white shadow-xl">
            <h3 className="font-label text-sm font-bold uppercase tracking-wide text-electric-light">
              Nosso material
            </h3>
            <ul className="mt-4 space-y-3">
              {OURS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <i className="fa-solid fa-check text-orange" aria-hidden="true"></i>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
