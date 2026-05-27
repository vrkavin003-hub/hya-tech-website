import { useEffect, useRef } from "react";
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
    <section className="about-hero">

      {/* 🔥 CANVAS PARTICLES */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      {/* GRADIENT LAYERS */}
      <div className="bg-layer layer1"></div>
      <div className="bg-layer layer2"></div>

      {/* CURSOR GLOW */}
      <div className="cursor-glow"></div>

      {/* OVERLAY */}
      <div className="about-overlay"></div>

      {/* CONTENT */}
      <div className="about-content">

        <p className="about-small">OUR SERVICES</p>

        <h1 className="about-title">
          Complete Manufacturing  <span>Solutions</span>
        </h1>

        <p className="about-desc">
         From concept to production, we deliver precision engineering excellence across every aspect of modern manufacturing.
        </p>

      </div>

    </section>
  );
}