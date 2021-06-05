import React from "react";
import Header from "./Header/Header";
import HomeHeader from "./HomeHeader/HomeHeader";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./GlobalHeader.css";

const GlobalHeader = ({ to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return match ? <HomeHeader /> : <Header />;
};

export default GlobalHeader;
