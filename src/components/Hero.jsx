import CtaButton from "./CtaButton";
import CircuitBackground from "./CircuitBackground";
import EbookMockup from "./EbookMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark pb-16 pt-32 text-white sm:pt-40">
      <CircuitBackground className="opacity-60" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-electric-light/40 bg-electric/10 px-4 py-1.5 font-label text-xs font-semibold uppercase tracking-wider text-electric-light">
            <i className="fa-solid fa-industry" aria-hidden="true"></i>
            Material técnico completo
          </span>

          <h1 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Domine a <span className="text-electric-light">Elétrica Industrial</span> e a{" "}
            <span className="text-orange">Automação</span> que Movem as Grandes Indústrias
          </h1>

          <p className="mt-5 max-w-xl text-base text-slate-300 sm:text-lg">
            Aprenda de forma prática os principais conceitos de Elétrica Industrial,
            Instrumentação, Automação, CLPs, Redes Industriais, NR-10, NBR 5410 e
            Indústria 4.0 em um único material completo.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 font-label text-xs font-semibold uppercase tracking-wide text-slate-200 ring-1 ring-white/10">
            <i className="fa-solid fa-book-open text-orange" aria-hidden="true"></i>
            Mais de 200 páginas de conteúdo técnico ilustrado
          </div>

          <div className="mt-8">
            <CtaButton size="lg">Quero me tornar um profissional mais qualificado</CtaButton>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-electric-light" aria-hidden="true"></i>
              Download imediato
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-electric-light" aria-hidden="true"></i>
              Produto 100% digital
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-electric-light" aria-hidden="true"></i>
              Compra segura
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-check text-electric-light" aria-hidden="true"></i>
              Garantia de 7 dias
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-5 text-slate-400">
            <span className="font-label text-xs uppercase tracking-wide">Pagamento:</span>
            <i className="fa-brands fa-pix text-xl" aria-hidden="true" title="PIX"></i>
            <i className="fa-solid fa-credit-card text-xl" aria-hidden="true" title="Cartão"></i>
            <i className="fa-solid fa-barcode text-xl" aria-hidden="true" title="Boleto"></i>
          </div>
        </div>

        <div className="relative">
          <EbookMockup />
        </div>
      </div>
    </section>
  );
}
