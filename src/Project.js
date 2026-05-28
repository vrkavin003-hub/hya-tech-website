import ProjectHero from "./components/ProjectHero";
import OurProject from "./components/OurProject";
import Industries from "./components/Industries";
import ProjectFooter from "./components/ProjectFooter";

export default function Home() {
  return (
    <div>
      <ProjectHero />
      <OurProject />
      <Industries />
      <ProjectFooter />
    </div>
  );
}
