import React from "react";
import CareerHero from "./components/CareerHero";
import ContactFooter from "./components/ContactFooter";
import { Career as Carrer } from "lucide-react";


export default function Career({ setLoading })  {
  return (
    <>
    <CareerHero/>
    <ContactFooter setloading={setLoading}/>
    </> 
  );
}
