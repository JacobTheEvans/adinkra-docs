import React from "react";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {Route, HashRouter, Switch} from "react-router-dom";

//Design wise keep in mine my favorite docs
//https://expressjs.com/
//http://fontawesome.io/

const Root = () => (
  <HashRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <Footer />
    </div>
  </HashRouter>

)
export default Root;
