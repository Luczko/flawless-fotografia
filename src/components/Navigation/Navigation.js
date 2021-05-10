import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../../images/fotografia-kobieca-logo.jpg";

const Navigation = () => {
  return (
    <nav className='container'>
      <div className='navbar'>
        <img src={logo} />
        <ul className='nav'>
          <li>
            <NavLink exact to='/'>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to='/catalog'>oferta</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio'>portfolio</NavLink>
          </li>
          <li>
            <NavLink to='/about'>o mnie</NavLink>
          </li>
          <li>
            <NavLink to='/about'>kontakt</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
