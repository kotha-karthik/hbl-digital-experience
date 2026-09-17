import { useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navItems = [
  "Solutions",
  "Industries",
  "Technologies",
  "Products",
  "Engineering",
  "About"
];

const getNavHref = (item) =>
  item === "Solutions" ? "/solutions" : `#${item.toLowerCase()}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar-inner container">

        {/* LOGO */}
        <a href="/" className="navbar-logo">
          HBL
          <span>ENGINEERING</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="navbar-links">

          {navItems.map((item) => (
            <a
              href={getNavHref(item)}
              key={item}
              className="navbar-link"
            >
              {item}
            </a>
          ))}

        </nav>

        {/* RIGHT */}
        <div className="navbar-actions">

          <button className="navbar-search">
            Search
          </button>

          <a href="#contact" className="navbar-contact">
            Talk to HBL
            <ArrowUpRight size={16} />
          </a>

          <button
            className="navbar-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        {navItems.map((item) => (
          <a
            key={item}
            href={getNavHref(item)}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}

        <a href="#contact">
          Talk to HBL →
        </a>

      </div>

    </header>
  );
}