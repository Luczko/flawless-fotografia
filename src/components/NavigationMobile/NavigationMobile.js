import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationMobile.css";

const NavigationMobile = ({ hide }) => {
  return (
    <div className='mob-container'>
      <div className='mob-navbar'>
        <NavLink exact to='/' onClick={hide}>
          home
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/sesja-kobieca' onClick={hide}>
          sesja kobieca
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/galerie' onClick={hide}>
          galerie
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/o-mnie' onClick={hide}>
          o mnie
        </NavLink>
      </div>
      <div className='mob-navbar'>
        <NavLink to='/kontakt' onClick={hide}>
          kontakt
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationMobile;
