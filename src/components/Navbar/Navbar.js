import React from "react";
import FontAwesome from "react-fontawesome";
import Dropdown, {DropdownTrigger, DropdownContent} from "react-simple-dropdown";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <a href="#" className="brand">Adinkra Symbols</a>
        <ul className="nav-items">
          <li>
            <a href="#">Vanilla</a>
          </li>
          <li>
            <a href="#">React Component</a>
          </li>
          <li>
            <a href="#">Symbols</a>
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
                <a href="#">Vanilla</a>
              </li>
              <li>
                <a href="#">React Component</a>
              </li>
              <li>
                <a href="#">Symbols</a>
              </li>
            </ul>
          </DropdownContent>
        </Dropdown>

      </nav>
    )
  }
}

export default Navbar;
