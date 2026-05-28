import { useEffect, useRef } from "react";
import { Briefcase, Mail, User } from "lucide-react";
import "./ServiceHero.css";

export default function ServiceHero() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // 🔥 CREATE PARTICLES
    const createParticles = () => {
      particles = [];

      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    createParticles();

    // 🔥 ANIMATE
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        // wrap edges
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79,195,247,${p.opacity})`;
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // 🎯 CURSOR GLOW
    const handleMouse = (e) => {
      const hero = document.querySelector(".about-hero");
      if (hero) {
        hero.style.setProperty("--x", `${e.clientX}px`);
        hero.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouse);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };

  }, []);

  return (
    <section className="about-hero career-hero">

      {/* 🔥 CANVAS PARTICLES */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      {/* GRADIENT LAYERS */}
      <div className="bg-layer layer1"></div>
      <div className="bg-layer layer2"></div>

      {/* CURSOR GLOW */}
      <div className="cursor-glow"></div>

      {/* OVERLAY */}
      <div className="about-overlay"></div>

      <div className="career-hero-inner">
        {/* CONTENT */}
        <div className="about-content career-hero-content">

          <p className="about-small">Career Oppurtunities</p>
          <h1 className="about-title">
             <span>Solutions</span>
          </h1>

          <p className="about-desc">
           From concept to production, we deliver precision engineering excellence across every aspect of modern manufacturing.
          </p>

        </div>

        <div className="career-form-wrap" aria-label="Career Appeal Form">
          <h2>Career Appeal Form</h2>

          <form
            className="career-application-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="career-form-card">
              <h3>Application Form</h3>
              <p>Fill out the form below for job opportunities</p>

              <div className="career-field-grid">
                <label className="career-field">
                  <span>Full name</span>
                  <div className="career-input">
                    <User size={14} aria-hidden="true" />
                    <input type="text" name="fullName" required />
                  </div>
                </label>

                <label className="career-field">
                  <span>Email</span>
                  <div className="career-input">
                    <Mail size={14} aria-hidden="true" />
                    <input type="email" name="email" required />
                  </div>
                </label>
              </div>

              <label className="career-field">
                <span>What position are you applying for</span>
                <div className="career-input career-select">
                  <Briefcase size={14} aria-hidden="true" />
                  <select name="position" required defaultValue="">
                    <option value="" disabled></option>
                    <option>Design Engineer</option>
                    <option>Manufacturing Engineer</option>
                    <option>CNC Operator</option>
                    <option>Quality Inspector</option>
                    <option>Assembly Technician</option>
                  </select>
                </div>
              </label>

              <fieldset className="career-status">
                <legend>Specify your current employment status</legend>

                <label>
                  <input type="radio" name="employmentStatus" value="employed" />
                  <span>Employed</span>
                </label>

                <label>
                  <input type="radio" name="employmentStatus" value="unemployed" />
                  <span>Unemployed</span>
                </label>

                <label>
                  <input type="radio" name="employmentStatus" value="self-employed" />
                  <span>Self-Employed</span>
                </label>

                <label>
                  <input type="radio" name="employmentStatus" value="student" />
                  <span>Student</span>
                </label>
              </fieldset>

              <div className="career-upload">
                <span>Upload your resume</span>
                <label className="career-upload-btn">
                  Upload
                  <input type="file" name="resume" accept=".pdf,.doc,.docx" />
                </label>
              </div>

              <button className="career-submit" type="submit">
                Submit
              </button>
            </div>

            <p className="career-form-credit">
              &copy; 2017 Career Appeal Form. All Rights Reserved | Design by W3layouts
            </p>
          </form>
        </div>
      </div>

    </section>
  );
}
