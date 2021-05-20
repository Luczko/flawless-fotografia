import React from "react";
import cover1 from "../../images/covers/fotografia_kobieca_bialystok_cover_1.jpg";
import cover2 from "../../images/covers/fotografia_kobieca_bialystok_cover_2.jpg";
import cover3 from "../../images/covers/fotografia_kobieca_bialystok_cover_3.jpg";
import cover4 from "../../images/covers/fotografia_kobieca_bialystok_cover_4.jpg";
import cover5 from "../../images/covers/fotografia_kobieca_bialystok_cover_5.jpg";
import cover6 from "../../images/covers/fotografia_kobieca_bialystok_cover_6.jpg";
import cover7 from "../../images/covers/fotografia_kobieca_bialystok_cover_7.jpg";
import cover8 from "../../images/covers/fotografia_kobieca_bialystok_cover_8.jpg";

import { NavLink } from "react-router-dom";
import "./Galleries.css";

const Galleries = () => {
  return (
    <div className='covers'>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover1} alt='Domi' />
        </NavLink>
        <h3>dancing soul</h3>
      </div>
      <div className='cover'>
        <NavLink to='/be-my-valentine'>
          <img src={cover2} alt='Domi' />
        </NavLink>
        <h3>Be my valentine</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover3} alt='Domi' />
        </NavLink>
        <h3>nazwa</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover4} alt='Domi' />
        </NavLink>
        <h3>nazwa</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover5} alt='Domi' />
        </NavLink>
        <h3>nazwa</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover6} alt='Domi' />
        </NavLink>
        <h3>nazwa</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover7} alt='Domi' />
        </NavLink>
        <h3>golden 20's</h3>
      </div>
      <div className='cover'>
        <NavLink to='/about'>
          <img src={cover8} alt='Domi' />
        </NavLink>
        <h3>nazwa</h3>
      </div>
    </div>
  );
};

export default Galleries;
