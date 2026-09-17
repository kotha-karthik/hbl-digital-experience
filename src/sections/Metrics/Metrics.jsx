import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Factory,
  Globe2,
  Layers3,
  UsersRound,
  ArrowUpRight,
} from "lucide-react";

import "./Metrics.css";

const metrics = [
  {
    value: 50,
    suffix: "+",
    label: "YEARS",
    description: "Engineering experience",
    icon: Factory,
  },
  {
    value: 4,
    suffix: "",
    label: "CORE DOMAINS",
    description: "Engineering capabilities",
    icon: Layers3,
  },
  {
    value: 8,
    suffix: "+",
    label: "INDUSTRIES",
    description: "Critical applications",
    icon: Globe2,
  },
  {
    value: 100,
    suffix: "+",
    label: "APPLICATIONS",
    description: "Across demanding environments",
    icon: UsersRound,
  },
];

function Counter({ value, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const duration = 1600;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      current = Math.floor(value * eased);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Metrics() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
  });

  return (
    <section
      ref={sectionRef}
      className="metrics"
      id="metrics"
    >
      <div className="metrics-background">
        <div className="metrics-grid"></div>

        <div className="metrics-glow"></div>

        <div className="metrics-number">
          01
        </div>
      </div>

      <div className="container metrics-container">

        {/* HEADER */}
        <div className="metrics-header">

          <div>
            <span className="metrics-kicker">
              HBL / AT A GLANCE
            </span>

            <h2>
              BUILT ON
              <br />
              <span>EXPERIENCE.</span>
            </h2>
          </div>

          <div className="metrics-header-copy">
            <span className="metrics-line"></span>

            <p>
              Engineering capability developed through
              decades of work across demanding
              industrial and infrastructure applications.
            </p>
          </div>

        </div>

        {/* METRICS */}
        <div className="metrics-grid-list">

          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.label}
                className="metric-card"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                <div className="metric-top">
                  <span>
                    0{index + 1}
                  </span>

                  <Icon size={20} />
                </div>

                <div className="metric-value">
                  <Counter
                    value={metric.value}
                    suffix={metric.suffix}
                    start={isInView}
                  />
                </div>

                <div className="metric-label">
                  {metric.label}
                </div>

                <p>
                  {metric.description}
                </p>

                <div className="metric-arrow">
                  <ArrowUpRight size={17} />
                </div>

                <div className="metric-progress">
                  <span></span>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* STATEMENT */}
        <motion.div
          className="metrics-statement"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
        >
          <span>
            ENGINEERING
          </span>

          <strong>
            MADE FOR
            <br />
            THE REAL WORLD.
          </strong>

          <span>
            TECHNOLOGY × EXPERIENCE
          </span>
        </motion.div>

      </div>
    </section>
  );
}