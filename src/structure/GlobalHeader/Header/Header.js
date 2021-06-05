import React from "react";
import Navigation from "../../../components/Navigation/Navigation";
import NavigationSwitch from "../../../components/NavigationSwitch/NavigationSwitch";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/fotografia-kobieca-logo.jpg";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({
    query: "(min-width:756px)",
  });
  const navi = isMobile ? <Navigation /> : <NavigationSwitch />;
  return (
    <div className='header'>
      <NavLink to='/' exact>
        <img src={logo} alt='logo Flawless Fotografia' />
      </NavLink>
      {navi}
    </div>
  );
};

export default Header;
