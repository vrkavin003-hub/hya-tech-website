import React from "react";
import MapSection from "./components/MapSection";

import ContactHero from "./components/ContactHero";
import ContactFooter from "./components/ContactFooter";
import Location from "./components/Location";
import { Contact as ContactIcon } from "lucide-react"; 

export default function Contact({ setLoading })  {
  return (
    <>
    <ContactHero />
     
      <MapSection />
      <Location /> 
      <ContactFooter setLoading={setLoading} />
    </>
  );
}