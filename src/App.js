import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Vanilla from "./pages/Vanilla";
import ReactComponent from "./pages/ReactComponent";
import Symbols from "./pages/Symbols";
import {Route, HashRouter, Switch} from "react-router-dom";

const Root = () => (
  <HashRouter onUpdate={() => console.log("here")}>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/vanilla" component={Vanilla}/>
        <Route exact path="/react-component" component={ReactComponent}/>
        <Route exact path="/symbols" component={Symbols}/>
      </Switch>
      <Footer/>
    </div>
  </HashRouter>

)
export default Root;
