import React from "react";
import Hero from "./components/Hero";
import Service from "./components/Services";
import Timeline from "./components/Timeline";
import Offer from "./components/Offer";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Offer/>
      <Timeline/>
      <Service/>
      <FooterSection />
      
    </>
  );
}