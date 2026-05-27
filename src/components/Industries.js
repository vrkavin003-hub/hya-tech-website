import React, { useEffect, useRef } from "react";
import { Cpu, Rocket, HeartPulse, Zap } from "lucide-react";
import "./Industries.css";

const data = [
  {
    title: "Electronics",
    desc: "PCB assembly fixtures, EMS solutions, and semiconductor systems.",
    icon: Cpu
  },
  {
    title: "Aerospace",
    desc: "High-precision components engineered for aerospace-grade performance.",
    icon: Rocket
  },
  {
    title: "Medical",
    desc: "Ultra-precision medical components meeting global certifications.",
    icon: HeartPulse
  },
  {
    title: "Automotive",
    desc: "Advanced manufacturing and automation solutions.",
    icon: Zap
  }
];

export default function Industries() {
  const cardsRef = useRef([]);

  // SCROLL REVEAL
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.1}s`;
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // TILT EFFECT
  const handleMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 25;
    const rotateY = (x - rect.width / 2) / 25;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  };

  const resetTilt = (card) => {
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section className="mv-section">
      <div className="mv-header">
        <span className="mv-small">Industries</span>
        <h2 className="mv-title">Industries We Serve</h2>
        <p className="mv-desc">
          Delivering precision manufacturing solutions across diverse sectors
        </p>
      </div>

      <div className="mv-grid">
        {data.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="mv-card"
              onMouseMove={(e) => handleMove(e, e.currentTarget)}
              onMouseLeave={(e) => resetTilt(e.currentTarget)}
            >
              <div className="mv-icon">
                <Icon />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}