import { useEffect } from "react";
import "./ContactHero.css";

export default function ContactHero() {

  useEffect(() => {
    const container = document.querySelector(".particles");

    // clear old particles
    container.innerHTML = "";

    for (let i = 0; i < 40; i++) {
      const dot = document.createElement("span");

      const size = Math.random() * 3 + 2;
      dot.style.width = size + "px";
      dot.style.height = size + "px";

      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = Math.random() * 100 + "%";

      dot.style.animationDuration = (8 + Math.random() * 8) + "s";
      dot.style.animationDelay = Math.random() * 5 + "s";

      container.appendChild(dot);
    }

    // 🎯 PARALLAX SYSTEM (3 LAYERS)
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);

      // Layer 1 (background aurora - slow)
      const bg = document.querySelector(".aurora-bg");
      if (bg) {
        bg.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.1)`;
      }

      // Layer 2 (particles - medium)
      const particles = document.querySelector(".particles");
      if (particles) {
        particles.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
      }

      // Layer 3 (content - subtle foreground movement)
      const content = document.querySelector(".about-content");
      if (content) {
        content.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouse);

    return () => window.removeEventListener("mousemove", handleMouse);

  }, []);

  return (
    <section className="about-hero">

      {/* LAYER 1: AURORA BACKGROUND */}
      <div className="aurora-bg"></div>

      {/* LAYER 2: PARTICLES */}
      <div className="particles"></div>

      {/* OVERLAY */}
      <div className="about-overlay"></div>

      {/* LAYER 3: CONTENT */}
      <div className="about-content">

        <p className="about-small">Get In Touch</p>

        <h1 className="about-title">
          <span>Contact Us</span>
        </h1>

        <p className="about-desc">
          Have questions or want to learn more about our services? Reach out to us today!
        </p>

      </div>

    </section>
  );
}