import React from "react";
import MapSection from "./components/MapSection";
import ApplyForm from "./components/ApplyForm";
import ContactHero from "./components/ContactHero";
import ContactFooter from "./components/ContactFooter";
import Location from "./components/Location";
import { Contact as ContactIcon } from "lucide-react"; 

export default function Contact({ setLoading })  {
  return (
    <>
    <ContactHero />
      <ApplyForm />
      <MapSection />
      <Location /> 
      <ContactFooter setLoading={setLoading} />
    </>
  );
}