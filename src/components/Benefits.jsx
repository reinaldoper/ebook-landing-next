import Reveal from "./Reveal";

const BENEFITS = [
  ["fa-bolt", "Domine Elétrica Industrial"],
  ["fa-shield-halved", "Entenda a NR-10"],
  ["fa-plug-circle-check", "Aprenda NBR 5410"],
  ["fa-gauge-high", "Conheça Instrumentação Industrial"],
  ["fa-robot", "Aprenda Automação Industrial"],
  ["fa-microchip", "Entenda CLPs"],
  ["fa-sliders", "Controle PID"],
  ["fa-network-wired", "Redes Industriais"],
  ["fa-display", "SCADA"],
  ["fa-diagram-project", "Profinet"],
  ["fa-code-branch", "Modbus"],
  ["fa-ethernet", "Ethernet/IP"],
  ["fa-drafting-compass", "Projetos Elétricos"],
  ["fa-leaf", "Eficiência Energética"],
  ["fa-hard-hat", "Segurança Industrial"],
  ["fa-industry", "Indústria 4.0"],
  ["fa-satellite-dish", "IIoT"],
  ["fa-brain", "IA aplicada à Indústria"],
];

export default function Benefits() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-electric">
            Benefícios
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-dark sm:text-3xl">
            Tudo o que você passa a dominar
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {BENEFITS.map(([icon, label], i) => (
            <Reveal
              key={label}
              delay={(i % 6) * 50}
              className="flex flex-col items-center gap-3 rounded-xl border border-slate-100 bg-lightgray p-5 text-center transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-electric/10 text-electric">
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
