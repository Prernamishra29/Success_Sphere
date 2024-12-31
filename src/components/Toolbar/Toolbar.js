import React, { Component } from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isScrolled = window.scrollY > 10;
      this.setState({ scrolled: isScrolled });
    });
  }

  render() {
    return (
      <header
        className={
          this.state.scrolled ? "toolbar toolbar-scrolled" : "toolbar"
        }
      >
        <nav className="toolbar__navigation">
          <div className="toolbar__logo">
            <span className="is-size-4 has-text-weight-medium">
              Success Sphere
            </span>
          </div>
          <div className="spacer"></div>
          <div className="toolbar__navigation-items">
            <ul>
              <li>
                <a href="/#home" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="/#Opportunities" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="/#contact" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={this.props.drawerClickHandle} />
          </div>
        </nav>
      </header>
    );
  }
}
