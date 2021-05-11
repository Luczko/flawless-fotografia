import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationMobile.css";
import logo from "../../images/fotografia-kobieca-logo.jpg";

const NavigationMobile = () => {
  return (
    <div className='mob-container'>
      <div className='mob-navbar'>
        <NavLink exact to='/'>
          home
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/catalog'>oferta</NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/portfolio'>portfolio</NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/about'>o mnie</NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/about'>kontakt</NavLink>
      </div>
    </div>
  );
};

export default NavigationMobile;
