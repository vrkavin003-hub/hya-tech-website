import React, { useEffect } from "react";
import "./Portfolio.css";

const data = [
  {
    title: "Excellence & Precision",
    desc: "Delivering accurate, high-quality automation and fixture solutions that perform reliably.",
    icon: "/icons/excellenceprecision.png",
  },
  {
    title: "Innovation",
    desc: "Embracing new ideas and technologies to improve our products and processes.",
    icon: "/icons/innovation.png",
  },
  {
    title: "Customer Focus",
    desc: "Listening carefully and providing solutions that meet our clients' needs.",
    icon: "/icons/customerfocus.png",
  },
  {
    title: "Responsibility",
    desc: "Taking ownership and ensuring we fulfill our commitments with integrity.",
    icon: "/icons/responsibility.png",
  },
  {
    title: "Teamwork & Safety",
    desc: "Collaborating effectively and prioritizing safety for people and environment.",
    icon: "/icons/teamwork.png",
  },
  {
    title: "Sustainability",
    desc: "Caring for the Earth and community in everything we do.",
    icon: "/icons/sustainability.png",
  },
];

export default function Portfolio() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio-section">

      <h1 className="heading reveal">Our Values</h1>

      <p className="desc reveal">
        At HYA Tech, our values guide our actions and define our culture.
      </p>

      <div className="portfolio-grid">
        {data.map((item, index) => (
          <div
            key={index}  
           
            className="portfolio-card reveal"
          >
            <div className="icon-wrapper">
              <img src={item.icon} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}