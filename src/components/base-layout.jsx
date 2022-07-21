import React from "react";
import { useMachine } from "@xstate/react";
import bookingMachine from "../machines/booking-machine";

const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log("nuestra maquina: ", state);
  return <div>Hola</div>;
};

export default BaseLayout;
