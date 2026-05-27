import React from "react";
import ServiceHero from "./components/ServiceHero";
import ServiceFooter from "./components/ServiceFooter";
import Offering from "./components/Offering";
import CncCapabilities from "./components/CncCapabilities";
import Capabilities from "./components/Capabilities";

export default function Service({ setLoading })  {
  return (
    <>
      <ServiceHero />
      <Offering />
      <CncCapabilities />
      <Capabilities/>
     

      <ServiceFooter setLoading={setLoading} />
    </>
  );
}