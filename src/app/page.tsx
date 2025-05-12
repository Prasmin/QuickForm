import React from "react";

import HeroSection from "../../components/Hero";
import PricingPage from "../../components/PricingPage";
import FooterPage from "../../components/FooterPage";
import Header from "../../components/Header";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div>
      <Header />
      <HeroSection />
      <PricingPage userId={user?.id || ""} />
      <FooterPage />
    </div>
  );
}
