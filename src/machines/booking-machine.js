import { createMachine, interpret } from "xstate";

const bookingMachine = createMachine({
  id: "buy plane tickets",
  initial: "inicial",
  states: {
    inicial: {
      on: {
        START: {
          target: "search",
        },
      },
    },
    search: {
      on: {
        CONTINUE: {
          target: "passengers",
        },
        CANCEL: {
          target: "inicial",
        },
      },
    },
    passengers: {
      on: {
        DONE: {
          target: "tickets",
        },
        CANCEL: {
          target: "inicial",
        },
      },
    },
    tickets: {
      on: {
        FINISH: {
          target: "inicial",
        },
      },
    },
  },
});

export default bookingMachine;
