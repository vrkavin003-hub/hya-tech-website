import React from "react";
import "./ServiceFooter.css";
import { useNavigate } from "react-router-dom";

/* 🔥 React Icons */
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function FooterSection({ setLoading }) {

  const navigate = useNavigate();

  /* 🔥 Navigation Function */
  const handleNavigate = (path) => {

    if (setLoading) {
      setLoading(true);
    }

    setTimeout(() => {
      navigate(path);

      if (setLoading) {
        setLoading(false);
      }

    }, 1200);
  };

  return (
    <>
      {/* ===== CTA ===== */}
      <section className="cta-wrapper">
        <div className="cta-box">

          <h2>Have a Project in Mind?</h2>

          <p>
            Let's discuss how we can bring precision and excellence
            to your manufacturing requirements.
          </p>

          <div className="cta-buttons">

            <button
              className="btn-primary"
              onClick={() => handleNavigate("/contact")}
            >
              Request Consultation →
            </button>

            <button
              className="btn-outline"
              onClick={() => handleNavigate("/projects")}
            >
              View Projects
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

            <a onClick={() => handleNavigate("/projects")}>
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