import { CONTACT_EMAIL } from "@/data/constants";

export const metadata = {
  title: "Contato | Elétrica Industrial, Automação e Instrumentação",
  description:
    "Fale com a nossa equipe de suporte sobre o e-book Elétrica Industrial, Automação e Instrumentação.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <>
      <h1>Contato</h1>
      <p>
        Tem alguma dúvida sobre o e-book, o pagamento ou o acesso ao material? Fale com
        a gente por um dos canais abaixo.
      </p>

      <h2>E-mail</h2>
      <p>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <h2>Dúvidas sobre pagamento e reembolso</h2>
      <p>
        Como o pagamento é processado pela plataforma Kiwify, questões relacionadas a
        cobrança, nota fiscal ou solicitação de reembolso também podem ser tratadas
        diretamente pelo{" "}
        <a href="https://ajuda.kiwify.com.br" target="_blank" rel="noopener noreferrer">
          canal de suporte da Kiwify
        </a>
        .
      </p>

      <h2>Tempo de resposta</h2>
      <p>
        Nossa equipe costuma responder às mensagens em até 2 dias úteis.
      </p>
    </>
  );
}
