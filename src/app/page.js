import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Benefits from "@/components/Benefits";
import Curriculum from "@/components/Curriculum";
import Differentials from "@/components/Differentials";
import Audience from "@/components/Audience";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Offer from "@/components/Offer";
import Guarantee from "@/components/Guarantee";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Benefits />
        <Curriculum />
        <Differentials />
        <Audience />
        <Comparison />
        <Testimonials />
        <Offer />
        <Guarantee />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
