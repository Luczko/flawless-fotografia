import React from "react";
import { useRouteMatch } from "react-router-dom";
import "./GlobalFooter.css";
import Footer from "./Footer/Footer";

const GlobalHeader = ({ to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return match ? null : <Footer />;
};

export default GlobalHeader;
