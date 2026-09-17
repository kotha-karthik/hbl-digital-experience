import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

import "./News.css";

const categories = [
  "ALL",
  "ENGINEERING",
  "TECHNOLOGY",
  "BUSINESS",
  "INSIGHTS",
];

const stories = [
  {
    id: 1,
    category: "ENGINEERING",
    date: "FEATURED",
    title:
      "Engineering solutions for the systems that keep the world moving.",
    description:
      "Explore the engineering thinking, technologies and applications behind mission-critical systems.",
    size: "large",
    visual: "engineering",
  },
  {
    id: 2,
    category: "TECHNOLOGY",
    date: "TECHNOLOGY",
    title:
      "The evolution of energy storage.",
    description:
      "From established battery technologies to emerging energy architectures.",
    size: "small",
    visual: "energy",
  },
  {
    id: 3,
    category: "BUSINESS",
    date: "BUSINESS",
    title:
      "Building technology for demanding industries.",
    description:
      "How engineering capability connects with real-world industrial requirements.",
    size: "small",
    visual: "industry",
  },
  {
    id: 4,
    category: "INSIGHTS",
    date: "INSIGHT",
    title:
      "Why reliability becomes an engineering discipline.",
    description:
      "A closer look at the design principles behind systems where failure is not an option.",
    size: "small",
    visual: "reliability",
  },
];

function StoryVisual({ type, large }) {
  return (
    <div
      className={`story-visual story-${type} ${
        large ? "large-visual" : ""
      }`}
    >
      <div className="story-grid"></div>

      {type === "engineering" && (
        <>
          <div className="engineering-machine">
            <div className="machine-ring ring-a"></div>
            <div className="machine-ring ring-b"></div>
            <div className="machine-core"></div>
            <div className="machine-line line-a"></div>
            <div className="machine-line line-b"></div>
          </div>

          <div className="visual-code">
            SYSTEM / 01
          </div>
        </>
      )}

      {type === "energy" && (
        <>
          <div className="energy-stack">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="energy-wave"></div>
        </>
      )}

      {type === "industry" && (
        <>
          <div className="industry-bars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="industry-line"></div>
        </>
      )}

      {type === "reliability" && (
        <>
          <div className="reliability-circle">
            <div></div>
          </div>

          <div className="reliability-cross"></div>
        </>
      )}

      <div className="story-visual-number">
        0{type === "engineering" ? 1 : type === "energy" ? 2 : type === "industry" ? 3 : 4}
      </div>
    </div>
  );
}

export default function News() {
  const [activeCategory, setActiveCategory] =
    useState("ALL");

  const filteredStories =
    activeCategory === "ALL"
      ? stories
      : stories.filter(
          (story) =>
            story.category === activeCategory
        );

  return (
    <section
      className="news"
      id="news"
    >
      <div className="news-background">
        <div className="news-grid"></div>
        <div className="news-glow"></div>
      </div>

      <div className="container news-container">

        {/* HEADER */}
        <div className="news-header">

          <div>
            <span className="news-kicker">
              HBL / NEWS & INSIGHTS
            </span>

            <h2>
              IDEAS
              <br />
              <span>IN MOTION.</span>
            </h2>
          </div>

          <div className="news-header-right">
            <p>
              Discover engineering perspectives,
              technology developments and stories
              from across the HBL ecosystem.
            </p>

            <a
              href="#news"
              className="news-all-link"
            >
              View all stories
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

        {/* FILTER */}
        <div className="news-filter">

          <span className="filter-label">
            FILTER BY
          </span>

          <div className="filter-buttons">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}

          </div>

        </div>

        {/* STORIES */}
        <AnimatePresence mode="popLayout">

          <motion.div
            className="news-grid-list"
            layout
          >

            {filteredStories.map(
              (story, index) => (
                <motion.article
                  key={story.id}
                  layout
                  className={`story-card ${
                    story.size === "large"
                      ? "story-card-large"
                      : ""
                  }`}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                >

                  <StoryVisual
                    type={story.visual}
                    large={
                      story.size === "large"
                    }
                  />

                  <div className="story-content">

                    <div className="story-meta">

                      <span>
                        {story.category}
                      </span>

                      <span>
                        <CalendarDays size={12} />
                        {story.date}
                      </span>

                    </div>

                    <h3>
                      {story.title}
                    </h3>

                    <p>
                      {story.description}
                    </p>

                    <a
                      href="#"
                      className="story-link"
                    >
                      Read story
                      <ChevronRight size={16} />
                    </a>

                  </div>

                </motion.article>
              )
            )}

          </motion.div>

        </AnimatePresence>

        {/* FOOTER LINE */}
        <div className="news-footer">

          <span>
            ENGINEERING / TECHNOLOGY /
            INDUSTRY / INSIGHT
          </span>

          <span>
            HBL DIGITAL EXPERIENCE
          </span>

        </div>

      </div>
    </section>
  );
}