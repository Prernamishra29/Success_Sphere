import React from "react";

const ContactUs = () => {
  return (
    <section
      className="hero is-medium is-bold"
      style={{
        height: "100%",
        backgroundColor: "#f9fafb", // Light gray background
        padding: "50px 20px", // Padding for spacing
      }}
    >
      <div className="hero-body">
        <div className="columns is-vcentered is-centered">
          {/* Left Column */}
          <div
            className="column is-12-mobile is-6-tablet is-5-desktop"
            style={{
              backgroundColor: "#ffffff", // White background for content box
              borderRadius: "10px", // Rounded corners
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
              padding: "30px", // Inner padding for content
              marginRight: "20px", // Spacing between columns
            }}
          >
            <h1
              className="title has-text-primary"
              style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}
            >
              Student Code-in <span role="img" aria-label="Scodein">🤩</span>
            </h1>
            <p className="subtitle has-text-weight-normal" style={{ fontSize: "1.125rem" }}>
              - The fast-evolving face of technology today sets higher demands
              for the massive crowd-pleasing field <strong>"OPEN SOURCE"</strong>.
            </p>
            <p className="subtitle has-text-weight-normal" style={{ fontSize: "1.125rem" }}>
              - Student Code-in is a global program to introduce
              university/pre-university students to open-source software
              development.
            </p>
            <p className="has-text-centered" style={{ marginTop: "20px" }}>
              <strong>Visit our website: </strong>
              <a
                href="https://scodein.tech"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1e88e5", 
                  textDecoration: "none", 
                  fontWeight: "bold", 
                  borderBottom: "2px solid #1e88e5", 
                  paddingBottom: "2px",
                }}
                className="hover:underline"
              >
                https://scodein.tech
              </a>
            </p>
          </div>

          {/* Right Column */}
          <div
            className="column is-12-mobile is-6-tablet is-5-desktop"
            style={{
              backgroundColor: "#ffffff", // White background for content box
              borderRadius: "10px", // Rounded corners
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
              padding: "30px", // Inner padding for content
            }}
          >
            <h1
              className="title has-text-success"
              style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}
            >
              Feedback <span role="img" aria-label="Feedback">😁</span>
            </h1>
            <p className="subtitle has-text-weight-normal" style={{ fontSize: "1.125rem" }}>
              - Do you know what is the shortest word in the English language
              that contains the letters: abcdef? Answer: <strong>"Feedback"</strong>
            </p>
            <p className="subtitle has-text-weight-normal" style={{ fontSize: "1.125rem" }}>
              - Don’t forget that feedback is one of the most essential elements
              of good communication.
            </p>
            <p className="has-text-centered" style={{ marginTop: "20px" }}>
              <a
                href="/studentmantrafeedback"
                rel="noopener noreferrer"
                style={{
                  color: "#43a047", 
                  fontWeight: "bold", 
                  textDecoration: "none", 
                  borderBottom: "2px solid #43a047", 
                  paddingBottom: "2px",
                }}
                className="hover:underline"
              >
                Submit your feedback here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
