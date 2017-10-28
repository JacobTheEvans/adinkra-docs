import React from "react";
import {Adinkra} from "react-adinkra";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atelierCaveLight} from "react-syntax-highlighter/dist/styles";
import Modal from "react-modal";
import "./Details.css";

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(251, 251, 251, 0.75)'
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "30px"
  }
};

class Details extends React.Component {
  render() {
    return (
      <section className="details-content">
        <div className="details-inner">
          <h1 className="details-icon"><Adinkra name={this.props.symbol.name}/></h1>
          <h2 className="details-name">{this.props.symbol.name.replace(/-/g, " ")}</h2>
          <p className="details-translation">{this.props.symbol.translation}</p>
          <p className="details-meaning">{this.props.symbol.meaning}</p>
          <p className="details-description">{this.props.symbol.description}</p>

          <div className="details-use">
            <button onClick={this.props.toggleOpen} className="btn">How to use it?</button>

            <Modal isOpen={this.props.modalOpen} onRequestClose={this.props.toggleOpen} style={customStyles} contentLabel="Use Modal">
              <div className="modal-inner">
                <p className="label">React</p>
                <SyntaxHighlighter language="jsx" style={atelierCaveLight} customStyle={{
                  fontSize: "16px"
                }}>
                  {`<Adinkra name={'${this.props.symbol.name}'}/>`}
                </SyntaxHighlighter>

                <p className="label">Vanilla</p>
                <SyntaxHighlighter language="html" style={atelierCaveLight} customStyle={{
                  fontSize: "16px"
                }}>
                  {`<i class="icon icon-${this.props.symbol.name}"></i>`}
                </SyntaxHighlighter>
                <button onClick={this.props.toggleOpen} className="exit">X</button>
              </div>
            </Modal>
          </div>
        </div>
      </section>
    )
  }
}

export default Details;
