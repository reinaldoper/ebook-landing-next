import { CTA_LINK } from "@/data/constants";

export default function CtaButton({ children, className = "", size = "md" }) {
  const sizes = {
    md: "px-6 py-4 text-sm md:text-base",
    lg: "px-8 py-5 text-base md:text-lg",
  };

  return (
    <a
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-cta inline-flex items-center justify-center gap-2 rounded-xl bg-orange font-label font-bold uppercase tracking-wide text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${sizes[size]} ${className}`}
    >
      {children}
      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
    </a>
  );
}
