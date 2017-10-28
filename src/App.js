import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";

import Home from "./pages/Home";
import Vanilla from "./pages/Vanilla";
import ReactComponent from "./pages/ReactComponent";
import Symbols from "./pages/Symbols";
import Details from "./pages/Details";

import {Route, HashRouter, Switch} from "react-router-dom";

const Root = () => (
  <HashRouter>
    <Scroll>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/vanilla" component={Vanilla}/>
          <Route exact path="/react-component" component={ReactComponent}/>
          <Route exact path="/symbols" component={Symbols}/>
          <Route exact path="/symbols/:name" component={Details}/>
        </Switch>
        <Footer/>
      </div>
    </Scroll>
  </HashRouter>

)
export default Root;
