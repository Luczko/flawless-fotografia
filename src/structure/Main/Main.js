import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../../views/About/About";
import Contact from "../../views/Contact/Contact";
import Experience from "../../views/Experience/Experience";
import Galleries from "../../views/Galleries/Galleries";
import GalleryOne from "../../views/Galleries/SingleGalleries/GalleryOne";
import GalleryTwo from "../../views/Galleries/SingleGalleries/GalleryTwo";
import GalleryThree from "../../views/Galleries/SingleGalleries/GalleryThree";
import GalleryFour from "../../views/Galleries/SingleGalleries/GalleryFour";
import GalleryFive from "../../views/Galleries/SingleGalleries/GalleryFive";
import GallerySix from "../../views/Galleries/SingleGalleries/GallerySix";
import GallerySeven from "../../views/Galleries/SingleGalleries/GallerySeven";
import Home from "../../views/Home/Home";

const Main = () => {
  return (
    <div className='main'>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/sesja-kobieca' component={Experience}></Route>
        <Route path='/galerie' component={Galleries}></Route>
        <Route path='/dancing-soul' component={GalleryOne}></Route>
        <Route path='/be-my-valentine' component={GalleryTwo}></Route>
        <Route path='/gal3' component={GalleryThree}></Route>
        <Route path='/simply-beautiful' component={GalleryFour}></Route>
        <Route path='/carefree-afternoon' component={GalleryFive}></Route>
        <Route path='/the-rose' component={GallerySix}></Route>
        <Route path='/golden-20s' component={GallerySeven}></Route>
        <Route path='/o-mnie' component={About}></Route>
        <Route path='/kontakt' component={Contact}></Route>
      </Switch>
    </div>
  );
};

export default Main;
