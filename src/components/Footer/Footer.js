import React from "react";
import FontAwesome from "react-fontawesome";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/JacobTheEvans/react-adinkra">Source Code <FontAwesome name="github"/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://jacobtheevans.com/#/">Made by Jacob Evans</a>
      </footer>
    )
  }
}

export default Footer;
