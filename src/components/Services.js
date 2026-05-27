import React from "react";
import "./Services.css";

import {
  Circle,
  Plus,
  Wrench,
  FlaskConical,
  Zap,
  Magnet
} from "lucide-react";

const services = [
  {
    title: "Riveting",
    desc: "Precision riveting solutions for permanent mechanical joints with consistent quality",
    icon: <Circle />,
    shape: "shape1",
  },
  {
    title: "Press Fitting",
    desc: "Force and position-controlled press fitting for interference fit assemblies",
    icon: <Plus />,
    shape: "shape2",
  },
  {
    title: "Tightening",
    desc: "Torque-controlled fastening with angle monitoring and traceability",
    icon: <Wrench />,
    shape: "shape3",
  },
  {
    title: "Gluing & UV",
    desc: "Precision adhesive dispensing with controlled UV curing systems",
    icon: <FlaskConical />,
    shape: "shape4",
  },
  {
    title: "Welding",
    desc: "Advanced welding including laser, ultrasonic, and resistance welding",
    icon: <Zap />,
    shape: "shape5",
  },
  {
    title: "Magnetization",
    desc: "Controlled magnetization and demagnetization processes",
    icon: <Magnet />,
    shape: "shape6",
  },
];

export default function Services() {
  return (
    <section className="srv-root">

      {/* HEADER */}
      <div className="srv-header">
        <span className="srv-badge">ASSEMBLY TECHNOLOGIES</span>

        <h1>
          OUR <span>CAPABILITIES</span> 
        </h1>

        <p>
         State-of-the-art assembly technologies for diverse manufacturing needs
        </p>
      </div>

      {/* GRID */}
      <div className="srv-grid">
        {services.map((item, i) => (
          <div key={i} className={`srv-card ${item.shape}`}>
            <div className="srv-inner">

              <div className="icon-wrap">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}