import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationMobile.css";
import logo from "../../images/fotografia-kobieca-logo.jpg";

const NavigationMobile = ({ hide }) => {
  return (
    <div className='mob-container'>
      <div className='mob-navbar'>
        <NavLink exact to='/' onClick={hide}>
          home
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/catalog' onClick={hide}>
          oferta
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/portfolio' onClick={hide}>
          portfolio
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/about' onClick={hide}>
          o mnie
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/about' onClick={hide}>
          kontakt
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationMobile;
