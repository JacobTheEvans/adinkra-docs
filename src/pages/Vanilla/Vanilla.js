import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atelierCaveLight} from "react-syntax-highlighter/dist/styles";
import "./Vanilla.css";

class Vanilla extends React.Component {
  render() {
    return (
      <section className="vanilla-content">

        <section className="doc-section">
          <h2>Adinkra Symbols Font</h2>
          <p>The Adinkra Symbols Font is made up of scalable vector icons that can change color, size, padding and anything else that can be done with CSS.</p>
        </section>

        <section className="doc-section">
          <h3>How to use it</h3>
          <p>To use the Adinkra Symbols in a website simply include the CDN link in the head of your HTML</p>
          <SyntaxHighlighter language="html" style={atelierCaveLight} customStyle={{
            fontSize: "16px"
          }}>
            &lt;link rel="stylesheet" href="https://cdn.rawgit.com/JacobTheEvans/adinkra/c54b4e0e/src/adinkra.css"&gt;
          </SyntaxHighlighter>

          <p>Then use the CSS prefix class 'icon' and add the desired icon using the 'icon-nameOfSymbol' class</p>
          <SyntaxHighlighter language="html" style={atelierCaveLight} customStyle={{
            fontSize: "16px"
          }}>
            {`<i class="icon icon-akoben"></i>`}
          </SyntaxHighlighter>
        </section>

        <section className="doc-section">
          <h3>Examples</h3>
          <p>Examples on how to use this library can be found below</p>
          <ul className="link-list">
            <li>
              <a href="https://github.com/JacobTheEvans/adinkra/tree/master/examples/local">Local example</a>
            </li>
            <li>
              <a href="https://github.com/JacobTheEvans/adinkra/tree/master/examples/local">CDN example</a>
            </li>
          </ul>
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

export default Vanilla;
