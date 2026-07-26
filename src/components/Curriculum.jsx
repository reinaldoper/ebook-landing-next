import Reveal from "./Reveal";

const MODULES = [
  {
    title: "Fundamentos da Elétrica Industrial",
    items: ["Condutores e Isolantes", "Projetos Elétricos", "Documentação Técnica"],
    icon: "fa-bolt",
  },
  {
    title: "Segurança em Instalações",
    items: ["NR-10", "NBR 5410", "Boas Práticas Industriais"],
    icon: "fa-hard-hat",
  },
  {
    title: "Instrumentação Industrial",
    items: ["Sensores Industriais", "Temperatura e Pressão", "Vazão e Nível"],
    icon: "fa-gauge-high",
  },
  {
    title: "Automação Industrial",
    items: ["CLPs", "Controle PID", "SCADA"],
    icon: "fa-robot",
  },
  {
    title: "Redes Industriais",
    items: ["Profibus e Profinet", "Modbus", "Ethernet/IP"],
    icon: "fa-network-wired",
  },
  {
    title: "Indústria 4.0",
    items: ["IoT Industrial", "Eficiência Energética", "Aplicações práticas"],
    icon: "fa-industry",
  },
];

export default function Curriculum() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 text-white">
      <div className="blueprint-grid-dark pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-electric-light">
            Conteúdo programático
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
            O que você vai aprender
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod, i) => (
            <Reveal
              key={mod.title}
              delay={i * 60}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange/15 text-orange">
                <i className={`fa-solid ${mod.icon}`} aria-hidden="true"></i>
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{mod.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                {mod.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-electric-light text-xs" aria-hidden="true"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
