import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Vanilla from "./pages/Vanilla";
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
        <Route exact path="/vanilla" component={Vanilla}/>
      </Switch>
      <Footer />
    </div>
  </HashRouter>

)
export default Root;
