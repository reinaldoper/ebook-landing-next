import CtaButton from "./CtaButton";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-dark/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2 font-label text-sm font-bold uppercase tracking-wider text-white">
          <i className="fa-solid fa-bolt text-orange" aria-hidden="true"></i>
          <span>Elétrica Industrial</span>
        </div>
        <CtaButton size="md" className="hidden sm:inline-flex !px-4 !py-2.5 !text-xs">
          Quero o E-book
        </CtaButton>
      </div>
    </header>
  );
}
