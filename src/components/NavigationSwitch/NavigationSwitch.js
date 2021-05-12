import React, { useState } from "react";

import NavigationMobile from "../NavigationMobile/NavigationMobile";
import "./NavigationSwitch.css";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const NavigationSwitch = () => {
  const [mobile, setMobile] = useState(false);
  const handleMobile = () => {
    setMobile((e) => !e);
  };
  const mobileReset = () => {
    if (mobile === true) {
      setMobile(false);
    }
  };
  const checkScroll = () => {
    if (mobile === true && window.pageYOffset > 100) {
      setMobile(false);
    }
  };
  window.addEventListener("scroll", checkScroll);

  const mobileNavi = mobile ? (
    <>
      <div className='switch'>
        <VscClose onClick={handleMobile} />
      </div>

      <NavigationMobile hide={mobileReset} />
    </>
  ) : (
    <div className='switch'>
      <VscMenu onClick={handleMobile} />
    </div>
  );
  return <div>{mobileNavi}</div>;
};
export default NavigationSwitch;
