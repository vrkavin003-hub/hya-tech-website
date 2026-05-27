import React from "react";
import "./ContactFooter.css";
import { useNavigate } from "react-router-dom";

import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiClock } from "react-icons/fi";

function ContactFooter({ setLoading }) {

  const navigate = useNavigate();

  /* 🔥 Navigation with Loader */
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
      {/* ===== QUICK CONTACT ===== */}
      <section className="quick-contact">
        <h1 className="qc-title">Quick Contact</h1>

        <div className="qc-grid">

          {/* EMAIL */}
          <a
            href="mailto:info@hyatech.co.in"
            className="qc-card"
          >
            <MdEmail className="qc-icon" />
            <p>info@hyatech.co.in</p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="qc-card"
          >
            <FaLinkedinIn className="qc-icon" />
            <p>LinkedIn</p>
          </a>

          {/* TIME */}
          <div className="qc-card">
            <FiClock className="qc-icon" />
            <p>Mon–Sat: 9AM–6PM IST</p>
          </div>

        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-grid">

          {/* COMPANY */}
          <div className="footer-col">
            <div className="logo">
              <img src="/logo.jpeg" alt="logo" />
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

export default ContactFooter;