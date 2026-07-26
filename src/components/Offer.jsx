import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import { PRICE_FROM, PRICE_NOW } from "@/data/constants";

export default function Offer() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-dark to-electric py-20 text-white">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <span className="font-label text-xs font-bold uppercase tracking-widest text-orange">
            Oferta por tempo limitado
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
            Garanta seu acesso com condição especial
          </h2>

          <div className="mt-8 rounded-3xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-white/15">
            <p className="text-lg text-slate-300 line-through">De R$ {PRICE_FROM}</p>
            <p className="mt-1 font-display text-5xl font-extrabold sm:text-6xl">
              R$ {PRICE_NOW}
            </p>
            <p className="mt-2 font-label text-sm uppercase tracking-wide text-slate-200">
              Pagamento único · Sem mensalidades · Acesso imediato
            </p>

            <div className="mt-8">
              <CtaButton size="lg">Quero garantir meu e-book</CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
