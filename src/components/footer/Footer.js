import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

export default class Footerpage extends Component {
  render() {
    return (
      <div>
        <footer
          className="footer" id="contact"
          style={{ height: "100px", backgroundColor: "white" }}
        >
          <div className="has-text-centered">
            <a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesome
                name="instagram "
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                                  }}
              />{" "}
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            <a
              href="https://www.linkedin.com/in/prerna-m-8a296b12b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesome name="linkedin" style={{ color: "#0e76a8" }} />{" "}
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            <a
              href="https://medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesome name="medium" style={{ color: "00ab6c" }} />{" "}
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            <a
              href="https://t.me/Prernamishra29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesome name="telegram" style={{ color: "#0088cc" }} />{" "}
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            <a
              href="https://x.com/NikitaC18313034?t=dX1z4mljJ88hF_L36x3jHg&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesome name="twitter" style={{ color: "#00acee" }} />{" "}
            </a>
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
            <a
              href="https://youtube.com/@nikitachauhan4733?feature=shared "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesome name="youtube-play" style={{ color: "red" }} />{" "}
            </a>
            <br />
            <p
              className="has-text-weight-medium"
              style={{ color: "rgb(81, 80, 107)" }}
            >
              {" "}
              &#169; {new Date().getFullYear()}{" "}
              <a href="https://scodein.tech/">Student Code In</a>. All Rights
              Reserved.
            </p>
            <br />
            {/* Made with ❤️ in India */}
          </div>
        </footer>
      </div>
    );
  }
}
