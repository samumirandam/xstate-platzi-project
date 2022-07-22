import React from "react";
import { useMachine } from "@xstate/react";
import { Nav } from "../components/nav";
import { StepsLayout } from "./steps-layout";
import bookingMachine from "../machines/booking-machine";
import "./base-layout.css";

export const BaseLayout = () => {
  const [state, send] = useMachine(bookingMachine);

  console.log("nuestra maquina", state.value);

  return (
    <div className="BaseLayout">
      <Nav state={state} send={send} />
      <StepsLayout state={state} send={send} />
    </div>
  );
};

export default BaseLayout;
