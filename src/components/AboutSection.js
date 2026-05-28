import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section">

          {/* 🔥 HEADER FULL WIDTH */}
  <div className="about-header">
    <span className="tag">WHO WE ARE</span>
    <h2>Engineering Excellence Since 2018</h2>
  </div>

      <div className="about-container">

        {/* IMAGE */}
        <div className="about-image">
          <img src="/factory-team.jpg" alt="team" />
        </div>

        {/* TEXT */}
        <div className="about-text">

          <p>
            HYA Tech is committed to becoming a leading industry player by expanding
            through deep collaboration with our customers. With years of experience
            in manufacturing, we bring strategic investment in technology and talent
            that transforms industries.
          </p>

          <p>
            Founded with a clear mission to build world-class engineering excellence
            in precision manufacturing for the electronics industry, our goal is to
            deliver innovation, quality, and reliability.
          </p>

          <p>
            We believe manufacturing excellence can—and should—be cultivated within
            India, using our own talent, resources, and values.
          </p>

        </div>

      </div>

    </section>
  );
}