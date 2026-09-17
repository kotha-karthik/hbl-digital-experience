import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Send,
} from "lucide-react";

import "./Contact.css";

const enquiryTypes = [
  "Product / Solution Enquiry",
  "Business Enquiry",
  "Partnership",
  "Careers",
  "General Enquiry",
];

const industries = [
  "Defence",
  "Railways",
  "Aviation",
  "Energy",
  "Telecom",
  "Data Centers",
  "Oil & Gas",
  "E-Mobility",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiry: "",
    industry: "",
    message: "",
  });

  const [submitted, setSubmitted] =
    useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prototype only.
    // Connect this to the actual backend/form service later.
    setSubmitted(true);
  };

  return (
    <section
      className="contact"
      id="contact"
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="contact-background">
        <div className="contact-grid"></div>
        <div className="contact-glow"></div>

        <div className="contact-watermark">
          HBL
        </div>
      </div>

      <div className="container contact-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="contact-header">

          <div>
            <span className="contact-kicker">
              CONTACT / HBL ENGINEERING
            </span>

            <h2>
              LET'S BUILD
              <br />
              <span>WHAT'S NEXT.</span>
            </h2>
          </div>

          <div className="contact-header-copy">

            <span className="contact-header-line"></span>

            <p>
              Tell us what you are trying to solve.
              Our teams can help connect your
              requirement with the right engineering
              capability.
            </p>

          </div>

        </div>

        {/* =========================
            CONTACT LAYOUT
        ========================= */}

        <div className="contact-layout">

          {/* =====================
              LEFT INFORMATION
          ===================== */}

          <div className="contact-info">

            <div className="contact-info-header">

              <span>
                START A CONVERSATION
              </span>

              <h3>
                ENGINEERING
                <br />
                STARTS WITH
                <br />
                A QUESTION.
              </h3>

            </div>

            {/* CONTACT CARDS */}

            <div className="contact-methods">

              <a
                href="mailto:contact@hbl.in"
                className="contact-method"
              >

                <div className="contact-method-icon">
                  <Mail size={19} />
                </div>

                <div>
                  <span>EMAIL</span>

                  <strong>
                    contact@hbl.in
                  </strong>
                </div>

                <ArrowUpRight
                  size={17}
                />

              </a>

              <div className="contact-method">

                <div className="contact-method-icon">
                  <Phone size={19} />
                </div>

                <div>
                  <span>CONTACT</span>

                  <strong>
                    Connect with HBL
                  </strong>
                </div>

                <ArrowUpRight
                  size={17}
                />

              </div>

              <div className="contact-method">

                <div className="contact-method-icon">
                  <Building2 size={19} />
                </div>

                <div>
                  <span>
                    CORPORATE
                  </span>

                  <strong>
                    HBL Engineering
                  </strong>
                </div>

                <ArrowUpRight
                  size={17}
                />

              </div>

            </div>

            {/* LOCATION */}

            <div className="contact-location">

              <div className="location-icon">
                <MapPin size={18} />
              </div>

              <div>

                <span>
                  CORPORATE LOCATION
                </span>

                <strong>
                  Hyderabad, India
                </strong>

                <p>
                  Connect with the appropriate HBL
                  team for your requirement.
                </p>

              </div>

            </div>

            {/* SIDE STATEMENT */}

            <div className="contact-side-statement">

              <span>
                HBL / DIGITAL EXPERIENCE
              </span>

              <strong>
                ENERGY
                <br />
                ELECTRONICS
                <br />
                ENGINEERING
              </strong>

            </div>

          </div>

          {/* =====================
              FORM
          ===================== */}

          <div className="contact-form-wrapper">

            {!submitted ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-top">

                  <span>
                    ENQUIRY FORM
                  </span>

                  <span>
                    STEP 01 / 01
                  </span>

                </div>

                {/* NAME + COMPANY */}

                <div className="form-row">

                  <div className="form-field">

                    <label htmlFor="name">
                      YOUR NAME
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="form-field">

                    <label htmlFor="company">
                      COMPANY
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                {/* EMAIL + PHONE */}

                <div className="form-row">

                  <div className="form-field">

                    <label htmlFor="email">
                      EMAIL
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="form-field">

                    <label htmlFor="phone">
                      PHONE
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                {/* ENQUIRY + INDUSTRY */}

                <div className="form-row">

                  <div className="form-field">

                    <label htmlFor="enquiry">
                      ENQUIRY TYPE
                    </label>

                    <div className="select-wrapper">

                      <select
                        id="enquiry"
                        name="enquiry"
                        value={formData.enquiry}
                        onChange={handleChange}
                        required
                      >

                        <option value="">
                          Select enquiry
                        </option>

                        {enquiryTypes.map(
                          (type) => (
                            <option
                              key={type}
                              value={type}
                            >
                              {type}
                            </option>
                          )
                        )}

                      </select>

                      <ChevronDown
                        size={16}
                      />

                    </div>

                  </div>

                  <div className="form-field">

                    <label htmlFor="industry">
                      INDUSTRY
                    </label>

                    <div className="select-wrapper">

                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                      >

                        <option value="">
                          Select industry
                        </option>

                        {industries.map(
                          (industry) => (
                            <option
                              key={industry}
                              value={industry}
                            >
                              {industry}
                            </option>
                          )
                        )}

                      </select>

                      <ChevronDown
                        size={16}
                      />

                    </div>

                  </div>

                </div>

                {/* MESSAGE */}

                <div className="form-field">

                  <label htmlFor="message">
                    TELL US ABOUT YOUR REQUIREMENT
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Briefly describe your requirement..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                </div>

                {/* SUBMIT */}

                <div className="form-submit-row">

                  <p>
                    By submitting this form,
                    you are requesting HBL to
                    contact you regarding your
                    enquiry.
                  </p>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send enquiry
                    <Send size={16} />
                  </button>

                </div>

              </form>
            ) : (
              <motion.div
                className="contact-success"
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
              >

                <div className="success-icon">
                  <Send size={25} />
                </div>

                <span>
                  ENQUIRY RECEIVED
                </span>

                <h3>
                  THANK YOU.
                </h3>

                <p>
                  Your enquiry has been captured
                  in this prototype. In the production
                  website, this action would connect
                  directly with HBL's enquiry system.
                </p>

                <button
                  onClick={() =>
                    setSubmitted(false)
                  }
                  className="success-reset"
                >
                  Submit another enquiry
                  <ArrowUpRight size={16} />
                </button>

              </motion.div>
            )}

          </div>

        </div>

        {/* =========================
            FINAL CTA
        ========================= */}

        <div className="contact-final">

          <span>
            ONE HBL
          </span>

          <h3>
            FROM
            <br />
            <em>CHALLENGE</em>
            <br />
            TO SOLUTION.
          </h3>

          <a
            href="#home"
            className="contact-final-link"
          >
            Back to top
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}