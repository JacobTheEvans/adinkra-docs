import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveLight } from "react-syntax-highlighter/dist/styles";
import "./ReactComponent.css";

class ReactComponent extends React.Component {
  render() {
    return (
      <section className="react-component-content">

        <section className="doc-section">
          <h2>React Adinkra</h2>
          <p>The React component wrapper for the Adinkra Vector scalable vector icons. All icons can be styled with any CSS atrrubites using className and style properites.</p>
        </section>

        <section className="doc-section">
          <h3>How to use it</h3>
          <p>To use the Adinkra Symbols in a website you must include the CDN link in the head of your HTML</p>

          <SyntaxHighlighter language="html" style={atelierCaveLight} customStyle={{fontSize: "16px"}}>
            &lt;link rel="stylesheet" href="https://cdn.rawgit.com/JacobTheEvans/adinkra/c54b4e0e/src/adinkra.css"&gt;
          </SyntaxHighlighter>

          <p>Then install the react-adinkra package using npm</p>

          <SyntaxHighlighter language="terminal" style={atelierCaveLight} customStyle={{fontSize: "16px"}}>
            npm install react-adinkra
          </SyntaxHighlighter>

          <p>Then import the Adinkra component and use it your project</p>

          <SyntaxHighlighter language="es6" style={atelierCaveLight} customStyle={{fontSize: "16px"}}>
{`import React from "react";
import { Adinkra } from "react-adinkra";

class App extends React.Component
  render() {
    return (
      <Adinkra name="asase-ye-duru"/>
    )
  }
}

export default App;`}
          </SyntaxHighlighter>

          <p>If you would like to style the Adinkra Symbol you can use className or style properites.</p>

          <SyntaxHighlighter language="es6" style={atelierCaveLight} customStyle={{fontSize: "16px"}}>
{`import React from "react";
import { Adinkra } from "react-adinkra";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Adinkra className="large-icon" style={{color: "red"}} name="asase-ye-duru"/>
    )
  }
}

export default App;`}
          </SyntaxHighlighter>
        </section>

        <section className="doc-section">
          <h3>What is Adinkra?</h3>
          <p>Adinkra are visual symbols that represent concepts or aphorisms. Adinkra are used extensively in fabrics and pottery among the Akans of Ghana and Cote d"Ivoire. Currently they are used on walls, architectural features, cloth/clothing and many other places.</p>
        </section>

        <section className="doc-section">
          <h3>Credit</h3>
          <p>The symbols and the information for these symbols where gathered from many resources including current West African Citizens, online dictionaries and government websites. Below you will find links to all the sites used.</p>
          <ul className="link-list">
            <li>
              <a href="http://www.adinkra.org/htmls/adinkra_index.htm" target="_blank" rel="noopener noreferrer">http://www.adinkra.org/htmls/adinkra_index.htm</a>
            </li>
            <li>
              <a href="https://afroetic.com/adinkra-symbols/" target="_blank" rel="noopener noreferrer">https://afroetic.com/adinkra-symbols/</a>
            </li>
            <li>
              <a href="http://ghanaculturepolitics.com/adinkra-symbols-and-their-meaning-english-and-twi/" target="_blank" rel="noopener noreferrer">http://ghanaculturepolitics.com/adinkra-symbols-and-their-meaning-english-and-twi/</a>
            </li>
            <li>
              <a href="http://www.adinkrasymbols.org/list-adinkra-symbols/" target="_blank" rel="noopener noreferrer">http://www.adinkrasymbols.org/list-adinkra-symbols/</a>
            </li>
          </ul>
        </section>

      </section>
    )
  }
}

export default ReactComponent;
