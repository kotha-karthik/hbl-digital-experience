import { useMemo, useState } from "react";
import { ArrowUpRight, Search, SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import "./ProductExplorer.css";

const products = [
  {
    id: 1,
    name: "Industrial Lead Acid",
    category: "Lead Acid",
    technology: "Lead",
    industries: ["Energy", "Industrial", "Telecom"],
    description:
      "Industrial battery solutions for demanding stationary applications.",
    code: "LA / INDUSTRIAL",
  },
  {
    id: 2,
    name: "VRLA Batteries",
    category: "VRLA",
    technology: "Lead",
    industries: ["Telecom", "Data Centers", "Energy"],
    description:
      "Valve regulated lead acid solutions for critical power applications.",
    code: "VRLA / CRITICAL POWER",
  },
  {
    id: 3,
    name: "Nickel Cadmium",
    category: "Ni-Cd",
    technology: "Nickel Cadmium",
    industries: ["Railways", "Aviation", "Industrial"],
    description:
      "Nickel-cadmium battery technology for demanding operating environments.",
    code: "NI-CD / INDUSTRIAL",
  },
  {
    id: 4,
    name: "Lithium Solutions",
    category: "Lithium",
    technology: "Lithium",
    industries: ["Energy", "E-Mobility", "Industrial"],
    description:
      "Lithium-based energy solutions for modern power and mobility applications.",
    code: "LI / ENERGY",
  },
  {
    id: 5,
    name: "Railway Power Systems",
    category: "Railway",
    technology: "Electronics",
    industries: ["Railways"],
    description:
      "Power and electronic solutions supporting railway infrastructure.",
    code: "RAIL / ELECTRONICS",
  },
  {
    id: 6,
    name: "Defence Batteries",
    category: "Defence",
    technology: "Specialized",
    industries: ["Defence", "Aviation"],
    description:
      "Specialized battery solutions developed for demanding defence applications.",
    code: "DEF / MISSION CRITICAL",
  },
  {
    id: 7,
    name: "Energy Storage",
    category: "BESS",
    technology: "Lithium",
    industries: ["Energy", "Renewable Energy", "Data Centers"],
    description:
      "Energy storage solutions supporting modern power infrastructure.",
    code: "BESS / ENERGY STORAGE",
  },
  {
    id: 8,
    name: "Electric Drivetrains",
    category: "E-Mobility",
    technology: "Electronics",
    industries: ["E-Mobility", "Industrial"],
    description:
      "Electronic technologies supporting electric mobility applications.",
    code: "EV / DRIVETRAIN",
  },
];

const categories = [
  "All",
  "Lead Acid",
  "VRLA",
  "Ni-Cd",
  "Lithium",
  "Railway",
  "Defence",
  "BESS",
  "E-Mobility",
];

const technologies = [
  "All",
  "Lead",
  "Nickel Cadmium",
  "Lithium",
  "Electronics",
  "Specialized",
];

export default function ProductExplorer() {
  const [category, setCategory] = useState("All");
  const [technology, setTechnology] = useState("All");
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        category === "All" ||
        product.category === category;

      const technologyMatch =
        technology === "All" ||
        product.technology === technology;

      const searchValue = search.toLowerCase().trim();

      const searchMatch =
        !searchValue ||
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue) ||
        product.technology.toLowerCase().includes(searchValue) ||
        product.industries.some((industry) =>
          industry.toLowerCase().includes(searchValue)
        );

      return (
        categoryMatch &&
        technologyMatch &&
        searchMatch
      );
    });
  }, [category, technology, search]);

  const clearFilters = () => {
    setCategory("All");
    setTechnology("All");
    setSearch("");
  };

  return (
    <section
      className="product-explorer"
      id="products"
    >

      <div className="container">

        {/* HEADER */}

        <div className="product-header">

          <div>

            <span className="product-eyebrow">
              PRODUCT DISCOVERY
            </span>

            <h2>
              FIND YOUR
              <br />
              <span>SOLUTION.</span>
            </h2>

          </div>

          <p>
            Explore HBL's technology and solution
            portfolio by product family, technology
            or application.
          </p>

        </div>


        {/* SEARCH */}

        <div className="product-toolbar">

          <div className="product-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search products, technologies or industries..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="clear-search"
              >
                <X size={16} />
              </button>
            )}

          </div>


          <button
            className="filter-toggle"
            onClick={() =>
              setFilterOpen(!filterOpen)
            }
          >
            <SlidersHorizontal size={17} />

            Filters

            <span>
              {filteredProducts.length}
            </span>
          </button>

        </div>


        {/* FILTERS */}

        <AnimatePresence>

          {filterOpen && (

            <motion.div
              className="filter-panel"
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
            >

              <div className="filter-group">

                <span>
                  PRODUCT FAMILY
                </span>

                <div className="filter-options">

                  {categories.map((item) => (

                    <button
                      key={item}
                      className={
                        category === item
                          ? "filter-option active"
                          : "filter-option"
                      }
                      onClick={() =>
                        setCategory(item)
                      }
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>


              <div className="filter-group">

                <span>
                  TECHNOLOGY
                </span>

                <div className="filter-options">

                  {technologies.map((item) => (

                    <button
                      key={item}
                      className={
                        technology === item
                          ? "filter-option active"
                          : "filter-option"
                      }
                      onClick={() =>
                        setTechnology(item)
                      }
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>


              <button
                className="clear-filters"
                onClick={clearFilters}
              >
                Clear filters
              </button>

            </motion.div>

          )}

        </AnimatePresence>


        {/* RESULT COUNT */}

        <div className="product-results-header">

          <span>
            {filteredProducts.length}
            {" "}
            SOLUTIONS
          </span>

          {(category !== "All" ||
            technology !== "All" ||
            search) && (

            <button
              onClick={clearFilters}
            >
              Reset
            </button>

          )}

        </div>


        {/* PRODUCTS */}

        <motion.div
          layout
          className="product-grid"
        >

          <AnimatePresence mode="popLayout">

            {filteredProducts.map(
              (product, index) => (

                <motion.article
                  layout
                  key={product.id}
                  className="product-card"

                  initial={{
                    opacity: 0,
                    y: 30,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}

                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                >

                  {/* VISUAL */}

                  <div className="product-visual">

                    <div className="product-orbit" />

                    <div className="product-core" />

                    <span>
                      {product.code}
                    </span>

                  </div>


                  {/* CONTENT */}

                  <div className="product-content">

                    <div className="product-top">

                      <span>
                        {product.category}
                      </span>

                      <span>
                        {product.technology}
                      </span>

                    </div>

                    <h3>
                      {product.name}
                    </h3>

                    <p>
                      {product.description}
                    </p>


                    <div className="product-industries">

                      {product.industries
                        .slice(0, 3)
                        .map((industry) => (
                          <span key={industry}>
                            {industry}
                          </span>
                        ))}

                    </div>


                    <a
                      href={`#product-${product.id}`}
                      className="product-link"
                    >
                      Explore solution

                      <ArrowUpRight
                        size={17}
                      />
                    </a>

                  </div>

                </motion.article>

              )
            )}

          </AnimatePresence>

        </motion.div>


        {/* EMPTY */}

        {filteredProducts.length === 0 && (

          <div className="product-empty">

            <h3>
              No solutions found.
            </h3>

            <p>
              Try changing your search or filters.
            </p>

            <button
              onClick={clearFilters}
            >
              Reset search
            </button>

          </div>

        )}

      </div>

    </section>
  );
}