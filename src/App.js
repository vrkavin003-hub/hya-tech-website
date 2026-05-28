import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

import OfferDetail from "./components/OfferDetail";

import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Service from "./Service";
import Contact from "./Contact";
import Capabilities from "./components/Capabilities";
import Timeline from "./components/Timeline";
import FooterSection from "./components/FooterSection";

import "leaflet/dist/leaflet.css";

/* 🔝 SCROLL TO TOP COMPONENT */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  /* 🌙 DEFAULT DARK MODE */
  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const [loading, setLoading] = useState(false);

  /* 💾 SAVE + APPLY THEME */
  useEffect(() => {
    document.body.className = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);

  /* ✨ UI EFFECTS */
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const moveGlow = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveGlow);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      document.body.removeChild(glow);
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      

      <ScrollToTop />

     {loading && <Loader />}

      <Navbar
        mode={mode}
        setMode={setMode}
        setLoading={setLoading}
      />

      <Routes>
        <Route path="/" element={<Home />} />
       <Route
  path="/about"
  element={<About setLoading={setLoading} />}
/>
        <Route path="/projects" element={<Project />} />
       <Route
  path="/services"
  element={<Service setLoading={setLoading} />}
/>
       <Route
  path="/contact"
  element={<Contact setLoading={setLoading} />}
/>
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/timeline" element={<Timeline />} />

        {/* OFFER DETAILS */}
        <Route path="/offer/:type" element={<OfferDetail />} />
      </Routes>

      
    
      

      

    </Router>
  );
}

export default App;