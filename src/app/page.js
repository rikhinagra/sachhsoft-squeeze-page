"use client";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LeadGenerationForm from "../components/LeadGenerationForm";
import ClientLogos from "../components/ClientLogos";
import CTAAndFooter from "../components/CTAAndFooter";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LeadGenerationForm />
      <ClientLogos />
      <CTAAndFooter />
    </main>
  );
}
