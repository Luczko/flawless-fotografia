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
        <NavLink to='/experience' onClick={hide}>
          the experience
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/galleries' onClick={hide}>
          galleries
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/about' onClick={hide}>
          about
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/contact' onClick={hide}>
          contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationMobile;
