import AboutHero from "./components/AboutHero";
import AboutSection from "./components/AboutSection";
import MissionVision from "./components/MissionVision";
import Portfolio from "./components/Portfolio";
import TimelineSection from "./components/TimelineSection";
import OurPeople from "./components/OurPeople";
import AboutFooter from "./components/AboutFooter";

export default function AboutPage({ setLoading })  {

  return (
    <>
      <AboutHero />
      <AboutSection />
      <MissionVision />
      <Portfolio />
      <TimelineSection />
      <OurPeople />

      <AboutFooter setLoading={setLoading} />
    </>
  );
}