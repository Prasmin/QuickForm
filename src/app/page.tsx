import React from "react";

import HeroSection from "../../components/Hero";
import PricingPage from "../../components/PricingPage";
import FooterPage from "../../components/FooterPage";

export default function Home() {
  return (
    <div className=" ">
      <HeroSection />
      <PricingPage />
      <FooterPage />
    </div>
  );
}
