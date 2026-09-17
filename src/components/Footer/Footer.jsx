import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  PlayCircle,
  ArrowUp,
} from "lucide-react";

import "./Footer.css";

const footerLinks = {
  Explore: [
    { label: "Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "Products", href: "#products" },
    { label: "Technologies", href: "#technologies" },
  ],

  Company: [
    { label: "About HBL", href: "#about" },
    { label: "Engineering", href: "#engineering" },
    { label: "Careers", href: "#careers" },
    { label: "News & Insights", href: "#news" },
  ],

  Connect: [
    { label: "Contact HBL", href: "#contact" },
    { label: "Talk to HBL", href: "#contact" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    icon: BriefcaseBusiness,
    href: "#",
  },
  {
    label: "Instagram",
    icon: Camera,
    href: "#",
  },
  {
    label: "YouTube",
    icon: PlayCircle,
    href: "#",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* =====================================================
          TOP CTA
      ===================================================== */}

      <div className="footer-cta">

        <div className="container footer-cta-inner">

          <div className="footer-cta-copy">

            <span>
              HBL / DIGITAL EXPERIENCE
            </span>

            <h2>
              LET'S BUILD
              <br />
              <em>WHAT'S NEXT.</em>
            </h2>

          </div>

          <a
            href="#contact"
            className="footer-cta-button"
          >
            Talk to HBL
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">

        <div className="container">

          <div className="footer-grid">

            {/* BRAND */}

            <div className="footer-brand">

              <a
                href="#home"
                className="footer-logo"
              >
                HBL
                <span>ENGINEERING</span>
              </a>

              <p>
                Engineering energy, electronics
                and technology solutions for
                demanding applications.
              </p>

              <div className="footer-brand-meta">
                <span>
                  ENERGY
                </span>

                <span>×</span>

                <span>
                  ELECTRONICS
                </span>

                <span>×</span>

                <span>
                  ENGINEERING
                </span>
              </div>

            </div>

            {/* LINKS */}

            <div className="footer-navigation">

              {Object.entries(footerLinks).map(
                ([title, links]) => (
                  <div
                    className="footer-column"
                    key={title}
                  >

                    <span className="footer-column-title">
                      {title}
                    </span>

                    <div className="footer-links">

                      {links.map((link) => (
                        <a
                          href={link.href}
                          key={link.label}
                        >
                          {link.label}

                          <ArrowUpRight
                            size={13}
                          />
                        </a>
                      ))}

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

          {/* =================================================
              NEWSLETTER / CONTACT STRIP
          ================================================= */}

          <div className="footer-contact-strip">

            <div>
              <span>
                START A CONVERSATION
              </span>

              <strong>
                contact@hbl.in
              </strong>
            </div>

            <a
              href="mailto:contact@hbl.in"
              className="footer-email-link"
            >
              Send an enquiry
              <ArrowUpRight size={16} />
            </a>

          </div>

          {/* =================================================
              BOTTOM
          ================================================= */}

          <div className="footer-bottom">

            <div className="footer-copyright">
              <span>
                © {new Date().getFullYear()} HBL
                ENGINEERING
              </span>

              <span>
                INDEPENDENT CONCEPT / DIGITAL
                EXPERIENCE
              </span>
            </div>

            <div className="footer-legal">
              <a href="#">
                Privacy
              </a>

              <a href="#">
                Terms
              </a>

              <a href="#">
                Accessibility
              </a>
            </div>

            <div className="footer-socials">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    href={social.href}
                    key={social.label}
                    aria-label={social.label}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}

            </div>

            <button
              className="footer-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>
                BACK TO TOP
              </span>

              <ArrowUp size={16} />
            </button>

          </div>

        </div>

      </div>

      {/* =====================================================
          WATERMARK
      ===================================================== */}

      <div className="footer-watermark">
        HBL
      </div>

    </footer>
  );
}