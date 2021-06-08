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

export default Navigation;
