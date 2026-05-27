import React from "react";
import "./Sustainability.css";

export default function Sustainability() {
  return (
    <div className="sustainability">

      {/* LEAVES */}
      <img src="/leaves/leaf1.png" className="leaf l1" alt="" />
      <img src="/leaves/leaf2.png" className="leaf l2" alt="" />
      <img src="/leaves/leaf1.png" className="leaf l3" alt="" />
      <img src="/leaves/leaf2.png" className="leaf l4" alt="" />
      <img src="/leaves/leaf1.png" className="leaf l5" alt="" />

      <h2 className="title">Sustainability</h2>

      <p className="desc">
        At HYA Tech, we focus on sustainable innovation, reducing environmental impact,
        and building eco-friendly automation systems.
      </p>

      {/* ✅ IMPORTANT: KEEP THIS STRUCTURE CLEAN */}
      <div className="content">

        <div className="card">
          <h3>🌱 Eco-Friendly Design</h3>
          <p>We develop systems that reduce waste and energy usage.</p>
        </div>

        <div className="card">
          <h3>🕒 Energy Efficiency</h3>
          <p>Optimizing machines to consume less power and resources.</p>
        </div>

        <div className="card">
          <h3>♻ Smart Resources</h3>
          <p>Optimized material usage with AI planning.</p>
        </div>

        <div className="card">
          <h3>🌍 Eco Production</h3>
          <p>Environment-friendly manufacturing processes.</p>
        </div>

      </div>

    </div>
  );
}