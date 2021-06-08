import React from "react";

import { useMediaQuery } from "react-responsive";

import "./Contact.css";
import Info from "./Info/Info";
import SocialMedia from "./SocialMedia/SocialMedia";
import CombineInfo from "./CombineInfo/CombineInfo";
import contactPhoto from "../../images/fotografia-kobieca-bialystok-kontakt.jpg";

const Contact = () => {
  const isChanged = useMediaQuery({ query: "(max-width:1175px" });

  return (
    <div className='contact'>
      <aside>
        <img src={contactPhoto} alt='Fotografia Kobieca Białystok' />
      </aside>

      <div className='contact-inf'>
        <h1>STWÓRZMY RAZEM COŚ NIEZWYKŁEGO</h1>
        <p>
          Jeśli macie jakieś pytania, chiałybyście dowiedzieć się czegoś więcej
          na temat sesji lub zarezerwować termin, chętnie umówię się z Wami na
          spotkanie. Pokażę Wam przykładowe wydruki i albumy realizowane dla
          moich klientek i udzielę wszystkich informacji.
          <br></br>
          <strong>Do usłyszenia!</strong>
        </p>
        {isChanged ? null : <SocialMedia />}
      </div>
      {isChanged ? <CombineInfo /> : <Info />}
    </div>
  );
};
export default Contact;
