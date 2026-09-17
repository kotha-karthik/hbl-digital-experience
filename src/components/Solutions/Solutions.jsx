import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  Shield,
  TrainFront,
  Zap,
  Cpu,
  CarFront,
  Factory,
  ChevronRight,
} from "lucide-react";

import "./Solutions.css";

const solutions = [
  {
    number: "01",
    title: "ENERGY STORAGE",
    short: "Energy",
    description:
      "Engineered energy storage solutions for applications where dependable power and system integration matter.",
    icon: BatteryCharging,
    tags: [
      "Battery Systems",
      "Energy Storage",
      "Power Backup",
    ],
  },
  {
    number: "02",
    title: "DEFENCE SYSTEMS",
    short: "Defence",
    description:
      "Specialized power and electronics solutions designed for demanding defence applications.",
    icon: Shield,
    tags: [
      "Defence Batteries",
      "Electronics",
      "Mission Systems",
    ],
  },
  {
    number: "03",
    title: "RAILWAY SOLUTIONS",
    short: "Railways",
    description:
      "Power, electronics and engineered systems supporting modern railway applications.",
    icon: TrainFront,
    tags: [
      "Railway Electronics",
      "Train Systems",
      "Battery Systems",
    ],
  },
  {
    number: "04",
    title: "INDUSTRIAL POWER",
    short: "Industry",
    description:
      "Industrial power technologies engineered for demanding environments and critical infrastructure.",
    icon: Zap,
    tags: [
      "Industrial Batteries",
      "Power Electronics",
      "Critical Power",
    ],
  },
  {
    number: "05",
    title: "ELECTRONICS",
    short: "Electronics",
    description:
      "Technology solutions spanning railway, industrial and specialized electronics applications.",
    icon: Cpu,
    tags: [
      "Control Systems",
      "Railway Electronics",
      "Industrial Electronics",
    ],
  },
  {
    number: "06",
    title: "E-MOBILITY",
    short: "Mobility",
    description:
      "Integrated electrification technologies combining batteries, motors, controllers and charging systems.",
    icon: CarFront,
    tags: [
      "Battery Systems",
      "Motors",
      "Controllers",
    ],
  },
];

const applicationAreas = [
  "Aviation",
  "Railways",
  "Defence",
  "Oil & Gas",
  "Power",
  "Telecom",
  "Data Centers",
  "E-Mobility",
];

export default function Solutions() {
  return (
    <section className="solutions" id="solutions">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="solutions-background">
        <div className="solutions-grid"></div>
        <div className="solutions-glow"></div>

        <div className="solutions-watermark">
          SOLUTIONS
        </div>
      </div>

      <div className="container solutions-container">

        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="solutions-hero">

          <div className="solutions-hero-left">

            <span className="solutions-kicker">
              SOLUTIONS / HBL ENGINEERING
            </span>

            <h1>
              ENGINEERED
              <br />
              FOR
              <br />
              <em>WHAT MATTERS.</em>
            </h1>

          </div>

          <div className="solutions-hero-right">

            <div className="solutions-hero-line"></div>

            <p>
              From energy storage and industrial power
              to railway, defence and e-mobility
              applications, HBL develops engineering
              solutions around demanding real-world
              requirements.
            </p>

            <a
              href="#solution-grid"
              className="solutions-scroll-link"
            >
              Explore solutions
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

        {/* =====================================================
            INTRO STRIP
        ===================================================== */}

        <div className="solutions-intro">

          <div className="solutions-intro-number">
            01
          </div>

          <div className="solutions-intro-heading">
            <span>
              THE HBL APPROACH
            </span>

            <h2>
              START WITH
              <br />
              THE <strong>CHALLENGE.</strong>
            </h2>
          </div>

          <div className="solutions-intro-copy">
            <p>
              The right engineering solution begins
              with understanding the application.
              HBL's technology portfolio can be
              brought together around the requirements
              of the customer and the environment
              in which the system operates.
            </p>
          </div>

        </div>

        {/* =====================================================
            SOLUTIONS GRID
        ===================================================== */}

        <div
          className="solutions-grid-section"
          id="solution-grid"
        >

          <div className="solutions-section-header">

            <div>
              <span>
                02 / SOLUTION AREAS
              </span>

              <h2>
                BUILT AROUND
                <br />
                <strong>THE APPLICATION.</strong>
              </h2>
            </div>

            <p>
              Explore the engineering capabilities
              that can be connected across different
              applications and industries.
            </p>

          </div>

          <div className="solution-cards">

            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.article
                  className="solution-card"
                  key={solution.number}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.18,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                >

                  <div className="solution-card-top">

                    <span>
                      {solution.number}
                    </span>

                    <ArrowUpRight
                      size={17}
                    />

                  </div>

                  <div className="solution-card-visual">

                    <div className="solution-orbit orbit-1"></div>
                    <div className="solution-orbit orbit-2"></div>

                    <div className="solution-card-icon">
                      <Icon
                        size={42}
                        strokeWidth={1.15}
                      />
                    </div>

                  </div>

                  <div className="solution-card-content">

                    <span className="solution-card-short">
                      {solution.short}
                    </span>

                    <h3>
                      {solution.title}
                    </h3>

                    <p>
                      {solution.description}
                    </p>

                    <div className="solution-tags">

                      {solution.tags.map(
                        (tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                  <a
                    href="#contact"
                    className="solution-card-link"
                  >
                    Discuss this solution
                    <ChevronRight size={16} />
                  </a>

                  <div className="solution-card-line"></div>

                </motion.article>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            INDUSTRIES
        ===================================================== */}

        <div className="solutions-industries">

          <div className="solutions-industries-heading">

            <span>
              03 / APPLICATIONS
            </span>

            <h2>
              WHERE
              <br />
              <strong>ENGINEERING</strong>
              <br />
              MEETS REALITY.
            </h2>

          </div>

          <div className="solutions-industries-content">

            <p>
              HBL's engineering capabilities support
              demanding applications across sectors
              where reliability, performance and
              technology depth are critical.
            </p>

            <div className="application-list">

              {applicationAreas.map(
                (application, index) => (
                  <a
                    href="#industries"
                    className="application-item"
                    key={application}
                  >
                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {application}
                    </strong>

                    <ArrowUpRight
                      size={15}
                    />
                  </a>
                )
              )}

            </div>

          </div>

        </div>

        {/* =====================================================
            ENGINEERING CTA
        ===================================================== */}

        <div className="solutions-engineering">

          <div className="engineering-visual">

            <div className="engineering-grid"></div>

            <div className="engineering-rings ring-a"></div>
            <div className="engineering-rings ring-b"></div>
            <div className="engineering-rings ring-c"></div>

            <div className="engineering-core">

              <Factory
                size={42}
                strokeWidth={1.1}
              />

              <span>
                ENGINEERING
              </span>

            </div>

          </div>

          <div className="engineering-content">

            <span>
              04 / BEYOND THE PRODUCT
            </span>

            <h2>
              FROM
              <br />
              REQUIREMENT
              <br />
              TO <em>SOLUTION.</em>
            </h2>

            <p>
              HBL's engineering approach combines
              technology, application knowledge and
              manufacturing capability to develop
              solutions for demanding environments.
            </p>

            <a
              href="#engineering"
              className="engineering-link"
            >
              Explore engineering
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <div className="solutions-final">

          <span>
            HBL / DIGITAL EXPERIENCE
          </span>

          <h2>
            HAVE A
            <br />
            <em>CHALLENGE?</em>
          </h2>

          <p>
            Tell us what you are trying to solve
            and explore how the right engineering
            capability can come together around it.
          </p>

          <a
            href="#contact"
            className="solutions-final-button"
          >
            Talk to HBL
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}