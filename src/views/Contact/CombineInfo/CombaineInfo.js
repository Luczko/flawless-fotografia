import React from "react";
import Info from "../Info/Info";
import SocialMedia from "../SocialMedia/SocialMedia";

const CombineInfo = () => {
  return (
    <div className='mobile_info'>
      <div className='adress_info'>
        <SocialMedia />
      </div>
      <div className='firm_info'>
        <Info />
      </div>{" "}
    </div>
  );
};

export default CombineInfo;
