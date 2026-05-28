import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaCheck,
  FaTimes,
  FaArrowUp,
} from "react-icons/fa";

import "./OfferDetail.css";

const details = {
  fixtures: {
    title: "Custom-Engineered Fixtures",
    tag: "Custom Engineering",
    badge: "500+ Designs",
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1400&auto=format&fit=crop",
    desc: "Our custom-engineered fixtures are designed to meet your exact manufacturing specifications with precision, durability, and advanced CAD/CAM integration.",
    features: [
      "Precision Design",
      "Quick Turnaround",
      "Industry Certified",
    ],
  },

  equipment: {
    title: "Intelligent Equipment",
    tag: "Smart Manufacturing",
    badge: "Industry 4.0",
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1400&auto=format&fit=crop",
    desc: "Advanced industrial equipment integrated with automation, sensors, and real-time monitoring systems.",
    features: [
      "IoT Integration",
      "Automation Ready",
      "Data Analytics",
    ],
  },

  components: {
    title: "High-Precision Components",
    tag: "Precision Engineering",
    badge: "±0.01mm",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop",
    desc: "State-of-the-art machining for ultra-precise manufacturing across aerospace and industrial applications.",
    features: [
      "5-Axis CNC",
      "Wire EDM",
      "Quality Assured",
    ],
  },

  spares: {
    title: "Essential Spares & Consumables",
    tag: "Support Services",
    badge: "24/7 Support",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1400&auto=format&fit=crop",
    desc: "Reliable inventory and fast dispatch systems to keep your operations running without downtime.",
    features: [
      "Quick Dispatch",
      "OEM Quality",
      "Inventory Management",
    ],
  },

  solutions: {
    title: "End-to-End Solutions",
    tag: "Complete Solutions",
    badge: "Turnkey",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1400&auto=format&fit=crop",
    desc: "Comprehensive manufacturing solutions from concept development to final production and support.",
    features: [
      "Design & Development",
      "Prototype to Production",
      "Ongoing Partnership",
    ],
  },
};

function OfferDetail() {
  const { type } = useParams();
  const navigate = useNavigate();

  const item = details[type];

  return (
    <section className="detail-page">
      <div className="detail-box">

        <button
          className="close-btn"
          onClick={() => navigate(-1)}
        >
          <FaTimes />
        </button>

        <div className="detail-grid">

          <div className="detail-image-wrap">
            <img src={item.img} alt="" />

            <div className="floating-badge">
              {item.badge}
            </div>
          </div>

          <div className="detail-content">

            <span className="detail-tag">
              {item.tag}
            </span>

            <h1>{item.title}</h1>

            <p>{item.desc}</p>

            <div className="detail-features">
              {item.features.map((feature, i) => (
                <div key={i} className="feature-card">
                  <div className="feature-icon">
                    <FaCheck />
                  </div>

                  <span>{feature}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <button className="scroll-btn">
        <FaArrowUp />
      </button>
    </section>
  );
}

export default OfferDetail;