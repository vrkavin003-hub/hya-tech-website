import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";
import L from "leaflet";
import "./MapSection.css";

const factory = [12.7284, 77.8253];

/* Marker */
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [30, 45],
});

/* Map Controller */
function MapController({ setShowHint }) {
  const map = useMap();

  useEffect(() => {
    map.scrollWheelZoom.disable();

    const wheelHandler = (e) => {
      if (e.ctrlKey) {
        map.scrollWheelZoom.enable();
        setShowHint(false);
      } else {
        map.scrollWheelZoom.disable();
        setShowHint(true);
      }
    };

    const keyHandler = (e) => {
      switch (e.key) {
        case "ArrowLeft": map.panBy([-100, 0]); break;
        case "ArrowRight": map.panBy([100, 0]); break;
        case "ArrowUp": map.panBy([0, -100]); break;
        case "ArrowDown": map.panBy([0, 100]); break;
        case "+": case "=": map.zoomIn(); break;
        case "-": map.zoomOut(); break;
        default: break;
      }
    };

    const el = map.getContainer();
    el.addEventListener("wheel", wheelHandler);
    window.addEventListener("keydown", keyHandler);

    return () => {
      el.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("keydown", keyHandler);
    };
  }, [map, setShowHint]);

  return null;
}

export default function MapSection() {
  const [satellite, setSatellite] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="map-section">

      <div className="map-header">
        <span className="subhead"><span className="dot"></span> Find Us</span>
        <h2 className="title">Visit Our Facility</h2>
        <p className="desc">
          Located in the heart of Hosur's industrial zone, easily accessible from Bangalore.
        </p>
      </div>

      <div className="map-container">

        {showHint && (
          <div className="zoom-hint">
            Use <b>Ctrl + Scroll</b> to zoom the map
          </div>
        )}

        <MapContainer center={factory} zoom={11} className="map">
          <MapController setShowHint={setShowHint} />

          <TileLayer
            attribution=""
            url={
              satellite
                ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }
          />

          <Marker position={factory} icon={markerIcon}>
            <Popup>HYA Tech Manufacturing</Popup>
          </Marker>
        </MapContainer>

        {/* FLOAT CARD */}
        <div className="info-card">
          <div className="title-row">
            <span className="live-dot"></span>
            <h4>HYA Tech Manufacturing</h4>
          </div>

          <div className="address-row">
            <span className="addr-icon">📍</span>
            <p className="small">Plot 122, SIDCO Industrial Estate, Hosur</p>
          </div>

          <div className="info-row">
            <span className="blue">⏰    </span>
            <span>Mon–Sat : 9AM–6PM</span>
          </div>

          <div className="info-row1">
            <span className="blue">📞</span>
            <span className="small">Contact For Appointment</span>
          </div>

         <button
  onClick={() =>
    window.open(
      "https://www.google.com/maps/search/?api=1&query=SIDCO+Industrial+Estate+Sipcot+Phase+1+Hosur+Tamil+Nadu+635126",
      "_blank"
    )
  }
>
  Get Directions 🧭 →
</button>
        </div>

        {/* DISTANCE CARDS */}
        <div className="distance-cards">

          <div className="card">
            <div className="icon-svg">✈</div>
            <div className="card-text">
              <h3>45 km</h3>
              <p>from Bangalore Airport</p>
            </div>
          </div>

          <div className="card">
            <div className="icon-svg">🚆</div>
            <div className="card-text">
              <h3>5 km</h3>
              <p>from Railway Station</p>
            </div>
          </div>

          <div className="card">
            <div className="icon-svg">🚗</div>
            <div className="card-text">
              <h3>40 min</h3>
              <p>from Bangalore</p>
            </div>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="map-buttons">
          <button className="btn" onClick={() => setSatellite(!satellite)}>
            {satellite ? "🗺" : "🛰"}
          </button>
        </div>

        <button
          className="btn camera-right"
          onClick={() => setShowControls(!showControls)}
        >
          ⌘
        </button>

        {showControls && (
          <div className="controls">
            <p className="hint-title">Keyboard Shortcuts</p>
            <p>← → ↑ ↓ : Move</p>
            <p>+ / - : Zoom</p>
          </div>
        )}

      </div>
    </div>
  );
}