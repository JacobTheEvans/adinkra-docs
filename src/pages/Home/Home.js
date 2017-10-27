import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <section className="home-content">
        <Slider/>
        <h1>Adinkra Symbols</h1>
        <div className="menu">
          <Link to="/">Explore the Symbols</Link>
          <Link to="/vanilla">Vanilla HTML/CSS</Link>
          <Link to="/react-component">React Component</Link>
        </div>
      </section>
    )
  }
}

export default Home;
