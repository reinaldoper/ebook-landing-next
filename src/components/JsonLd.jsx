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
    
    price: PRICE_NOW_NUMERIC,
    priceCurrency: CURRENCY,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    url: CTA_LINK,
   
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "BR",
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
    
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: CURRENCY,
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "BR",
      },
      deliveryTime: {
        "@type": "ShippingDeliveryTime",
        handlingTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 0,
          unitCode: "DAY",
        },
        transitTime: {
          "@type": "QuantitativeValue",
          minValue: 0,
          maxValue: 0,
          unitCode: "DAY",
        },
      },
    },
  },
  
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: avgRating.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    reviewCount: TESTIMONIALS.length,
  },
  
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
