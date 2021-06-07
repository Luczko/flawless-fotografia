import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeNavigation.css";

const HomeNavigation = () => {
  return (
    <nav className='contuiner'>
      <div className='navbur'>
        <ul className='nuv'>
          <li>
            <NavLink exact to='/'>
              flawless
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

export default HomeNavigation;
