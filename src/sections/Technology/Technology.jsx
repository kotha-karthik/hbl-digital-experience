import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  Cpu,
  Zap,
  TrainFront,
  Factory,
  Gauge,
} from "lucide-react";

import "./Technology.css";

const technologies = [
  {
    id: "lead-acid",
    number: "01",
    title: "Lead Acid",
    subtitle: "Proven energy storage",
    description:
      "High-reliability battery technology engineered for demanding industrial and infrastructure applications.",
    icon: BatteryCharging,
    specs: [
      ["Technology", "Lead Acid"],
      ["Application", "Industrial Power"],
      ["Focus", "Reliability"],
    ],
    applications: ["Power Backup", "Railways", "Telecom", "Industry"],
  },
  {
    id: "nickel-cadmium",
    number: "02",
    title: "Nickel Cadmium",
    subtitle: "Built for harsh environments",
    description:
      "Robust energy storage technology designed for applications where operational reliability and long service life matter.",
    icon: Gauge,
    specs: [
      ["Technology", "Ni-Cd"],
      ["Application", "Critical Power"],
      ["Focus", "Durability"],
    ],
    applications: ["Railways", "Defence", "Utilities", "Aviation"],
  },
  {
    id: "lithium",
    number: "03",
    title: "Lithium Solutions",
    subtitle: "Next-generation energy",
    description:
      "Modern energy-storage architectures designed around efficiency, intelligent monitoring and evolving electrification needs.",
    icon: Zap,
    specs: [
      ["Technology", "Lithium"],
      ["Architecture", "Modular"],
      ["Focus", "Energy Density"],
    ],
    applications: ["E-Mobility", "BESS", "Industry", "Data Centers"],
  },
  {
    id: "power-electronics",
    number: "04",
    title: "Power Electronics",
    subtitle: "Controlling energy intelligently",
    description:
      "Power conversion and electronic systems that connect energy sources with demanding real-world applications.",
    icon: Cpu,
    specs: [
      ["Domain", "Power Electronics"],
      ["Focus", "Conversion"],
      ["Architecture", "Electronic"],
    ],
    applications: ["Energy", "Railways", "Industry", "Defence"],
  },
  {
    id: "rail-technology",
    number: "05",
    title: "Rail Technology",
    subtitle: "Powering mobility",
    description:
      "Engineering systems developed around the demanding power requirements of railway infrastructure and rolling stock.",
    icon: TrainFront,
    specs: [
      ["Domain", "Rail"],
      ["Focus", "Mobility"],
      ["Environment", "Mission Critical"],
    ],
    applications: ["Metro", "Railways", "Transit", "Infrastructure"],
  },
  {
    id: "energy-storage",
    number: "06",
    title: "Energy Storage",
    subtitle: "Power when it matters",
    description:
      "Integrated energy-storage concepts connecting batteries, power electronics and intelligent energy management.",
    icon: Factory,
    specs: [
      ["Domain", "Energy Storage"],
      ["Architecture", "Integrated"],
      ["Focus", "Resilience"],
    ],
    applications: ["Renewables", "BESS", "Industry", "Grid"],
  },
];

export default function Technology() {
  const [activeId, setActiveId] = useState("lead-acid");

  const active =
    technologies.find((technology) => technology.id === activeId) ||
    technologies[0];

  const ActiveIcon = active.icon;

  return (
    <section className="technology" id="technologies">
      <div className="technology-bg">
        <div className="technology-grid" />
        <div className="technology-glow" />
      </div>

      <div className="technology-container container">

        {/* HEADER */}
        <div className="technology-header">
          <div>
            <span className="section-kicker">
              TECHNOLOGY PLATFORM
            </span>

            <h2>
              ENGINEERED
              <br />
              <span>AT THE CORE.</span>
            </h2>
          </div>

          <p>
            From energy storage to power electronics, HBL's
            technology ecosystem is designed around the
            requirements of demanding applications.
          </p>
        </div>

        {/* MAIN SHOWCASE */}
        <div className="technology-showcase">

          {/* LEFT NAV */}
          <div className="technology-list">
            <div className="technology-list-label">
              TECHNOLOGY
            </div>

            {technologies.map((technology) => {
              const Icon = technology.icon;
              const isActive = technology.id === activeId;

              return (
                <button
                  key={technology.id}
                  className={`technology-item ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => setActiveId(technology.id)}
                >
                  <span className="technology-number">
                    {technology.number}
                  </span>

                  <span className="technology-item-content">
                    <span className="technology-item-title">
                      {technology.title}
                    </span>

                    <span className="technology-item-subtitle">
                      {technology.subtitle}
                    </span>
                  </span>

                  <Icon size={18} />
                </button>
              );
            })}
          </div>

          {/* VISUAL */}
          <div className="technology-visual">

            <div className="technology-visual-top">
              <span>HBL / TECH</span>
              <span>{active.number} / 06</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="technology-core"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.15 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="tech-orbit tech-orbit-1" />
                <div className="tech-orbit tech-orbit-2" />
                <div className="tech-orbit tech-orbit-3" />

                <div className="tech-core-ring">
                  <div className="tech-core-inner">
                    <ActiveIcon size={62} strokeWidth={1.2} />
                  </div>
                </div>

                <div className="tech-node node-1" />
                <div className="tech-node node-2" />
                <div className="tech-node node-3" />
              </motion.div>
            </AnimatePresence>

            <div className="technology-visual-bottom">
              <span>ENGINEERING SYSTEM</span>

              <span className="tech-status">
                <i />
                ACTIVE TECHNOLOGY
              </span>
            </div>
          </div>

          {/* DETAILS */}
          <div className="technology-details">

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="technology-detail-icon">
                  <ActiveIcon size={22} />
                </div>

                <h3>{active.title}</h3>

                <p className="technology-detail-subtitle">
                  {active.subtitle}
                </p>

                <p className="technology-description">
                  {active.description}
                </p>

                {/* SPECS */}
                <div className="technology-specs">
                  {active.specs.map(([label, value]) => (
                    <div
                      className="technology-spec"
                      key={label}
                    >
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>

                {/* APPLICATIONS */}
                <div className="technology-applications">
                  <span className="applications-label">
                    APPLICATIONS
                  </span>

                  <div className="application-tags">
                    {active.applications.map((application) => (
                      <span key={application}>
                        {application}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#products"
                  className="technology-link"
                >
                  Explore related solutions
                  <ArrowUpRight size={17} />
                </a>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="technology-bottom">
          <span>ENERGY</span>
          <span>×</span>
          <span>ELECTRONICS</span>
          <span>×</span>
          <span>ENGINEERING</span>
          <span>×</span>
          <span>INTELLIGENCE</span>
        </div>

      </div>
    </section>
  );
}