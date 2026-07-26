import Reveal from "./Reveal";
import TESTIMONIALS from "@/data/testimonials";

function Stars() {
  return (
    <div className="text-orange" aria-hidden="true">
      {"★★★★★"}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-electric">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-dark sm:text-3xl">
            Quem já estudou pelo material
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 60}
              className="flex flex-col rounded-2xl border border-slate-100 bg-lightgray p-6 shadow-sm"
            >
              <Stars />
              <p className="mt-3 flex-1 text-sm text-slate-700">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/10 text-electric">
                  <i className="fa-solid fa-user" aria-hidden="true"></i>
                </span>
                <div>
                  <p className="text-sm font-semibold text-dark">{t.name}</p>
                  <p className="text-xs text-slate-500">
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
