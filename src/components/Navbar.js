import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ mode, setMode, setLoading }) {

  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // ✅ SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (path) => {
    if (!setLoading) return;

    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 400);
  };

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  return (
    <nav className={`navbar ${mode} ${scrolled ? "scrolled" : ""}`}>

      {/* LOGO */}
      <div className="logo" onClick={() => handleNav("/")}>
        <img src="/logo.png" alt="logo" className="logo-img" />
        <h1 className="logo-text">HYA TECH</h1>
      </div>

      {/* LINKS */}
      <div className="nav-links">

        <span className={location.pathname === "/" ? "active" : ""} onClick={() => handleNav("/")}>
          Home
        </span>

        <span className={location.pathname === "/about" ? "active" : ""} onClick={() => handleNav("/about")}>
          About
        </span>

        <span className={location.pathname === "/services" ? "active" : ""} onClick={() => handleNav("/services")}>
          Services
        </span>

        <span className={location.pathname === "/projects" ? "active" : ""} onClick={() => handleNav("/projects")}>
          Projects
        </span>

        <span className={location.pathname === "/contact" ? "active" : ""} onClick={() => handleNav("/contact")}>
          Contact
        </span>

      </div>

      {/* TOGGLE */}
      <div className="toggle" onClick={toggleMode}>
        <div className={`toggle-circle ${mode}`}>
          {mode === "dark" ? "🌙" : "☀️"}
        </div>
      </div>

    </nav>
  );
}
