import Reveal from "./Reveal";

export default function Guarantee() {
  return (
    <section className="bg-lightgray py-16">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="flex flex-col items-center gap-5 rounded-2xl border border-electric/20 bg-white p-8 text-center shadow-sm sm:flex-row sm:text-left">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-electric/10 text-3xl text-electric">
            <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
          </span>
          <div>
            <h3 className="font-display text-lg font-bold text-dark">
              Garantia incondicional de 7 dias
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Sua compra é protegida pela Kiwify. Caso o material não atenda às suas
              expectativas, basta solicitar o reembolso dentro do prazo de garantia.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
