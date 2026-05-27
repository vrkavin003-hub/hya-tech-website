import React, { useState } from "react";
import "./Offering.css";

/* 🔥 SVG ICONS */
const icons = {
  custom: (
    <svg viewBox="0 0 24 24"><path d="M21 7l-9 9-5-5" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  ),
  manufacturing: (
    <svg viewBox="0 0 24 24"><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  ),
  precision: (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
  ),
  spares: (
    <svg viewBox="0 0 24 24"><path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  solution: (
    <svg viewBox="0 0 24 24"><path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2"/></svg>
  ),
};

const data = {
  "Custom Fixtures": {
    type: "double",
    title: "Custom-Engineered Fixtures",
    highlight: "Fixtures",
    desc: "Our custom-engineered fixtures are tailored to meet specific manufacturing requirements. We design and build fixtures that enhance productivity, ensure consistent quality, and optimize your production processes.",
    pill: "Custom Engineering",
    icon: icons.custom,
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400"
    ],
    badge: "Bespoke Designs",
    points: [
      { title: "Welding Fixtures", desc: "Precision jigs for consistent weld positioning and quality" },
      { title: "Assembly Fixtures", desc: "Modular fixtures for efficient component assembly" },
      { title: "Inspection Gauges", desc: "Go/No-Go gauges and CMM fixtures for quality control" },
    ],
  },

  "Manufacturing Equipment": {
    type: "single",
    title: "Intelligent Manufacturing Equipment",
    highlight: "Equipment",
    desc: "Smart manufacturing equipment designed for Industry 4.0. Our solutions integrate sensors, automation, and real-time monitoring to optimize production and reduce downtime.",
    pill: "Smart Systems",
    icon: icons.manufacturing,
    image: "./intelligentmanufacturing.jpg",
    badge: "Smart Systems",
    points: [
      { title: "Special Purpose Machines(SPM)", desc: "Custom-built machines for specific manufacturing operations" },
      { title: "Automated Assembly Lines", desc: "Turnkey assembly solutions with robotic integration" },
      { title: "Test andInspection Systems", desc: "Vision systems and end-of-line testing equipment" },
    ],
  },

  "Precision Components": {
    type: "single",
    title: "High Precision Components",
    highlight: "Components",
    desc: "Our precision machining capabilities deliver components with micron-level accuracy. From prototypes to production runs, we ensure the highest quality standards for demanding applications.",
    pill: "Micron Accuracy",
    icon: icons.precision,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    badge: "Accuracy",
    points: [
      { title: "CNC Milling and Turning", desc: "3, 4, and 5-axis machining for complex geometries" },
      { title: "Wire EDM and Sinker EDM", desc: "Intricate shapes and hardened materials processing" },
      { title: "Surface Grinding", desc: "Mirror-finish surfaces with Ra 0.1μm capability" },
    ],
  },

  "Spares & Consumables": {
    type: "single",
    title: "Industrial Spares & Consumables",
    highlight: "Consumables",
    desc: "Keep your production running with our reliable supply of spare parts and consumables. We maintain inventory of critical components to minimize your downtime.",
    pill: "Industrial Supply",
    icon: icons.spares,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800",
    badge: "Quick Delivery",
    points: [
      { title: "Replacement Parts", desc: "OEM-quality spares for fixtures and equipment" },
      { title: "Wear Components", desc: "Pins, bushings, guides, and other wear parts" },
      { title: "Consumables", desc: "Cutting tools, abrasives, and processing materials" },
    ],
  },

  "End-to-End Solutions": {
    type: "single",
    title: "Complete Manufacturing Solutions",
    highlight: "Solutions",
    desc: "From initial concept to final delivery and support, we provide comprehensive manufacturing solutions. Our team works as an extension of yours to deliver complete projects.",
    pill: "Turnkey Systems",
    icon: icons.solution,
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800",
    badge: "TurnKey Projects",
    points: [
      { title: "Design and Engineering", desc: "Concept development, 3D modeling, and simulation" },
      { title: "Prototyping and Validation", desc: "Rapid prototypes with testing and refinement" },
      { title: "Production and Support", desc: "Volume manufacturing with ongoing maintenance" },
    ],
  },
};

export default function Offerings() {
  const [active, setActive] = useState("Custom Fixtures");

  return (
    <section className="offerings">
      <div className="container">

        <span className="tag">PRODUCT PORTFOLIO</span>

        <h2 className="title">
          Explore Our <span>Offerings</span>
        </h2>

        {/* TABS */}
        <div className="tabs">
          {Object.keys(data).map((tab) => (
            <button
              key={tab}
              className={`tab ${active === tab ? "active" : ""}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="content morph">

          {data[active].type === "double" ? (
            <div className="layout">

              <div className="images">
                <img src={data[active].images[0]} className="main-img" />

                <div className="small-img-wrap">
                  <span className="badge">{data[active].badge}</span>
                  <img src={data[active].images[1]} />
                </div>
              </div>

              <div className="text">
                <span className="pill">
                  {data[active].icon}
                  {data[active].pill}
                </span>

                <h3>
                  {data[active].title.split(" ")[0]}{" "}
                  <span>{data[active].highlight}</span>
                </h3>

                <p className="desc">{data[active].desc}</p>

                <div className="cards">
                  {data[active].points.map((p, i) => (
                    <div className="mini-card" key={i}>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="layout">

              <div className="text">
                <span className="pill">
                  {data[active].icon}
                  {data[active].pill}
                </span>

                <h3>
                  {data[active].title.split(" ")[0]}{" "}
                  <span>{data[active].highlight}</span>
                </h3>

                <p className="desc">{data[active].desc}</p>

                <div className="cards">
                  {data[active].points.map((p, i) => (
                    <div className="mini-card" key={i}>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="image-single">
                <span className="badge">{data[active].badge}</span>
                <img src={data[active].image} />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}