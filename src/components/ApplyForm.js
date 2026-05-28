import React, { useState } from "react";
import "./ApplyForm.css";

const captchaQuestions = [
  { q: "5 + 3", a: 8 },
  { q: "9 - 4", a: 5 },
  { q: "6 + 7", a: 13 },
  { q: "12 - 5", a: 7 },
  { q: "8 + 6", a: 14 },
  { q: "20 - 8", a: 12 },
  { q: "7 + 2", a: 9 },
  { q: "10 - 3", a: 7 }
];

const getRandomCaptcha = () =>
  captchaQuestions[Math.floor(Math.random() * captchaQuestions.length)];

export default function ApplyForm() {
  const [captcha, setCaptcha] = useState(getRandomCaptcha());
  const [answer, setAnswer] = useState("");

  const refreshCaptcha = () => {
    setCaptcha(getRandomCaptcha());
    setAnswer("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(answer) !== captcha.a) {
      alert("Captcha incorrect!");
      return;
    }

    alert("Message Sent 🚀");
  };

  return (
    <div className="contact-section">

      <span className="sub-circle">Send a Message</span>

      <h2 className="contact-title">Get In Touch</h2>

      <p className="contact-desc">
        Fill out the form below and we'll get back to you within 24 hours
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>

        {/* ROW 1 */}
        <div className="form-row">
          <div className="input-box">
            <svg viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/></svg>
            <input type="text" required />
            <label>Full Name</label>
          </div>

          <div className="input-box">
            <svg viewBox="0 0 24 24"><path d="M3 7h18v13H3zM16 3H8v4h8z"/></svg>
            <input type="text" required />
            <label>Company Name</label>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="form-row">
          <div className="input-box">
            <svg viewBox="0 0 24 24"><path d="M12 13 2 6h20zM2 8v10h20V8l-10 7z"/></svg>
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="input-box">
            <svg viewBox="0 0 24 24"><path d="M6 2h12v20H6z"/></svg>
            <input type="tel" required />
            <label>Phone Number</label>
          </div>
        </div>

        {/* ROW 3 */}
        <div className="form-row">
          <div className="input-box">
            <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>
            <input type="text" required />
            <label>Country</label>
          </div>

          <div className="input-box">
            <svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/></svg>
            <select required>
              <option value=""></option>
              <option>Custom Fixtures</option>
              <option>CNC Machining</option>
              <option>Precision Components</option>
              <option>Assembly Equipment</option>
              <option>Spares And Consumables</option>
              <option>Other</option>
            </select>
            <label>Service Interested In</label>
          </div>
        </div>

        {/* MESSAGE */}
        <div className="input-box full">
          <svg viewBox="0 0 24 24"><path d="M2 4h20v16H2z"/></svg>
          <textarea required></textarea>
          <label>Your Message</label>
        </div>

        {/* CAPTCHA */}
        <div className="captcha">

          <div className="captcha-box">
            <span className="lock">🔒</span>
            <span>{captcha.q}</span>
          </div>

          <input
            type="text"
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />

          <button
  type="button"
  className="captcha-refresh"
  onClick={refreshCaptcha}
  title="Refresh Captcha"
>
  <svg viewBox="0 0 24 24" className="refresh-icon">
    <path
      d="M17.65 6.35A7.95 7.95 0 0012 4V1L7 6l5 5V7a5 5 0 11-5 5H5a7 7 0 107.65-5.65z"
    />
  </svg>
</button>
        </div>

        <button className="submit-btn" type="submit">
          Send Message →
        </button>

      </form>
    </div>
  );
}