import { useEffect, useRef } from "react";
import "./Timeline.css";

const data = [
  {
    year: "2018",
    title: "The Beginning",
    desc: "HYA Tech was established with a vision to revolutionize precision manufacturing in India. Started with a small team of passionate engineers."
  },
  {
    year: "2020",
    title: "Expanding Horizons",
    desc: "Expanded our facility and capabilities. Added CNC machining centers and started serving automotive sector clients."
  },
  {
    year: "2022",
    title: "TechnologyUpgrade",
    desc: "Invested in 5-axis CNC machines, Wire EDM, and Industry 4.0 capabilities. Achieved ISO certifications."
  },
  {
    year: "2024",
    title: "Industry Leader",
    desc: "Now serving 50+ clients across automotive, aerospace, and electronics industries with end-to-end manufacturing solutions."
  },
  {
    year: "2026",
    title: "Future Goals",
    desc: "Expanding to new facilities, adding advanced robotics and AI-driven manufacturing for next-generation precision solutions."
  }
];

export default function Timeline() {

  const timelineRef = useRef(null);

  useEffect(() => {

    const items = document.querySelectorAll(".timeline-item");
    const progress = document.querySelector(".timeline-progress");

    /* ===== SHOW CARDS FIX ===== */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    items.forEach(el => observer.observe(el));

    /* ===== PROGRESS LINE ===== */
    const handleScroll = () => {
      if (!timelineRef.current || !progress) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const total = timelineRef.current.offsetHeight;

      let visible = window.innerHeight - rect.top;
      let percent = visible / total;

      percent = Math.max(0, Math.min(percent, 1));

      progress.style.transform =
        `translateX(-50%) scaleY(${percent})`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

    
    <section className="timeline-section">

      <h2 className="timeline-title">Our Journey</h2>
      <p className="timeline-desc">From humble beginnings to becoming a trusted precision manufacturing partner</p>

      <div className="timeline" ref={timelineRef}>

        <div className="timeline-progress"></div>

        {data.map((item, i) => (
          <div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
          >

            <div className="timeline-dot">{item.year}</div>

            <div className="timeline-arrow"></div>
            <div className="spark"></div>

            <div className="timeline-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}

      </div>
    

    <section className="stats">
        <div className="stat">
          <h2 className="counter" data-target="7">0</h2>
          <p>Years of Excellence</p>
        </div>

        <div className="stat">
          <h2 className="counter" data-target="500">0</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat">
          <h2 className="counter" data-target="50">0</h2>
          <p>Industry Partners</p>
        </div>

        <div className="stat">
          <h2 className="counter" data-target="98">0</h2>
          <p>Client Satisfaction</p>
        </div>
      </section>
      </section>
  );
}