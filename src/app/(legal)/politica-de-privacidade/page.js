import { CONTACT_EMAIL } from "@/data/constants";

export const metadata = {
  title: "Política de Privacidade | Elétrica Industrial, Automação e Instrumentação",
  description:
    "Saiba como coletamos, usamos e protegemos os seus dados pessoais ao adquirir o e-book Elétrica Industrial, Automação e Instrumentação.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaDePrivacidade() {
  return (
    <>
      <h1>Política de Privacidade</h1>
      <p className="updated-at">Última atualização: 26 de julho de 2026.</p>

      <p>
        Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e
        protegemos os dados pessoais dos visitantes e compradores do e-book{" "}
        <strong>Elétrica Industrial, Automação e Instrumentação</strong>, em conformidade
        com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
      </p>

      <h2>1. Quais dados coletamos</h2>
      <p>Podemos coletar as seguintes categorias de dados:</p>
      <ul>
        <li>Dados de navegação (páginas visitadas, tempo de acesso, origem do tráfego, dispositivo e navegador utilizados);</li>
        <li>Dados fornecidos no momento da compra (nome, e-mail e informações de pagamento), processados diretamente pela plataforma parceira Kiwify;</li>
        <li>Dados enviados voluntariamente por meio de formulários de contato ou e-mail.</li>
      </ul>

      <h2>2. Como usamos os dados</h2>
      <p>Os dados coletados são utilizados para:</p>
      <ul>
        <li>Processar a compra e liberar o acesso ao material adquirido;</li>
        <li>Enviar comunicações relacionadas à compra, como confirmação de pagamento e suporte;</li>
        <li>Melhorar a experiência de navegação e o conteúdo oferecido no site;</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>

      <h2>3. Processamento de pagamentos</h2>
      <p>
        Os pagamentos são processados integralmente pela plataforma{" "}
        <a href="https://kiwify.com.br" target="_blank" rel="noopener noreferrer">
          Kiwify
        </a>
        . Não armazenamos dados de cartão de crédito ou informações financeiras em
        nossos próprios servidores. O tratamento desses dados é regido pela política de
        privacidade da Kiwify.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Este site pode utilizar cookies e tecnologias semelhantes para viabilizar seu
        funcionamento, lembrar preferências e analisar métricas de audiência. Você pode
        desativar os cookies diretamente nas configurações do seu navegador, o que pode
        afetar algumas funcionalidades do site.
      </p>

      <h2>5. Compartilhamento de dados</h2>
      <p>
        Não vendemos nem alugamos seus dados pessoais. Os dados podem ser
        compartilhados apenas com prestadores de serviço estritamente necessários para
        a operação do negócio (como a plataforma de pagamento) ou quando exigido por
        lei.
      </p>

      <h2>6. Seus direitos como titular de dados</h2>
      <p>Nos termos da LGPD, você tem direito a:</p>
      <ul>
        <li>Confirmar a existência de tratamento dos seus dados;</li>
        <li>Acessar, corrigir ou solicitar a exclusão dos seus dados;</li>
        <li>Revogar o consentimento fornecido a qualquer momento;</li>
        <li>Solicitar a portabilidade dos dados a outro fornecedor de serviço.</li>
      </ul>
      <p>
        Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>7. Segurança dos dados</h2>
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger os dados
        pessoais contra acessos não autorizados e situações de destruição, perda,
        alteração, comunicação ou qualquer forma de tratamento inadequado.
      </p>

      <h2>8. Alterações desta política</h2>
      <p>
        Esta política pode ser atualizada periodicamente para refletir melhorias ou
        mudanças legais. Recomendamos a revisão periódica desta página.
      </p>

      <h2>9. Contato</h2>
      <p>
        Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo
        e-mail <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
