import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  UsersRound,
  Cpu,
  MapPin,
  ChevronRight,
} from "lucide-react";

import "./Careers.css";

const careerPaths = [
  {
    number: "01",
    title: "ENGINEERING",
    description:
      "Work on technologies and systems built for demanding real-world applications.",
    icon: Cpu,
  },
  {
    number: "02",
    title: "EARLY CAREERS",
    description:
      "Build your foundation through opportunities to learn, contribute and grow.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "PROFESSIONALS",
    description:
      "Bring your expertise to multidisciplinary engineering and technology teams.",
    icon: BriefcaseBusiness,
  },
];

const disciplines = [
  "Engineering",
  "Manufacturing",
  "Electronics",
  "Software & IT",
  "Research & Development",
  "Operations",
];

export default function Careers() {
  return (
    <section
      className="careers"
      id="careers"
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="careers-background">
        <div className="careers-grid"></div>

        <div className="careers-glow"></div>

        <div className="careers-watermark">
          HBL
        </div>
      </div>

      <div className="container careers-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="careers-header">

          <div className="careers-heading">

            <span className="careers-kicker">
              CAREERS / HBL ENGINEERING
            </span>

            <h2>
              BUILD WHAT
              <br />
              <span>MATTERS.</span>
            </h2>

          </div>

          <div className="careers-intro">

            <div className="careers-intro-icon">
              <UsersRound size={20} />
            </div>

            <p>
              Join teams working across engineering,
              technology and manufacturing to solve
              challenges that matter in the real world.
            </p>

          </div>

        </div>

        {/* =========================
            HERO CAREER PANEL
        ========================= */}

        <div className="careers-hero">

          <div className="careers-hero-visual">

            <div className="career-orbit orbit-one"></div>
            <div className="career-orbit orbit-two"></div>
            <div className="career-orbit orbit-three"></div>

            <div className="career-core">

              <div className="career-core-inner">
                <Cpu
                  size={46}
                  strokeWidth={1.2}
                />
              </div>

            </div>

            <div className="career-node career-node-one">
              <span></span>
            </div>

            <div className="career-node career-node-two">
              <span></span>
            </div>

            <div className="career-node career-node-three">
              <span></span>
            </div>

            <div className="career-visual-label">
              <span>HBL / PEOPLE</span>
              <strong>ENGINEERING THE FUTURE</strong>
            </div>

          </div>

          <div className="careers-hero-content">

            <span className="careers-hero-number">
              01 / CAREERS
            </span>

            <h3>
              Your work can power
              <br />
              something bigger.
            </h3>

            <p>
              Engineering is more than building products.
              It is about understanding complex problems,
              working with people across disciplines and
              creating solutions that perform in the
              real world.
            </p>

            <a
              href="#contact"
              className="careers-primary"
            >
              Explore opportunities
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

        {/* =========================
            CAREER PATHS
        ========================= */}

        <div className="careers-paths-header">

          <div>
            <span>
              FIND YOUR PATH
            </span>

            <h3>
              WHERE COULD
              <br />
              <strong>YOU MAKE AN IMPACT?</strong>
            </h3>
          </div>

          <p>
            Different perspectives, disciplines and
            experiences come together to build better
            engineering solutions.
          </p>

        </div>

        <div className="career-path-grid">

          {careerPaths.map(
            (path, index) => {
              const Icon = path.icon;

              return (
                <motion.a
                  href="#contact"
                  className="career-path-card"
                  key={path.number}
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
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                >

                  <div className="career-path-top">

                    <span>
                      {path.number}
                    </span>

                    <Icon size={20} />

                  </div>

                  <div className="career-path-icon">
                    <Icon size={28} />
                  </div>

                  <h4>
                    {path.title}
                  </h4>

                  <p>
                    {path.description}
                  </p>

                  <div className="career-path-link">
                    <span>
                      Explore
                    </span>

                    <ArrowUpRight size={16} />
                  </div>

                  <div className="career-card-line"></div>

                </motion.a>
              );
            }
          )}

        </div>

        {/* =========================
            DISCIPLINES
        ========================= */}

        <div className="career-disciplines">

          <div className="discipline-heading">

            <span>
              DISCIPLINES
            </span>

            <h3>
              MANY SKILLS.
              <br />
              <strong>ONE PURPOSE.</strong>
            </h3>

          </div>

          <div className="discipline-list">

            {disciplines.map(
              (discipline, index) => (
                <a
                  href="#contact"
                  key={discipline}
                  className="discipline-item"
                >

                  <span className="discipline-number">
                    0{index + 1}
                  </span>

                  <span className="discipline-name">
                    {discipline}
                  </span>

                  <ChevronRight
                    size={17}
                  />

                </a>
              )
            )}

          </div>

        </div>

        {/* =========================
            LOCATION / CTA
        ========================= */}

        <div className="careers-bottom">

          <div className="careers-location">

            <MapPin size={18} />

            <div>
              <span>
                CAREER OPPORTUNITIES
              </span>

              <strong>
                HBL ENGINEERING
              </strong>
            </div>

          </div>

          <div className="careers-bottom-copy">

            <p>
              Ready to build technology that has a
              real-world impact?
            </p>

            <a
              href="#contact"
              className="careers-bottom-link"
            >
              View opportunities
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

        {/* =========================
            FOOTER STATEMENT
        ========================= */}

        <div className="careers-statement">

          <span>
            PEOPLE × ENGINEERING
          </span>

          <strong>
            THE NEXT
            <br />
            <em>CHAPTER</em>
            STARTS HERE.
          </strong>

          <span>
            HBL DIGITAL EXPERIENCE
          </span>

        </div>

      </div>
    </section>
  );
}