import { CONTACT_EMAIL } from "@/data/constants";

export const metadata = {
  title: "Termos de Uso | Elétrica Industrial, Automação e Instrumentação",
  description:
    "Termos e condições de uso e compra do e-book Elétrica Industrial, Automação e Instrumentação.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermosDeUso() {
  return (
    <>
      <h1>Termos de Uso</h1>
      <p className="updated-at">Última atualização: 26 de julho de 2026.</p>

      <p>
        Estes Termos de Uso regulam a aquisição e utilização do e-book{" "}
        <strong>Elétrica Industrial, Automação e Instrumentação</strong>. Ao efetuar a
        compra, você concorda integralmente com as condições descritas abaixo.
      </p>

      <h2>1. Sobre o produto</h2>
      <p>
        O material comercializado é um e-book digital com finalidade educacional,
        entregue exclusivamente em formato eletrônico, sem envio de versão física. O
        acesso é liberado imediatamente após a confirmação do pagamento.
      </p>

      <h2>2. Finalidade educacional</h2>
      <p>
        O conteúdo tem caráter exclusivamente educacional e informativo. Ele não
        substitui treinamentos obrigatórios, certificações profissionais, normas
        técnicas vigentes (como NR-10 e NBR 5410) ou o acompanhamento de profissionais
        habilitados para execução de serviços em instalações elétricas e industriais.
      </p>

      <h2>3. Compra e pagamento</h2>
      <p>
        As compras são processadas pela plataforma parceira Kiwify, responsável pelo
        processamento de pagamentos, emissão de recibos e suporte referente a questões
        financeiras da transação.
      </p>

      <h2>4. Garantia e reembolso</h2>
      <p>
        Conforme previsto no Código de Defesa do Consumidor, você tem até 7 (sete) dias
        corridos, a contar da data da compra, para solicitar o reembolso integral, caso
        o material não atenda às suas expectativas. A solicitação deve ser feita
        diretamente pela plataforma Kiwify ou pelo e-mail{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>5. Licença de uso</h2>
      <p>
        Ao adquirir o e-book, você recebe uma licença pessoal, intransferível e não
        exclusiva de uso do conteúdo. É vedado:
      </p>
      <ul>
        <li>Revender, redistribuir ou compartilhar o material com terceiros;</li>
        <li>Publicar o conteúdo, total ou parcialmente, em sites, redes sociais ou plataformas de compartilhamento;</li>
        <li>Utilizar o material para fins comerciais sem autorização prévia por escrito.</li>
      </ul>
      <p>
        O descumprimento destas condições pode configurar violação de direitos
        autorais, sujeita às penalidades previstas na Lei nº 9.610/1998.
      </p>

      <h2>6. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo do e-book, incluindo textos, ilustrações e diagramas, é de
        propriedade do autor do material e está protegido pela legislação de direitos
        autorais aplicável.
      </p>

      <h2>7. Limitação de responsabilidade</h2>
      <p>
        O uso das informações contidas no e-book em atividades práticas é de inteira
        responsabilidade do leitor. Recomenda-se sempre a observância das normas
        técnicas vigentes e o acompanhamento de profissionais qualificados em
        atividades que envolvam risco elétrico.
      </p>

      <h2>8. Alterações destes termos</h2>
      <p>
        Estes Termos de Uso podem ser atualizados periodicamente. A versão vigente é
        sempre a publicada nesta página.
      </p>

      <h2>9. Contato</h2>
      <p>
        Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
