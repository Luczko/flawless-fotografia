import React from "react";

import { TiSocialFacebook } from "react-icons/ti";
import { TiDevicePhone } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className='adresses'>
      <p>
        <a href='https://www.facebook.com/flawlesstudio' target='_blank'>
          <TiSocialFacebook className='contact_icon' />
          fb.me/flawlesstudio{" "}
        </a>
      </p>{" "}
      <p>
        <a
          href='https://www.instagram.com/flawless.photostudio/'
          target='_blank'
        >
          {" "}
          <TiSocialInstagram className='contact_icon' />
          instagram.com/flawless.photostudio/
        </a>
      </p>
      <p>
        <TiDevicePhone className='contact_icon' />
        tel. 510 930 418
      </p>
      <p>
        <TiMail className='contact_icon' />
        photostudio.flawless@gmail.com
      </p>
    </div>
  );
};
export default SocialMedia;
