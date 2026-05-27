import React, { useEffect } from "react";
import "./Location.css";

const locations = [
  {
    country: "India",
    flag: "/flags/india.svg",
    details: [
      "Chennai - Branch Office",
      "Hosur - Manufacturing HQ",
      "Madurai - Origin Office",
    ],
  },
  {
    country: "China",
    flag: "/flags/china.svg",
    details: [
      "Kunshan - Partnership",
      "Shenzhen - Tech Center",
      "Suzhou - Capacity",
    ],
  },
  {
    country: "Singapore",
    flag: "/flags/singapore.svg",
    details: [
      "Operations Hub",
      "Strategic Partnerships",
      "Tech Transfer",
    ],
  },
  {
    country: "USA",
    flag: "/flags/usa.svg",
    details: [
      "Saratoga",
      "Business Dev",
      "Customer Relations",
    ],
  },
];

export default function Locations() {
  useEffect(() => {
    const cards = document.querySelectorAll(".locations-card");

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("locations-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    // Cursor spotlight
    const handlers = [];

    cards.forEach((card) => {
      const move = (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
      };

      card.addEventListener("mousemove", move);
      handlers.push({ card, move });
    });

    // Cleanup (VERY IMPORTANT)
    return () => {
      cards.forEach((card) => observer.unobserve(card));
      handlers.forEach(({ card, move }) => {
        card.removeEventListener("mousemove", move);
      });
    };
  }, []);

  return (
    <section className="locations-section">
      {/* Background layers */}
      <div className="locations-bg layer1"></div>
      <div className="locations-bg layer2"></div>
      <div className="locations-bg layer3"></div>

      <div className="locations-container">
        <span className="locations-tag">GLOBAL PRESENCE</span>

        <h1 className="locations-title">Our Locations</h1>
        <p className="locations-subtitle">
          Serving clients worldwide from our strategic locations
        </p>

        <div className="locations-grid">
          {locations.map((loc, i) => (
            <div className={`locations-card float-${i}`} key={i}>
              <h3 className="locations-country">
                <img
                  src={loc.flag}
                  alt={loc.country}
                  className="locations-flag"
                />
                {loc.country}
              </h3>

              <ul>
                {loc.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}