import React from "react";
import "./tickets.css";

export const Tickets = ({ send, context }) => {
  const finish = () => {
    send("FINISH");
  };

  return (
    <div className="Tickets">
      <p className="Tickets__description description">
        Gracias por volar con book a fly 💚
      </p>
      <div className="Tickets__ticket">
        <div className="Tickets__country">Colombia</div>
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
