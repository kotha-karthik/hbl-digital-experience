import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Industries.css";

const industries = [
  {
    id: "defence",
    number: "01",
    title: "Defence",
    description:
      "Specialized energy and electronic solutions engineered for demanding defence applications.",
    tag: "MISSION CRITICAL",
    visual: "DEFENCE",
  },
  {
    id: "railways",
    number: "02",
    title: "Railways",
    description:
      "Power and electronic technologies supporting modern railway systems and infrastructure.",
    tag: "RAIL TECHNOLOGY",
    visual: "RAILWAYS",
  },
  {
    id: "aviation",
    number: "03",
    title: "Aviation",
    description:
      "Specialized technologies designed for demanding aviation applications.",
    tag: "AVIATION",
    visual: "AVIATION",
  },
  {
    id: "energy",
    number: "04",
    title: "Energy",
    description:
      "Energy storage and power solutions for critical infrastructure and industrial applications.",
    tag: "ENERGY",
    visual: "ENERGY",
  },
  {
    id: "telecom",
    number: "05",
    title: "Telecom",
    description:
      "Reliable power solutions supporting communications infrastructure.",
    tag: "CONNECTIVITY",
    visual: "TELECOM",
  },
  {
    id: "datacenters",
    number: "06",
    title: "Data Centers",
    description:
      "Power solutions designed for infrastructure where continuity matters.",
    tag: "DIGITAL INFRASTRUCTURE",
    visual: "DATA CENTERS",
  },
  {
    id: "oilgas",
    number: "07",
    title: "Oil & Gas",
    description:
      "Engineered power solutions for demanding industrial environments.",
    tag: "INDUSTRIAL",
    visual: "OIL & GAS",
  },
  {
    id: "emobility",
    number: "08",
    title: "E-Mobility",
    description:
      "Technology supporting the transition toward electric mobility.",
    tag: "ELECTRIC MOBILITY",
    visual: "E-MOBILITY",
  },
];

export default function Industries() {
  const [active, setActive] = useState(industries[0]);

  return (
    <section className="industries" id="industries">

      <div className="container">

        {/* HEADER */}

        <div className="industries-header">

          <div>
            <span className="section-eyebrow">
              DISCOVER HBL
            </span>

            <h2>
              WHAT ARE YOU
              <br />
              <span>POWERING?</span>
            </h2>
          </div>

          <p>
            Explore the industries and applications where
            HBL engineering solutions make a difference.
          </p>

        </div>


        {/* MAIN EXPERIENCE */}

        <div className="industry-experience">

          {/* VISUAL */}

          <div className="industry-visual">

            <div className="visual-grid" />

            <AnimatePresence mode="wait">

              <motion.div
                key={active.id}
                className="visual-content"
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.04,
                  y: -20,
                }}
                transition={{
                  duration: 0.45,
                }}
              >

                <span>
                  {active.number}
                </span>

                <strong>
                  {active.visual}
                </strong>

              </motion.div>

            </AnimatePresence>

            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-orbit orbit-three" />

          </div>


          {/* INFORMATION */}

          <div className="industry-information">

            <AnimatePresence mode="wait">

              <motion.div
                key={active.id}
                className="industry-copy"
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -25,
                }}
              >

                <span className="industry-tag">
                  {active.tag}
                </span>

                <h3>
                  {active.title}
                </h3>

                <p>
                  {active.description}
                </p>

                <a
                  href={`#${active.id}`}
                  className="industry-explore"
                >
                  Explore {active.title}
                  <ArrowUpRight size={18} />
                </a>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>


        {/* INDUSTRY SELECTOR */}

        <div className="industry-selector">

          {industries.map((industry) => (

            <button
              key={industry.id}
              className={
                active.id === industry.id
                  ? "industry-item active"
                  : "industry-item"
              }
              onMouseEnter={() => setActive(industry)}
              onClick={() => setActive(industry)}
            >

              <span>
                {industry.number}
              </span>

              <strong>
                {industry.title}
              </strong>

              <div className="industry-line" />

            </button>

          ))}

        </div>

      </div>

    </section>
  );
}