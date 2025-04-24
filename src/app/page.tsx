import React from "react";

import HeroSection from "../../components/Hero";
import PricingPage from "../../components/PricingPage";
import FooterPage from "../../components/FooterPage";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <HeroSection />
      <PricingPage />
      <FooterPage />
    </div>
  );
}
