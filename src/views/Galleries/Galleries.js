import React from "react";
import cover1 from "../../images/covers/fotografia-kobieca-cover1.png";

import { NavLink } from "react-router-dom";
import "./Galleries.css";

const Galleries = () => {
  return (
    <div className='covers'>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover1} alt='Domi' />
        </NavLink>
        <h3>Sesja Biznesowa</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover1} alt='Domi' />
        </NavLink>
        <h3>Lata 20ste</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover1} alt='Domi' />
        </NavLink>
        <h3>Kobieta z Klasą</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover1} alt='Domi' />
        </NavLink>
        <h3>Dancing Soul</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover1} alt='Domi' />
        </NavLink>
        <h3>Floral Bath</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover1} alt='Domi' />
        </NavLink>
        <h3>Simply Budoir</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover1} alt='Domi' />
        </NavLink>
        <h3>Wild Spirit</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover1} alt='Domi' />
        </NavLink>
        <h3>Independent Woman</h3>
      </div>
    </div>
  );
};

export default Galleries;
