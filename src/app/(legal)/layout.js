import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-white pb-20 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl px-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-electric hover:text-electric-light"
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
            Voltar para a home
          </Link>

          <article className="prose-legal">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}
