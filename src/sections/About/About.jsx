import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Factory,
  Globe2,
  ShieldCheck,
  Lightbulb,
  UsersRound,
  Target,
  Award,
} from "lucide-react";

import "./About.css";

const capabilities = [
  {
    number: "01",
    title: "ENGINEERING",
    description:
      "Engineering-led thinking focused on solving complex requirements across demanding applications.",
    icon: Factory,
  },
  {
    number: "02",
    title: "TECHNOLOGY",
    description:
      "Technology and innovation brought together to develop reliable solutions for evolving industries.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "RELIABILITY",
    description:
      "Solutions designed around performance, consistency and the requirements of mission-critical environments.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "COLLABORATION",
    description:
      "Working with customers, partners and multidisciplinary teams to turn requirements into solutions.",
    icon: UsersRound,
  },
];

const principles = [
  {
    number: "01",
    title: "CUSTOMER FIRST",
    text:
      "Start with the application, understand the requirement and engineer around the problem.",
  },
  {
    number: "02",
    title: "ENGINEERING DEPTH",
    text:
      "Combine domain knowledge, technology and manufacturing capability to solve complex challenges.",
  },
  {
    number: "03",
    title: "LONG-TERM THINKING",
    text:
      "Build solutions with reliability, maintainability and real-world performance in mind.",
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="about-background">
        <div className="about-grid"></div>
        <div className="about-glow"></div>

        <div className="about-watermark">
          HBL
        </div>
      </div>

      <div className="container about-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="about-header">
          <div className="about-heading">

            <span className="about-kicker">
              ABOUT / HBL ENGINEERING
            </span>

            <h2>
              BUILT ON
              <br />
              <span>ENGINEERING.</span>
            </h2>

          </div>

          <div className="about-header-copy">

            <div className="about-header-line"></div>

            <p>
              HBL brings together engineering,
              technology and manufacturing
              capabilities to address demanding
              real-world applications.
            </p>

          </div>
        </div>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <div className="about-introduction">

          <div className="about-intro-label">
            <span>01 / WHO WE ARE</span>
          </div>

          <div className="about-intro-content">

            <h3>
              TECHNOLOGY
              <br />
              WITH A
              <br />
              <em>PURPOSE.</em>
            </h3>

            <div className="about-intro-text">

              <p className="about-intro-large">
                HBL is an engineering-driven
                organization working across
                energy, electronics, defence and
                other demanding industrial
                applications.
              </p>

              <p>
                From energy storage and industrial
                batteries to electronics and
                specialized engineering systems,
                the focus is on developing solutions
                that perform where reliability
                matters.
              </p>

              <a
                href="#solutions"
                className="about-explore-link"
              >
                Explore our solutions
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>

        {/* =====================================================
            VISUAL ENGINEERING BLOCK
        ===================================================== */}

        <div className="about-visual">

          <div className="about-visual-grid"></div>

          <div className="about-visual-orbit orbit-a"></div>
          <div className="about-visual-orbit orbit-b"></div>
          <div className="about-visual-orbit orbit-c"></div>

          <div className="about-visual-core">

            <div className="about-core-ring"></div>

            <div className="about-core-center">
              <span>HBL</span>
              <strong>ENGINEERING</strong>
            </div>

          </div>

          <div className="about-visual-node node-a">
            <span></span>
            <label>ENERGY</label>
          </div>

          <div className="about-visual-node node-b">
            <span></span>
            <label>ELECTRONICS</label>
          </div>

          <div className="about-visual-node node-c">
            <span></span>
            <label>DEFENCE</label>
          </div>

          <div className="about-visual-node node-d">
            <span></span>
            <label>ENGINEERING</label>
          </div>

          <div className="about-visual-caption">
            <span>HBL / ENGINEERING DNA</span>

            <strong>
              TECHNOLOGY
              <br />
              THAT PERFORMS.
            </strong>
          </div>

        </div>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <div className="about-capabilities">

          <div className="about-section-heading">

            <div>
              <span>02 / OUR CAPABILITIES</span>

              <h3>
                MORE THAN
                <br />
                <strong>PRODUCTS.</strong>
              </h3>
            </div>

            <p>
              A connected approach to engineering,
              technology and manufacturing helps
              transform complex requirements into
              practical solutions.
            </p>

          </div>

          <div className="about-capability-grid">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className="about-capability-card"
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >

                  <div className="capability-top">

                    <span>
                      {item.number}
                    </span>

                    <Icon size={21} />

                  </div>

                  <div className="capability-icon">
                    <Icon size={27} />
                  </div>

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.description}
                  </p>

                  <div className="capability-line"></div>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            MISSION / VISION
        ===================================================== */}

        <div className="about-mission">

          <div className="mission-left">

            <span>
              03 / PURPOSE
            </span>

            <h3>
              ENGINEERING
              <br />
              <em>FOR THE REAL WORLD.</em>
            </h3>

          </div>

          <div className="mission-right">

            <div className="mission-item">

              <div className="mission-icon">
                <Target size={20} />
              </div>

              <div>
                <span>OUR APPROACH</span>

                <p>
                  Understand the problem first.
                  Engineer the right solution.
                  Build for the application.
                </p>
              </div>

            </div>

            <div className="mission-item">

              <div className="mission-icon">
                <Globe2 size={20} />
              </div>

              <div>
                <span>OUR OUTLOOK</span>

                <p>
                  Combine engineering expertise
                  with evolving technologies to
                  address the needs of industries
                  that keep the world moving.
                </p>
              </div>

            </div>

            <div className="mission-item">

              <div className="mission-icon">
                <Award size={20} />
              </div>

              <div>
                <span>OUR STANDARD</span>

                <p>
                  Focus on quality, reliability and
                  long-term value across the
                  engineering lifecycle.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            PRINCIPLES
        ===================================================== */}

        <div className="about-principles">

          <div className="principles-heading">

            <span>
              04 / HOW WE THINK
            </span>

            <h3>
              ONE PURPOSE.
              <br />
              <strong>DIFFERENT PERSPECTIVES.</strong>
            </h3>

          </div>

          <div className="principles-list">

            {principles.map((principle) => (
              <div
                className="principle-row"
                key={principle.number}
              >

                <span className="principle-number">
                  {principle.number}
                </span>

                <h4>
                  {principle.title}
                </h4>

                <p>
                  {principle.text}
                </p>

                <ArrowUpRight
                  size={18}
                />

              </div>
            ))}

          </div>

        </div>

        {/* =====================================================
            COMPANY STATEMENT
        ===================================================== */}

        <div className="about-statement">

          <div className="statement-top">
            <span>
              HBL / DIGITAL EXPERIENCE
            </span>

            <span>
              05 / THE BIGGER PICTURE
            </span>
          </div>

          <h3>
            FROM ENERGY
            <br />
            TO <em>ENGINEERING.</em>
            <br />
            FROM TODAY
            <br />
            TO WHAT'S NEXT.
          </h3>

          <div className="statement-bottom">

            <p>
              Explore the technologies,
              industries and capabilities behind
              HBL's engineering ecosystem.
            </p>

            <a
              href="#technologies"
              className="statement-link"
            >
              Discover our technology
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}