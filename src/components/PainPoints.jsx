import Reveal from "./Reveal";

const PAINS = [
  "Dificuldade para interpretar diagramas elétricos.",
  "Pouco conhecimento em Automação Industrial.",
  "Insegurança na aplicação da NR-10.",
  "Falta de domínio sobre CLPs e Redes Industriais.",
  "Pouca experiência com Instrumentação Industrial.",
  "Dificuldade para acompanhar a evolução da Indústria 4.0.",
];

export default function PainPoints() {
  return (
    <section className="bg-lightgray py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-electric">
            Diagnóstico
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-dark sm:text-3xl">
            A Indústria Mudou. Você Está Preparado?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((pain, i) => (
            <Reveal
              key={pain}
              delay={i * 60}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <i className="fa-solid fa-triangle-exclamation mt-0.5 text-orange" aria-hidden="true"></i>
              <p className="text-sm text-slate-700 sm:text-base">{pain}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mx-auto mt-12 max-w-2xl text-center font-display text-lg font-semibold text-dark">
          "O mercado procura profissionais cada vez mais qualificados. Quem domina
          essas tecnologias conquista melhores oportunidades."
        </Reveal>
      </div>
    </section>
  );
}
