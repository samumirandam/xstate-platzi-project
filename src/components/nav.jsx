import React from "react";
import "./nav.css";

export const Nav = ({ state, send }) => {
  const goToWelcome = () => {
    send("CANCEL");
  };

  return (
    <nav className="Nav">
      <h1 className="Nav__logo">Book a fly ✈</h1>
      {!state.matches("initial") && (
        <button onClick={goToWelcome} className="Nav__cancel button--secondary">
          Cancelar
        </button>
      )}
    </nav>
  );
};
