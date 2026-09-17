import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Globe2,
  Factory,
  Plane,
  TrainFront,
  Shield,
} from "lucide-react";

import "./GlobalPresence.css";

const regions = [
  {
    id: "india",
    number: "01",
    name: "India",
    title: "ENGINEERING FROM INDIA",
    description:
      "A technology and manufacturing ecosystem serving demanding engineering applications across multiple industries.",
    icon: Factory,
    locations: ["Hyderabad", "Manufacturing", "Engineering"],
    x: "48%",
    y: "54%",
  },
  {
    id: "asia",
    number: "02",
    name: "Asia",
    title: "CONNECTED ACROSS ASIA",
    description:
      "Engineering solutions supporting infrastructure, mobility, energy and industrial applications across the region.",
    icon: TrainFront,
    locations: ["Infrastructure", "Mobility", "Energy"],
    x: "67%",
    y: "48%",
  },
  {
    id: "middle-east",
    number: "03",
    name: "Middle East",
    title: "POWERING CRITICAL SYSTEMS",
    description:
      "Technology for environments where reliability, resilience and operational continuity are essential.",
    icon: Shield,
    locations: ["Energy", "Infrastructure", "Industry"],
    x: "58%",
    y: "57%",
  },
  {
    id: "global",
    number: "04",
    name: "Global",
    title: "ENGINEERING WITHOUT BORDERS",
    description:
      "A global outlook combining engineering capability, application knowledge and technology development.",
    icon: Globe2,
    locations: ["Engineering", "Technology", "Solutions"],
    x: "50%",
    y: "50%",
  },
];

export default function GlobalPresence() {
  const [activeId, setActiveId] = useState("india");

  const active =
    regions.find((region) => region.id === activeId) ||
    regions[0];

  const ActiveIcon = active.icon;

  return (
    <section
      className="global-presence"
      id="global"
    >
      <div className="global-bg">
        <div className="global-grid"></div>
        <div className="global-glow"></div>
      </div>

      <div className="container global-container">

        {/* HEADER */}
        <div className="global-header">

          <div>
            <span className="global-kicker">
              GLOBAL PRESENCE
            </span>

            <h2>
              ENGINEERING
              <br />
              <span>WITHOUT BORDERS.</span>
            </h2>
          </div>

          <div className="global-intro">
            <Globe2 size={22} />

            <p>
              Engineering capability built to support
              critical applications across markets,
              industries and infrastructure.
            </p>
          </div>

        </div>

        {/* MAIN */}
        <div className="global-layout">

          {/* MAP */}
          <div className="global-map">

            <div className="map-label map-label-top">
              GLOBAL ENGINEERING NETWORK
            </div>

            <div className="map-label map-label-bottom">
              00°00' N / 00°00' E
            </div>

            {/* ABSTRACT WORLD */}
            <div className="world-map">

              <div className="continent continent-1"></div>
              <div className="continent continent-2"></div>
              <div className="continent continent-3"></div>
              <div className="continent continent-4"></div>
              <div className="continent continent-5"></div>

              <div className="map-lines"></div>

              {regions.map((region) => (
                <button
                  key={region.id}
                  className={`map-point ${
                    region.id === activeId
                      ? "active"
                      : ""
                  }`}
                  style={{
                    left: region.x,
                    top: region.y,
                  }}
                  onClick={() =>
                    setActiveId(region.id)
                  }
                  aria-label={region.name}
                >
                  <span className="point-pulse"></span>
                  <span className="point-dot"></span>

                  <span className="point-label">
                    {region.name}
                  </span>
                </button>
              ))}

            </div>

            <div className="map-corner corner-tl">
              <span>LAT</span>
              <strong>GLOBAL</strong>
            </div>

            <div className="map-corner corner-br">
              <span>STATUS</span>
              <strong>CONNECTED</strong>
            </div>

          </div>

          {/* DETAILS */}
          <div className="global-details">

            <AnimatePresence mode="wait">

              <motion.div
                key={active.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.45,
                }}
              >

                <div className="global-detail-top">

                  <span>
                    REGION / {active.number}
                  </span>

                  <ActiveIcon size={22} />

                </div>

                <h3>
                  {active.title}
                </h3>

                <div className="global-region">
                  <MapPin size={15} />
                  {active.name}
                </div>

                <p className="global-description">
                  {active.description}
                </p>

                <div className="global-location-list">

                  {active.locations.map(
                    (location, index) => (
                      <div
                        key={location}
                        className="global-location"
                      >
                        <span>
                          0{index + 1}
                        </span>

                        <strong>
                          {location}
                        </strong>

                        <ArrowUpRight size={15} />
                      </div>
                    )
                  )}

                </div>

                <a
                  href="#contact"
                  className="global-link"
                >
                  Connect with HBL
                  <ArrowUpRight size={17} />
                </a>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="global-bottom">

          <div>
            <span>ENGINEERING</span>
            <strong>GLOBAL</strong>
          </div>

          <div>
            <span>APPROACH</span>
            <strong>LOCAL × GLOBAL</strong>
          </div>

          <div>
            <span>FOCUS</span>
            <strong>MISSION CRITICAL</strong>
          </div>

          <div>
            <span>CONNECT</span>
            <strong>HBL ENGINEERING</strong>
          </div>

        </div>

      </div>
    </section>
  );
}