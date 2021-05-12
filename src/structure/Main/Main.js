import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../../views/About/About";
import Contact from "../../views/Contact/Contact";
import Experience from "../../views/Experience/Experience";
import Galleries from "../../views/Galleries/Galleries";
import Home from "../../views/Home/Home";

const Main = () => {
  return (
    <div className='main'>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/experience' component={Experience}></Route>
        <Route path='/galleries' component={Galleries}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
      </Switch>
    </div>
  );
};

export default Main;
