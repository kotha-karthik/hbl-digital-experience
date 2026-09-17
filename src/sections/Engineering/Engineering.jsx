import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Boxes,
  FlaskConical,
  Factory,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

import "./Engineering.css";

const stages = [
  {
    number: "01",
    title: "Research",
    label: "DISCOVER",
    description:
      "Understanding demanding applications, engineering challenges and emerging technology requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    label: "ENGINEER",
    description:
      "Transforming requirements into engineered concepts through design, analysis and development.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Prototype",
    label: "CREATE",
    description:
      "Turning engineering concepts into working prototypes for evaluation and refinement.",
    icon: Boxes,
  },
  {
    number: "04",
    title: "Testing",
    label: "VALIDATE",
    description:
      "Testing products and systems against demanding performance and reliability requirements.",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Manufacturing",
    label: "BUILD",
    description:
      "Moving validated engineering solutions into controlled, scalable manufacturing.",
    icon: Factory,
  },
  {
    number: "06",
    title: "Deployment",
    label: "DELIVER",
    description:
      "Delivering engineered solutions into real-world applications where reliability matters.",
    icon: Rocket,
  },
];

export default function Engineering() {
  return (
    <section className="engineering" id="engineering">

      <div className="container">

        {/* HEADER */}

        <div className="engineering-header">

          <div>

            <span className="engineering-eyebrow">
              ENGINEERING DNA
            </span>

            <h2>
              FROM IDEA
              <br />
              <span>TO IMPACT.</span>
            </h2>

          </div>

          <div className="engineering-intro">

            <p>
              Engineering is at the heart of HBL's approach —
              from understanding complex requirements to
              developing and delivering specialized solutions.
            </p>

            <a href="#technology" className="engineering-link">
              Explore technology
              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>


        {/* PROCESS */}

        <div className="engineering-process">

          <div className="engineering-line">
            <motion.div
              className="engineering-progress"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>


          <div className="engineering-stages">

            {stages.map((stage, index) => {

              const Icon = stage.icon;

              return (
                <motion.article
                  className="engineering-stage"
                  key={stage.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                >

                  {/* NUMBER */}

                  <div className="stage-top">

                    <span>
                      {stage.number}
                    </span>

                    <span className="stage-label">
                      {stage.label}
                    </span>

                  </div>


                  {/* ICON */}

                  <div className="stage-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>


                  {/* TITLE */}

                  <h3>
                    {stage.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p>
                    {stage.description}
                  </p>


                  {/* ARROW */}

                  <div className="stage-arrow">
                    <ArrowUpRight size={17} />
                  </div>

                </motion.article>
              );
            })}

          </div>

        </div>


        {/* BOTTOM STATEMENT */}

        <motion.div
          className="engineering-bottom"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <span>
            ENGINEERING × TECHNOLOGY × MANUFACTURING
          </span>

          <p>
            Building specialized solutions for applications
            where performance, reliability and precision matter.
          </p>

        </motion.div>

      </div>

    </section>
  );
}