import TESTIMONIALS from "@/data/testimonials";
import FAQ_DATA from "@/data/faq";
import { CTA_LINK, PRICE_NOW_NUMERIC, CURRENCY, SITE_URL } from "@/data/constants";

const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const avgRating =
  TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length;

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Elétrica Industrial, Automação e Instrumentação",
  description:
    "E-book completo com mais de 200 páginas sobre Elétrica Industrial, Instrumentação, Automação, CLPs, Redes Industriais, NR-10, NBR 5410 e Indústria 4.0.",
  image: OG_IMAGE,
  brand: {
    "@type": "Brand",
    name: "Elétrica Industrial, Automação e Instrumentação",
  },
  sku: "EBOOK-ELETRICA-INDUSTRIAL-001",
  category: "E-book técnico / Educação profissional",
  offers: {
    "@type": "Offer",
    // "price" (or priceSpecification.price) is required by Google — this
    // resolves the "critical" Merchant/Product rich-result error.
    price: PRICE_NOW_NUMERIC,
    priceCurrency: CURRENCY,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    url: CTA_LINK,
  },
  // "aggregateRating" (fixes the non-critical warning). Derived directly
  // from the testimonials actually shown on the page — keep in sync with
  // src/data/testimonials.js.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    reviewCount: TESTIMONIALS.length,
  },
  // "review" (fixes the non-critical warning). Mirrors the visible
  // testimonials section 1:1 — Google requires review markup to match
  // content that is actually visible to users on the page.
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: t.date,
    reviewBody: t.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: "5",
      worstRating: "1",
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
