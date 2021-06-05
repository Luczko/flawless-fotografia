import React from "react";
import HomeNavigation from "../../../components/HomeNavigation/HomeNavigation";
import NavigationSwitch from "../../../components/NavigationSwitch/NavigationSwitch";
import { NavLink } from "react-router-dom";
import "./HomeHeader.css";
import { useMediaQuery } from "react-responsive";

const HomeHeader = () => {
  const isMobile = useMediaQuery({
    query: "(min-width:756px)",
  });
  const navi = isMobile ? <HomeNavigation /> : <NavigationSwitch />;
  return <div className='header'>{navi}</div>;
};

export default HomeHeader;
