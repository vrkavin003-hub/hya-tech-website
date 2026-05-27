import React, { useState, useEffect } from "react";
import OurProject from "./OurProject.css";

const projectsData = [
  {
    category: "machinery",
    title: "CNC Machining",
    subtitle: "CNC Machining Center",
    img: "/cnc.jpg",
    desc: "Advanced multi-axis VMC for precision manufacturing"
  },
  {
    category: "components",
    title: "Precision Parts",
    subtitle: "High Precision Components",
    img: "/parts.jpg",
    desc: "Aerospace-grade components with ±0.001mm tolerance"
  },
  {
    category: "fixtures",
    title: "Custom Fixtures",
    subtitle: "Custom Engineered Fixtures",
    img: "/fixtures.jpg",
    desc: "Production line fixtures for electronics manufacturing"
  },
  {
    category: "fixtures",
    title: "Assembly Jigs",
    subtitle: "Efficient Assembly Jigs",
    img: "/assembly.jpg",
    desc: "Efficient jigs to streamline assembly and improve productivity."
  },
  {
    category: "components",
    title: "Medical Grade",
    subtitle: "Medical Components",
    img: "/medical.jpg",
    desc: "High-quality medical components meeting strict safety standards."
  },
  {
    category: "machinery",
    title: "Surface Grinding",
    subtitle: "Ultra-Smooth Finishing",
    img: "/grinding.jpg",
    desc: "Ultra-smooth surface finishing with micron-level precision on hardened materials."
  },
  {
    category: "machinery",
    title: "EDM",
    subtitle: "Electrical Discharge Machining",
    img: "/edm.jpg",
    desc: "Electrical discharge machining for intricate metal shaping and for complex geometries"
  },
  {
    category: "automation",
    title: "Automation",
    subtitle: "Assembly Automation Solutions",
    img: "/automation.jpg",
    desc: "Intelligent manufacturing equipment with PLC control"
  },
  {
    category: "automation",
    title: "Riveting System",
    subtitle: "Automated Riveting Solutions",
    img: "/riveting.jpg",
    desc: "Robust automated riveting solutions for industrial workflows."
  }
];
const filters = ["all", "fixtures", "components", "machinery", "automation"];

const Projects = () => {
  const [active, setActive] = useState("all");
  const [theme, setTheme] = useState("dark");

  const filtered =
    active === "all"
      ? projectsData
      : projectsData.filter(p => p.category === active);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <section className="projects-section">
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        ☀
      </button>

      <h1>Featured Projects</h1>
      <p>Explore our portfolio of precision machined parts and automation solutions</p>

      {/* FILTERS */}
      <div className="filters">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className={`projects-grid ${active === "all" ? "grid-3" : ""}`}>
        {filtered.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.img} alt={p.title} loading="lazy" />

            {/* TITLE BADGE */}
            <div className="title-badge">
              {p.title}
            </div>

            {/* HOVER DETAILS */}
           <div className="overlay">
               <h3>{p.subtitle}</h3>
               <p>{p.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;