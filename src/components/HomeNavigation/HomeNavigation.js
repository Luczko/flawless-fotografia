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

export default HomeNavigation;
