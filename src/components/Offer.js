import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaMicrochip,
  FaCogs,
  FaTools,
  FaIndustry,
  FaCube,
} from "react-icons/fa";

import "./Offer.css";

const data = [
  {
    title: "Custom-Engineered Fixtures",
    path: "/offer/fixtures",
    icon: <FaTools />,
    badge: "500+ Designs",
    className: "shape-one",
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Intelligent Manufacturing Equipment",
    path: "/offer/equipment",
    icon: <FaMicrochip />,
    badge: "Industry 4.0",
    className: "shape-two",
    img: "./intelligentmanufacturing.jpg",
  },
  {
    title: "High-Precision Components",
    path: "/offer/components",
    icon: <FaCogs />,
    badge: "±0.01mm",
    className: "shape-three",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Essential Spares & Consumables",
    path: "/offer/spares",
    icon: <FaIndustry />,
    badge: "24/7 Support",
    className: "shape-four",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "End-to-End Solutions",
    path: "/offer/solutions",
    icon: <FaCube />,
    badge: "Turnkey",
    className: "shape-five",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
  },
];

function Offer() {
  const navigate = useNavigate();

  useEffect(() => {
    const cards = document.querySelectorAll(".offer-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="offer">
    <section className="offer-section">
      <div className="offer-header">
        <span className="offer-subtitle">complete Set of Solutions</span>

        <h1 className="offer-title">What We Offer</h1>

        <p className="offer-desc">
          Advanced manufacturing capabilities designed for high-performance
          industrial solutions and next-generation production systems.
        </p>
      </div>

      <div className="offer-grid">
        {data.map((item, index) => (
          <div
            key={index}
            className={`offer-card ${item.className}`}
            onClick={() => navigate(item.path)}
          >
            <img src={item.img} alt={item.title} />

            <div className="offer-overlay"></div>

            <div className="offer-glow"></div>

            <div className="offer-top">
              <div className="offer-icon">{item.icon}</div>

              <div className="offer-badge">{item.badge}</div>
            </div>

            <div className="offer-content">
              <h3>{item.title}</h3>

              <button className="offer-btn">
                
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
}

export default Offer;