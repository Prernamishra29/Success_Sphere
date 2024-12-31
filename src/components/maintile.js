import React, { useState } from "react";

const Maintile = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className="section is-fullheight"
      style={{
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="hero-body columns is-vcentered"
        style={{
          maxWidth: "1200px",
          width: "100%",
          padding: "20px",
          margin: "0 auto",
        }}
      >
        <div className="column is-6">
          <div className="container">
            <h1
              className="title"
              style={{
                fontSize: "3rem",
                color: "#333",
                lineHeight: "1.5",
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.color = "#007bff")}
              onMouseOut={(e) => (e.target.style.color = "#333")}
            >
              Welcome to Your Next Big Opportunity! &nbsp; 👋
            </h1>
            <h2
              className="subtitle has-text-weight-semibold"
              style={{
                fontSize: "1.25rem",
                color: "#555",
                marginTop: "20px",
              }}
            >
              <p>
              Discover endless possibilities to boost your career and personal growth with us. 
              Explore exclusive details about:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "20px" }}>
                <li style={{ transition: "transform 0.3s ease", cursor: "pointer" }}>
                  ➤ Campus Ambassador Programs
                </li>
                <li style={{ transition: "transform 0.3s ease", cursor: "pointer" }}>
                  ➤ Active Scholarships
                </li>
                <li style={{ transition: "transform 0.3s ease", cursor: "pointer" }}>
                  ➤ Full-Time Opportunities
                </li>
                <li style={{ transition: "transform 0.3s ease", cursor: "pointer" }}>
                  ➤ Intern Openings
                </li>
              </ul>
            </h2>
            <button
              className="button is-primary"
              style={{
                marginTop: "20px",
              }}
              onClick={handleDetailsToggle}
            >
              {showDetails ? "Hide Details" : "Learn More"}
            </button>
          </div>
        </div>

        <div className="column is-6">
          <center>
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
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </center>
        </div>
      </div>

      {showDetails && (
        <div
          className="box"
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "30px",
            transition: "opacity 0.5s ease",
            width: "80%",
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          <p>
            <b>
              Whichever listing you are looking for, we have a dedicated section
              for it! Explore our platform to find exactly what you need. 🚀
            </b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Maintile;
