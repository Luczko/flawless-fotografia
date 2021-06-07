import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className='contoiner'>
      <div className='navbor'>
        <ul className='nov'>
          <li>
            <NavLink exact to='/'>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to='/experience'>sesja kobieca</NavLink>
          </li>
          <li>
            <NavLink to='/galleries'>galerie</NavLink>
          </li>
          <li>
            <NavLink to='/about'>o mnie</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>kontakt</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
