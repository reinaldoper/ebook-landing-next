export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-4 border-b border-white/10 pb-6 text-sm sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 font-label font-semibold text-white">
            <i className="fa-solid fa-bolt text-orange" aria-hidden="true"></i>
            Elétrica Industrial, Automação e Instrumentação
          </div>
          <nav className="flex gap-5">
            <a href="/politica-de-privacidade" className="hover:text-white">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="hover:text-white">
              Termos de Uso
            </a>
            <a href="/contato" className="hover:text-white">
              Contato
            </a>
          </nav>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-slate-500">
          <strong className="text-slate-400">Aviso legal:</strong> Este material possui
          finalidade educacional e foi desenvolvido para apoiar estudantes e
          profissionais da área industrial. As informações apresentadas não substituem
          treinamentos obrigatórios, certificações profissionais ou o cumprimento das
          normas técnicas e regulamentadoras aplicáveis.
        </p>

        <p className="mt-4 text-xs text-slate-600">
          © <span suppressHydrationWarning>{year}</span> Elétrica Industrial, Automação e
          Instrumentação. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
