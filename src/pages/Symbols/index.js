import React from "react";
import Symbols from "./Symbols.js";
import metaData from "../../metadata.js";

class SymbolsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredData: this.filter("", metaData),
      searchInput: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.filter = this.filter.bind(this);
  }
  filter(searchTerm, data) {
    searchTerm = searchTerm.toLowerCase();
    if (searchTerm.length < 3) {
      return data.sort((a, b) => {
        return a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : (a.name.toLowerCase() > b.name.toLowerCase())
            ? 1
            : 0;
      });
    } else {
      return data.filter((item) => {
        if (item.name.indexOf(searchTerm) !== -1 || item.name.replace(/-/g, " ").indexOf(searchTerm) !== -1) {
          return true;
        } else {
          var doesOccur = false;
          for (let i = 0; i < item.keywords.length; i++) {
            if (item.keywords[i].indexOf(searchTerm) !== -1) {
              doesOccur = true;
              break;
            }
          }
          return doesOccur;
        }
      }).sort((a, b) => {
        return (a.name.toLowerCase() < b.name.toLowerCase())
          ? -1
          : (a.name.toLowerCase() > b.name.toLowerCase())
            ? 1
            : 0;
      });
    }

  }
  handleInput(e) {
    e.persist();
    this.setState(prevState => ({
      searchInput: e.target.value,
      filteredData: this.filter(e.target.value, metaData)
    }));
  }
  render() {
    return (<Symbols {...this.state} handleInput={this.handleInput}/>)
  }
}

export default SymbolsContainer;
