import { Header, Hero, Pains, HowItWorks, Features, AudienceAndDifferentials, Pricing, Faq, FinalCta, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Pains />
        <HowItWorks />
        <Features />
        <AudienceAndDifferentials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
