import React from "react";
import Info from "../Info/Info";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./CombineInfo.css";
import { useMediaQuery } from "react-responsive";

const CombineInfo = () => {
  const isChanged = useMediaQuery({ query: "(max-width:800px" });

  return (
    <div className='mobile_info'>
      {isChanged ? (
        <>
          <div className='adress_info'>
            <SocialMedia />
          </div>
          <div className='firm_info'>
            <Info />
          </div>
        </>
      ) : (
        <>
          <div className='firm_info'>
            <Info />
          </div>
          <div className='adress_info'>
            <SocialMedia />
          </div>
        </>
      )}
    </div>
  );
};

export default CombineInfo;
