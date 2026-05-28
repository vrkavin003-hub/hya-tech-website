import React, { useEffect, useRef } from "react";
import "./CncCapabilities.css";

const data = [
  {
    title: "5-Axis CNC Machining",
    desc: "Complex aerospace and medical components with precision.",
    img: "./offering1.jpg",
    size: "big",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2L15 8H9L12 2Z M4 12L10 15V9L4 12Z M20 12L14 9V15L20 12Z M12 22L9 16H15L12 22Z"/>
      </svg>
    )
  },
  {
    title: "CNC Turning",
    desc: "High-precision cylindrical parts",
    img: "./offering2.jpg",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7"/>
      </svg>
    )
  },
  {
    title: "Wire EDM",
    desc: "Micron-level precision cutting",
    img: "./offering3.jpg",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M13 2L3 14H11L9 22L21 8H13Z"/>
      </svg>
    )
  },
  {
    title: "Surface Grinding",
    desc: "Mirror-finish surfaces",
    img: "./offering4.jpg",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16"/>
      </svg>
    )
  },
  {
    title: "VMC Milling",
    desc: "High-volume production machining",
    img: "./offering5.jpg",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 6H20V10H4Z M4 14H20V18H4Z"/>
      </svg>
    )
  },
  {
    title: "CMM Inspection & Quality Assurance",
    desc: "Precision measurement systems",
    img: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=1200",
    size: "full",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 17L9 11L13 15L21 7"/>
      </svg>
    )
  }
];

export default function CncCapabilities() {
  const cardsRef = useRef([]);

  useEffect(() => {
    let raf;

    const handleMove = (card, e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    };

    cardsRef.current.forEach(card => {
      if (!card) return;

      const move = (e) => handleMove(card, e);

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", () => {
        card.style.removeProperty("--x");
        card.style.removeProperty("--y");
      });
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="svc-section">
      <div className="svc-header">
        <span className="svc-tag">CNC CAPABILITIES</span>
        <h1>Our <span>Machining</span> Expertise</h1>
        <p>Advanced CNC machining with precision engineering</p>
      </div>

      <div className="svc-grid">
        {data.map((item, i) => (
          <div
            key={i}
            ref={el => (cardsRef.current[i] = el)}
            className={`svc-card ${item.size || ""}`}
          >
            <div className="svc-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="svc-overlay"></div>

            <div className="svc-indicator">
              <span className="dot"></span>
            </div>

            <div className="svc-icon">{item.icon}</div>

            <div className="svc-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}