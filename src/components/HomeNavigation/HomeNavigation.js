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
            <NavLink to='/sesja-kobieca'>sesja kobieca</NavLink>
          </li>
          <li>
            <NavLink to='/galerie'>galerie</NavLink>
          </li>
          <li>
            <NavLink to='/o-mnie'>o mnie</NavLink>
          </li>
          <li>
            <NavLink to='/kontakt'>kontakt</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomeNavigation;
