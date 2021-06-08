import React from "react";
import { NavLink } from "react-router-dom";

import { TiSocialFacebook } from "react-icons/ti";
import { TiDevicePhone } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-icons'>
        <a href='https://www.facebook.com/flawlesstudio' target='_blank'>
          {" "}
          <TiSocialFacebook />
        </a>
        <a
          href='https://www.instagram.com/flawless.photostudio/'
          target='_blank'
        >
          {" "}
          <TiSocialInstagram />
        </a>
        <NavLink to='./kontakt'>
          {" "}
          <TiDevicePhone />
        </NavLink>
        <NavLink to='./kontakt'>
          {" "}
          <TiMail />
        </NavLink>
      </div>
      <div className='footer-cred'>
        <p>Flawless Photostudio © 2021</p>
        <p>Designed by Luczko</p>
      </div>
    </div>
  );
};

export default Footer;
