import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {

  return (
    <section className="hero">

      {/* BACKGROUND */}
      <div className="hero-background">

        <div className="hero-grid" />

        <div className="hero-glow" />

      </div>

      {/* CONTENT */}

      <div className="hero-content container">

        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          HBL ENGINEERING
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.15
          }}
        >
          ENGINEERING
          <br />

          <span>
            WHAT MOVES
          </span>

          <br />

          THE WORLD.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.35
          }}
        >
          Technology-driven energy, electronics and
          engineering solutions for demanding applications.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5
          }}
        >

          <a href="#solutions" className="hero-primary">
            Explore solutions
            <ArrowUpRight size={18} />
          </a>

          <a href="#technology" className="hero-secondary">
            Discover our technology
          </a>

        </motion.div>

      </div>

      {/* BOTTOM */}

      <div className="hero-bottom container">

        <div className="hero-scroll">
          <ArrowDown size={16} />
          <span>SCROLL TO EXPLORE</span>
        </div>

        <div className="hero-meta">
          ENERGY · ELECTRONICS · DEFENCE
        </div>

      </div>

    </section>
  );
}