import React from "react";
import { useMediaQuery } from "react-responsive";
import HomeWide from "../Home/HomeWide/HomeWide";
import HomeMobile from "../Home/HomeMobile/HomeMobile";

import "./Home.css";

const Home = () => {
  const isMobile = useMediaQuery({
    query: "(min-width:756px)",
  });
  const home = isMobile ? <HomeWide /> : <HomeMobile />;
  return <>{home}</>;
};

export default Home;
