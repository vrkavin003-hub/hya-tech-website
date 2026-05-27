import { useEffect } from "react";
import "./AboutHero.css";

export default function AboutHero() {

  useEffect(() => {
    const container = document.querySelector(".particles");

    // 🔥 PARTICLES
    for (let i = 0; i < 50; i++) {
      const dot = document.createElement("span");

      const size = Math.random() * 4 + 2;
      dot.style.width = size + "px";
      dot.style.height = size + "px";

      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = Math.random() * 100 + "%";

      dot.style.animationDuration = (6 + Math.random() * 10) + "s";
      dot.style.animationDelay = Math.random() * 5 + "s";

      container.appendChild(dot);
    }

    // 🎯 MOUSE PARALLAX
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      const content = document.querySelector(".about-content");
      const waves = document.querySelectorAll(".wave");

      if (content) {
        content.style.transform = `translate(${x}px, ${y}px)`;
      }

      waves.forEach((wave, i) => {
        wave.style.transform = `translate(${x * (i + 1)}px, ${y * (i + 1)}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };

  }, []);

  return (
    <section className="about-hero">

      {/* LIGHT BEAM */}
      <div className="light-beam"></div>

      {/* WAVES */}
      <div className="wave"></div>
      <div className="wave"></div>

      {/* PARTICLES */}
      <div className="particles"></div>

      {/* OVERLAY */}
      <div className="about-overlay"></div>

      {/* CONTENT */}
      <div className="about-content">

        <p className="about-small">ABOUT HYA TECH</p>

        <h1 className="about-title">
          Born to Build,<br />
          <span>Born to Go Global</span>
        </h1>

        <p className="about-desc">
          Building world-class engineering excellence in precision manufacturing
          for the electronics industry.
        </p>

      </div>

    </section>
  );
}