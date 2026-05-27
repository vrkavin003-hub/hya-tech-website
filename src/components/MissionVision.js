import React, { useEffect } from "react";
import "./MissionVision.css";

export default function MissionVision() {

  const data = [
    {
      title: "Our Mission",
      desc: "To bring advanced technology to India, build local capabilities on par with global standards, generate meaningful employment, foster a sustainable and positive environment, set benchmarks in the EMS industry, and contribute significantly to the nation's development.",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <path d="M12 12 L20 4" />
          <path d="M17 4h3v3" />
        </svg>
      )
    },
    {
      title: "Our Vision",
      desc: "To become the global benchmark for high-precision manufacturing, continually driving innovation in intelligent machining to serve a diverse range of industries and create a legacy of excellence for generations to come.",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      )
    },
    {
      title: "Our Values",
      desc: "We are a dynamic team distinguished by deep expertise and practical know-how. Guided by integrity and transparency, we maintain an open and collaborative approach. Our steadfast commitment to excellence serves as the foundation for delivering successful outcomes.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M6 3h12l3 6-9 12L3 9z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".mv-card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${i * 0.15}s`;
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mv-section">

      <div className="mv-bg"></div>

      <div className="mv-header">
        <span className="mv-small">OUR FOUNDATION</span>
        <h2 className="mv-title">Mission, Vision & Values</h2>
        <p className="mv-desc">
          The core principles powering our innovation and growth.
        </p>
      </div>

      <div className="mv-center">
        <div className="mv-track">
          {data.map((item, i) => (
            <div className="mv-card" key={i}>
              <div className="mv-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}