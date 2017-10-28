import React from "react";
import { Link } from "react-router-dom";
import { Adinkra } from "react-adinkra";
import "./Symbols.css";

class Symbols extends React.Component {
  genSymbolBoxes() {
    return this.props.filteredData.map((item, index) => (
      <div className="symbol-box" key={index + item.name}>
        <h2><Adinkra name={item.name}/></h2>
        <p>{item.name.replace(/-/g, " ")}</p>
        <p className="meaning">{item.meaning}</p>
      </div>
    ));
  }

  render() {
    return (
      <section className="search-content">
        <div className="search-box">
          <input onChange={this.props.handleInput} value={this.props.searchInput} name="searchInput" placeholder="Search"/>
        </div>

        <div className="symbols-container">
          {this.props.filteredData.length > 0 ? this.genSymbolBoxes() : <p className="search-error-message">No symbols matched your search query</p>}
        </div>

      </section>
    )
  }
}

export default Symbols;
