import React, { useState } from "react";
import "./FooterSection.css";
import { useNavigate } from "react-router-dom";

/* 🔥 React Icons */
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/* 🔥 Loader */
import Loader from "./Loader";

function FooterSection() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  /* 🔥 Navigation with Loader */
  const handleNavigate = (path) => {
    setLoading(true);

    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 1200);
  };

  return (
    <>
      {/* 🔥 Loader */}
      {loading && <Loader />}

      {/* ===== CTA ===== */}
      <section className="cta-wrapper">
        <div className="cta-box">
          <h2>Join Our Journey</h2>

          <p>
           Be part of India's precision manufacturing revolution. Explore career opportunities with HYA Tech.
          </p>

          <div className="cta-buttons">
            <button
              className="btn-primary"
              onClick={() => handleNavigate("/contact")}
            >
              Get Started →
            </button>

           
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-grid">

          {/* COMPANY */}
          <div className="footer-col">
            <div className="logo">
              <img src="/logo.png" alt="logo" />
              <h3>HYA Tech</h3>
            </div>

            <p>
              Precision manufacturing excellence since 2018.
              Delivering innovative solutions for tomorrow's industries.
            </p>

            <div className="socials">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a href="mailto:info@hyatech.co.in">
                <MdEmail />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>

            <a onClick={() => handleNavigate("/")}>Home</a>

            <a onClick={() => handleNavigate("/about")}>
              About Us
            </a>

            <a onClick={() => handleNavigate("/services")}>
              Services
            </a>

            <a onClick={() => handleNavigate("/project")}>
              Projects
            </a>

            <a onClick={() => handleNavigate("/contact")}>
              Contact
            </a>
          </div>

          {/* SERVICES */}
          <div className="footer-col">
            <h4>Services</h4>

            <a onClick={() => handleNavigate("/services")}>
              Custom Fixtures
            </a>

            <a onClick={() => handleNavigate("/services")}>
              CNC Machining
            </a>

            <a onClick={() => handleNavigate("/services")}>
              Precision Components
            </a>

            <a onClick={() => handleNavigate("/services")}>
              Assembly Technology
            </a>
          </div>

          {/* ADDRESS */}
          <div className="footer-col">
            <h4>Head Office</h4>

            <p>Plot No: 122, SIDCO, Hosur, TN – 635109</p>

            <a href="mailto:info@hyatech.co.in">
              info@hyatech.co.in
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 HYA Tech. All rights reserved.</p>

          <div>
            <a onClick={() => handleNavigate("/privacy")}>
              Privacy Policy
            </a>

            <a onClick={() => handleNavigate("/terms")}>
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;