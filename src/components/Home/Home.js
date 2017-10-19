import React from "react";
import Slider from "../Slider";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <section className="home-content">
        <Slider/>
        <h1>Adinkra Symbols</h1>
        <div className="menu">
          <a href="#">Explore the Symbols</a>
          <a href="#">Vanilla HTML/CSS</a>
          <a href="#">React Component</a>
        </div>
      </section>
    )
  }
}

export default Home;
