import React from "react";

import { useMediaQuery } from "react-responsive";

import "./Contact.css";
import Info from "./Info/Info";
import SocialMedia from "./SocialMedia/SocialMedia";
import CombineInfo from "./CombineInfo/CombaineInfo";
import contactPhoto from "../../images/test.jpg";

const Contact = () => {
  const isChanged = useMediaQuery({ query: "(max-width:850px" });

  return (
    <div className='contact'>
      <aside>
        <img src={contactPhoto} alt='Fotografia Kobieca Białystok' />
      </aside>

      <div className='info_contact'>
        <h1>STWÓRZMY RAZEM COŚ NIEZWYKŁEGO</h1>
        <p>
          Jeśli macie jakieś pytania lub sugestie śmiało piszcie, chętnie umówię
          się z Wami na spotkanie i udzielę wszystkich informacji przy kawie.{" "}
          <br></br>
          <strong>Do usłyszenia!</strong>
        </p>
        {isChanged ? null : <Info />}
        {isChanged ? null : <SocialMedia />}
      </div>
      {isChanged ? <CombineInfo /> : null}
    </div>
  );
};
export default Contact;
