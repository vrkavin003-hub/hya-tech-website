import React, { useEffect } from "react";
import "./Loader.css";

export default function Loader({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // hide loader after animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-wrapper">

      {/* BACKGROUND ANIMATION */}
      <div className="bg-animation"></div>

      {/* MAIN CONTENT */}
      <div className="loader-content">

        {/* ROTATING RING */}
        <div className="loader-ring">
</div>

        {/* BRAND NAME */}
        <h1 className="loader-title">HYA TECH</h1>

        {/* SUB TEXT */}
        <p className="loader-sub"> Precision Beyond Belief </p>

      </div>

    </div>
  );
}