import React from "react";
import { NavLink } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className='err'>
      <h2>404</h2>
      <h3>Błąd! coś poszło nie tak.</h3>
      <p>
        Nie znaleziono strony. Kontunuuj na{" "}
        <NavLink exact to='/' exact>
          stronie głównej
        </NavLink>
      </p>
    </div>
  );
};

export default ErrorPage;
