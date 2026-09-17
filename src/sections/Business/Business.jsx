import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Business.css";

const businessAreas = [
  {
    id: "batteries",
    number: "01",
    title: "Industrial",
    highlight: "Batteries",
    description:
      "Advanced battery technologies and energy solutions engineered for demanding industrial applications.",
    technologies: [
      "Lead Acid",
      "Nickel Cadmium",
      "Lithium",
      "Energy Storage",
    ],
  },
  {
    id: "defence",
    number: "02",
    title: "Defence",
    highlight: "Systems",
    description:
      "Specialized technologies supporting demanding defence and strategic applications.",
    technologies: [
      "Defence Batteries",
      "Specialized Systems",
      "Electronic Fuzes",
      "Mission Applications",
    ],
  },
  {
    id: "electronics",
    number: "03",
    title: "Industrial",
    highlight: "Electronics",
    description:
      "Engineering solutions spanning railway electronics, power electronics and electric mobility.",
    technologies: [
      "Rail Signalling",
      "Kavach",
      "Power Electronics",
      "Electric Drivetrains",
    ],
  },
];

export default function Business() {

  const [active, setActive] = useState("batteries");

  return (
    <section className="business" id="solutions">

      <div className="container">

        {/* HEADER */}

        <div className="business-header">

          <div>

            <span className="section-eyebrow">
              HBL ENGINEERING
            </span>

            <h2>
              THREE WORLDS.
              <br />

              <span>ONE ENGINEERING DNA.</span>
            </h2>

          </div>

          <p>
            Technology, engineering and manufacturing
            capabilities brought together to solve
            demanding real-world challenges.
          </p>

        </div>


        {/* CARDS */}

        <div className="business-grid">

          {businessAreas.map((business, index) => {

            const isActive =
              active === business.id;

            return (

              <motion.article
                key={business.id}
                className={
                  isActive
                    ? "business-card active"
                    : "business-card"
                }
                onMouseEnter={() =>
                  setActive(business.id)
                }
                onClick={() =>
                  setActive(business.id)
                }
                layout
              >

                {/* BACKGROUND */}

                <div className="business-card-bg">
                  <div className="business-pattern" />
                </div>


                {/* NUMBER */}

                <div className="business-number">
                  {business.number}
                </div>


                {/* CONTENT */}

                <div className="business-content">

                  <div>

                    <h3>
                      {business.title}

                      <br />

                      <span>
                        {business.highlight}
                      </span>
                    </h3>

                    <motion.p
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.55,
                      }}
                    >
                      {business.description}
                    </motion.p>

                  </div>


                  {/* TECHNOLOGIES */}

                  <motion.div
                    className="business-tech"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0.45,
                      y: isActive ? 0 : 10,
                    }}
                  >

                    {business.technologies.map(
                      (technology) => (

                        <span key={technology}>
                          {technology}
                        </span>

                      )
                    )}

                  </motion.div>


                  {/* CTA */}

                  <a
                    href={`#${business.id}`}
                    className="business-link"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                  >

                    Explore

                    <ArrowUpRight size={17} />

                  </a>

                </div>

              </motion.article>

            );
          })}

        </div>


        {/* BOTTOM STATEMENT */}

        <div className="business-bottom">

          <span>
            ENGINEERED IN INDIA
          </span>

          <span>
            BUILT FOR THE WORLD
          </span>

          <span>
            DESIGNED FOR WHAT'S NEXT
          </span>

        </div>

      </div>

    </section>
  );
}