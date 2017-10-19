import React from "react";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Route, HashRouter, Switch} from "react-router-dom";


//Design wise keep in mine my favorite docs
//https://expressjs.com/
//http://fontawesome.io/

class App extends React.Component {
  render() {
    return (
      <Navbar />
    )
  }
}

export default App;

// const Root = () => (
//   <HashRouter>
//     <div>
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route exact path="/about" component={About}/>
//         <Route path="/article/:id" component={Article}/>
//       </Switch>
//     </div>
//   </HashRouter>
//
// )
// export default Root;
