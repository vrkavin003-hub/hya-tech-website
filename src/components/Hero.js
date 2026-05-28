import React, { useEffect } from "react";
import "./Hero.css";

export default function Hero() {

  useEffect(() => {

    /* ===== COUNTER ===== */
    const counters = document.querySelectorAll(".counter");

    const runCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      let current = 0;

      const duration = 1200;
      const increment = target / (duration / 16);

      const update = () => {
        current += increment;

        if (current < target) {
          counter.innerText = Math.floor(current);
          requestAnimationFrame(update);
        } else {
          counter.innerText =
            target === 98 ? target + "%" : target + "+";
        }
      };

      update();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counters.forEach(c => observer.observe(c));

    /* ===== MOUSE PARALLAX ===== */
    const hero = document.querySelector(".hero");
    const content = document.querySelector(".hero-content");

    const handleMove = (e) => {

      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;

      hero.style.setProperty("--move-x", `${x}px`);
      hero.style.setProperty("--move-y", `${y}px`);

      content.style.transform =
        `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMove);
    };

  }, []);

  /* ===== SCROLL ===== */
  const scrollToOffer = () => {
    const section = document.getElementById("offer");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="hero">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="video-bg"
      >
        <source src="/factory.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="overlay"></div>

      {/* PARTICLES */}
      <div className="particles">

        {[...Array(20)].map((_, i) => (
          <span key={i}></span>
        ))}

      </div>

      {/* CONTENT */}
      <div className="hero-content">

        <h1 className="hero-title">
          Engineering <span className="highlight">Excellence</span>
        </h1>

        <h2 className="hero-subhead">
          Building Tomorrow's Solutions
        </h2>

        <p className="hero-desc">
          From custom-engineered fixtures to intelligent manufacturing equipment,
          we deliver precision solutions that power industries <span>worldwide</span>
        </p>

        <button
          className="hero-btn"
          onClick={scrollToOffer}
        >
          Explore Solutions
        </button>

        {/* STATS */}
        <div className="hero-stats">

          <div className="stat">
            <h2 className="counter" data-target="7">0</h2>
            <p>Years Experience</p>
          </div>

          <div className="divider"></div>

          <div className="stat">
            <h2 className="counter" data-target="500">0</h2>
            <p>Projects Delivered</p>
          </div>

          <div className="divider"></div>

          <div className="stat">
            <h2 className="counter" data-target="98">0</h2>
            <p>Client Satisfaction</p>
          </div>

        </div>

      </div>

    </section>
  );
}
