import React, { useEffect, useRef } from "react";
import "./TimelineSection.css";

const Timeline = () => {

  const timelineRef = useRef(null);

  useEffect(() => {

    const items = document.querySelectorAll(".timeline-item");
    const progressLine = document.querySelector(".timeline-progress");

    let ticking = false;

    const animate = () => {

      const trigger = window.innerHeight * 0.85;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();

        if (rect.top < trigger) {
          item.classList.add("show");

          // smoother stagger (only once)
          if (!item.style.transitionDelay) {
            item.style.transitionDelay = `${index * 0.12}s`;
          }
        }
      });

      /* ===== PERFECT PROGRESS LINE ===== */
      if (timelineRef.current && progressLine) {

        const rect = timelineRef.current.getBoundingClientRect();
        const totalHeight = timelineRef.current.offsetHeight;

        // how much of timeline is visible
        const visible = window.innerHeight - rect.top;

        let percent = visible / totalHeight;

        // clamp 0 → 1
        percent = Math.max(0, Math.min(percent, 1));

        progressLine.style.transform =
          `translateX(-50%) scaleY(${percent})`;
      }

      ticking = false;
    };

    /* 🔥 PERFORMANCE FIX (smooth scroll) */
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(animate);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // run once on load
    animate();

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <section className="timeline-section">

      {/* HEADER */}
      <p className="timeline-small">OUR STORY</p>

      <h2 className="timeline-title">
        Journey Towards <span>Excellence</span>
      </h2>

      <p className="timeline-desc">
        From humble beginnings to becoming a trusted precision manufacturing partner
      </p>

      {/* TIMELINE */}
      <div className="timeline" ref={timelineRef}>

        <div className="timeline-progress"></div>

        {/* ITEMS */}

        <div className="timeline-item left">
          <div className="timeline-dot">2018</div>
          <div className="timeline-content">
            <h3>The Beginning</h3>
            <p>
              Company registered as "RAZK Automation" at Madurai, Tamil Nadu.
              Our journey of precision manufacturing began.
            </p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-dot">2019</div>
          <div className="timeline-content">
            <h3>First Major Project</h3>
            <p>
              Provided engineering support (OSS) for Automation equipment
              Installation, Qualification and Maintenance at EMS Industry.
            </p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-dot">2020</div>
          <div className="timeline-content">
            <h3>Business Expansion</h3>
            <p>
              Expanded business scope for Spares and Standard parts supply,
              diversifying our service offerings.
            </p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-dot">2021</div>
          <div className="timeline-content">
            <h3>Chennai Branch</h3>
            <p>
              Setup new Branch Office at Sriperumbudur, Chennai to better
              serve our growing customer base.
            </p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-dot">2022</div>
          <div className="timeline-content">
            <h3>Multi-Location Growth</h3>
            <p>
              OSS Business expanded to multiple customers and locations,
              establishing our regional presence.
            </p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-dot">2023</div>
          <div className="timeline-content">
            <h3>Hya Tech is Born</h3>
            <p>
              Registered new company "HYA TECH" at Chennai, TN — marking
              a new chapter in our growth story.
            </p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-dot">2024</div>
          <div className="timeline-content">
            <h3>Manufacturing Excellence</h3>
            <p>
              Setup new Manufacturing facility at Hosur, TN. Supported
              Precision Components and Fixtures production.
            </p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-dot">2025</div>
          <div className="timeline-content">
            <h3>Going Global</h3>
            <p>
              Established Global partnership for Know-How transfer and
              capacity sharing with China & Singapore.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;