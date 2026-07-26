export default function EbookMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px] [perspective:1600px]">
      <div className="relative h-[360px] sm:h-[416px] [transform-style:preserve-3d] [transform:rotateY(-22deg)_rotateX(4deg)]">
        {/* Spine */}
        <div
          className="absolute left-0 top-0 h-full w-6 rounded-l-md bg-dark-2"
          style={{ transform: "rotateY(90deg) translateZ(-12px)", transformOrigin: "right" }}
        />
        {/* Back pages edge */}
        <div
          className="absolute inset-y-1 right-[-8px] w-3 rounded-r-sm bg-slate-200"
          style={{ transform: "translateZ(-6px)" }}
        />
        {/* Cover */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-r-md rounded-l-sm bg-gradient-to-br from-dark via-dark-2 to-electric p-6 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.6)] ring-1 ring-white/10">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative">
            <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-orange">
              E-book Técnico
            </span>
            <h3 className="mt-3 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
              Elétrica Industrial, Automação e Instrumentação
            </h3>
          </div>
          <div className="relative flex items-center gap-3 text-white/80">
            <i className="fa-solid fa-diagram-project text-orange" aria-hidden="true"></i>
            <i className="fa-solid fa-microchip" aria-hidden="true"></i>
            <i className="fa-solid fa-bolt" aria-hidden="true"></i>
            <span className="ml-auto font-label text-[11px] font-semibold uppercase tracking-wide">
              +200 págs.
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 h-8 w-[70%] rounded-full bg-black/30 blur-xl" />
    </div>
  );
}
