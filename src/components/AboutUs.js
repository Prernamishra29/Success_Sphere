/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const AboutUs = () => {
  return (
    <section
      className="hero is-medium is-bold"
      style={{
        height: "100%",
        background: "linear-gradient(to right, #eef2f3, #8e9eab)",
        padding: "3rem 0",
      }}
      id="about"
    >
      <div
        className="hero-body columns is-vcentered"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        {/* Left Image Section */}
        <div
          className="column is-6"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://scodein.tech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://i.ibb.co/2qK1ZSc/intro.png"
              alt="student mantra"
              style={{
                borderRadius: "15px",
                width: "90%",
                maxWidth: "500px",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
              }}
            />
          </a>
        </div>

        {/* Right Content Section */}
        <div className="column is-6" style={{ paddingLeft: "2rem" }}>
          <div className="container">
            <h1
              className="title"
              style={{
                fontSize: "2.8rem",
                color: "#333",
                lineHeight: "1.4",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Wonder what/why we are? 😎
            </h1>
            <h2
              className="subtitle has-text-weight-semibold"
              style={{
                fontSize: "1.2rem",
                color: "#555",
                marginBottom: "1.5rem",
              }}
            >
              <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      marginRight: "10px",
                      color: "#007bff",
                    }}
                  >
                    🏢
                  </span>
                  Scodex is a product of SCI (Student Code In)
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      marginRight: "10px",
                      color: "#28a745",
                    }}
                  >
                    🎓
                  </span>
                  We aim to provide information about Campus Ambassador
                  programs, Scholarships, and Job Opportunities.
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      marginRight: "10px",
                      color: "#ff5722",
                    }}
                  >
                    🌟
                  </span>
                  Our goal is to empower every learner to connect with amazing
                  people and opportunities in the industry.
                </li>
              </ul>
            </h2>
            <a
              href="https://scodein.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="button is-primary is-rounded"
              style={{
                marginTop: "20px",
                padding: "12px 25px",
                fontSize: "1rem",
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                color: "#fff",
                transition: "background-color 0.3s ease, transform 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0056b3";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#007bff";
                e.target.style.transform = "scale(1)";
              }}
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
