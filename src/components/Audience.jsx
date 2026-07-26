import Reveal from "./Reveal";

const AUDIENCE = [
  ["fa-graduation-cap", "Estudantes de Engenharia"],
  ["fa-wrench", "Técnicos em Eletrotécnica"],
  ["fa-robot", "Técnicos em Automação"],
  ["fa-bolt", "Eletricistas Industriais"],
  ["fa-gauge-high", "Instrumentistas"],
  ["fa-microchip", "Programadores de CLP"],
  ["fa-screwdriver-wrench", "Profissionais de Manutenção"],
  ["fa-user-tie", "Engenheiros"],
  ["fa-door-open", "Quem deseja ingressar na indústria"],
];

export default function Audience() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-electric">
            Público-alvo
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-dark sm:text-3xl">
            Para quem é este material?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {AUDIENCE.map(([icon, label], i) => (
            <Reveal
              key={label}
              delay={i * 40}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-colors hover:border-electric/40 hover:bg-electric/5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dark text-orange">
                <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
              </span>
              <span className="text-sm font-medium text-slate-700">{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
