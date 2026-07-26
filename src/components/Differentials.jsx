import Reveal from "./Reveal";

const ITEMS = [
  "Conteúdo atualizado",
  "Linguagem simples",
  "Explicações ilustradas",
  "Material organizado",
  "Aplicações práticas",
  "Baseado em normas brasileiras",
  "Ideal para estudantes e profissionais",
  "Consulta rápida para o dia a dia",
];

export default function Differentials() {
  return (
    <section className="bg-lightgray py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-electric">
            Diferenciais
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-dark sm:text-3xl">
            Desenvolvido com base em normas técnicas e aplicações reais da indústria
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item}
              delay={i * 50}
              className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
            >
              <i className="fa-solid fa-circle-check text-electric" aria-hidden="true"></i>
              <span className="text-sm font-medium text-slate-700">{item}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
