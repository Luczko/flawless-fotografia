import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className='container'>
      <div className='navbar'>
        <ul className='nav'>
          <li>
            <NavLink exact to='/'>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to='/experience'>the experience</NavLink>
          </li>
          <li>
            <NavLink to='/galleries'>galleries</NavLink>
          </li>
          <li>
            <NavLink to='/about'>about</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
