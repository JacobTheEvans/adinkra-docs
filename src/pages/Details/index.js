import React from "react";
import Details from "./Details.js";
import metaData from "../../metadata.js";

class DetailsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  toggleOpen() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }
  getSymbol(name) {
    for(let i = 0; i < metaData.length; i++) {
      if(metaData[i].name === name) {
        return metaData[i];
      }
    }
    return null;
  }
  render() {
    return (
      <Details symbol={this.getSymbol(this.props.match.params.name)} {...this.state} toggleOpen={this.toggleOpen}/>
    )
  }
}


export default DetailsContainer;
