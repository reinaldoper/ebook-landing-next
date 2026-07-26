import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import CircuitBackground from "./CircuitBackground";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 text-white">
      <CircuitBackground className="opacity-40" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
            O conhecimento certo pode abrir novas oportunidades na indústria
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-slate-300">
            Invista menos do que o valor de uma refeição e tenha acesso a um material
            completo que reúne Elétrica Industrial, Automação e Instrumentação em um
            único e-book. Aprenda no seu ritmo, revise quando precisar e esteja
            preparado para os desafios da indústria moderna.
          </p>

          <div className="mt-8">
            <CtaButton size="lg">Quero meu e-book agora</CtaButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <i className="fa-brands fa-pix" aria-hidden="true"></i> PIX
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-credit-card" aria-hidden="true"></i> Cartão
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-barcode" aria-hidden="true"></i> Boleto
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-lock" aria-hidden="true"></i> Compra segura
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-bolt" aria-hidden="true"></i> Liberação imediata
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
