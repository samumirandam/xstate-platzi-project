import React from "react";
import "./tickets.css";

export const Tickets = ({ send, state }) => {
  const finish = () => {
    send("FINISH");
  };

  const { selectedCountry } = state.context;
  
  return (
    <div className="Tickets">
      <p className="Tickets__description description">
        Gracias por volar con book a fly 💚
      </p>
      <div className="Tickets__ticket">
        <div className="Tickets__country">{selectedCountry}</div>
        <div className="Tickets__passengers">
          <span>✈</span>
        </div>
      </div>
      <button onClick={finish} className="Tickets__finalizar button">
        Finalizar
      </button>
    </div>
  );
};
