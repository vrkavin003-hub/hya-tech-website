import "./OurPeople.css";

export default function OurPeople() {
  return (
    <section className="people-section">

      {/* 🔥 HEADER (FULL WIDTH — OUTSIDE GRID) */}
      <div className="people-header">
        <p className="people-small">OUR PEOPLE</p>

        <h1 className="people-title">Our Team</h1>

        <p className="people-desc">
          Skilled professionals driving innovation and excellence.
        </p>
      </div>

      {/* GRID CONTENT */}
      <div className="people-grid">

        {/* LEFT */}
        <div className="people-text">
          <div className="people-list">

            <div className="people-item">
              <div className="icon">💻</div>
              <div>
                <h3>Designers & Engineers</h3>
                <p>Expert mechanical and control system designers driving innovation</p>
              </div>
            </div>

            <div className="people-item">
              <div className="icon">⚙️</div>
              <div>
                <h3>Machine Operators</h3>
                <p>Skilled CNC and VMC operators ensuring precision</p>
              </div>
            </div>

            <div className="people-item">
              <div className="icon">✔️</div>
              <div>
                <h3>Quality Control</h3>
                <p>Dedicated inspectors maintaining zero-defect commitment</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="people-image">
          <img src="/team.jpg" alt="team" />
        </div>

      </div>

    </section>
  );
}