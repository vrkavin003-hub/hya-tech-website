import React, { useEffect } from "react";
import "./Capabilities.css";

const data = [
  { title: "Riveting", desc: "Orbital, radial, and impact riveting for permanent joints with consistent force control", icon: "🛠️" },
  { title: "Press Fitting", desc: "Force and position-controlled press fitting with real-time curve monitoring", icon: "➕" },
  { title: "Tightening", desc: "DC electric and pneumatic tightening with torque-angle control and traceability", icon: "🔧" },
  { title: "Gluing & UV", desc: "Precision dispensing with volumetric and time-pressure systems, UV LED curing", icon: "🧪" },
  { title: "Welding", desc: "Laser welding, ultrasonic welding, and resistance welding for various materials", icon: "⚡" },
  { title: "Magnetization", desc: "Controlled magnetization and demagnetization with flux measurement validation", icon: "🧲" },
];

export default function Capabilities() {

  useEffect(() => {
    const cards = document.querySelectorAll(".cap-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.08}s`;
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      
      <section className="capabilities">

        <span className="cap-badge">ASSEMBLY TECHNOLOGIES</span>

        <h1 className="title">
          Advanced <span>Assembly</span> Processes
        </h1>

        <p className="desc">
          Comprehensive assembly capabilities for diverse manufacturing requirements
        </p>

        <div className="grid">
          {data.map((item, index) => (
            <div key={index} className="cap-card">
              <div className="cap-inner">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}