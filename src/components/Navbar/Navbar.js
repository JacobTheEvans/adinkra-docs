import React from "react";
import FontAwesome from "react-fontawesome";
import Dropdown, {DropdownTrigger, DropdownContent} from "react-simple-dropdown";
import {Link} from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="brand">Adinkra Symbols</Link>
        <ul className="nav-items">
          <li>
            <Link to="/vanilla">Vanilla HTML/CSS</Link>
          </li>
          <li>
            <Link to="/react-component">React Component</Link>
          </li>
          <li>
            <Link to="/symbols">Symbols</Link>
          </li>
        </ul>
        <Dropdown className="dropdown-area" ref="dropdown">
          <DropdownTrigger>
            <button className="mobile-toggler">
              <FontAwesome name="bars"/>
            </button>
          </DropdownTrigger>
          <DropdownContent>
            <ul className="mobile-nav">
              <li>
                <Link to="/vanilla" onClick={() => this.refs.dropdown.hide()}>Vanilla HTML/CSS</Link>
              </li>
              <li>
                <Link to="/react-component" onClick={() => this.refs.dropdown.hide()}>React Component</Link>
              </li>
              <li>
                <Link to="/symbols" onClick={() => this.refs.dropdown.hide()}>Symbols</Link>
              </li>
            </ul>
          </DropdownContent>
        </Dropdown>

      </nav>
    )
  }
}

export default Navbar;
