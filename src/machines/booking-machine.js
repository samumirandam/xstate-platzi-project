import { createMachine, assign } from "xstate";
import { fetchCountries } from "../utils/api";

const initialState = {
  passengers: [],
  selectedCountry: "",
  countries: [],
  error: "",
};

const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "getCountries",
        src: () => fetchCountries,
        onDone: {
          target: "success",
          actions: assign({
            countries: (context, event) => event.data,
          }),
        },
        onError: {
          target: "failure",
          actions: assign({
            error: "Fallo la petición para obtener de paises",
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    initial: "initial",
    context: { ...initialState },
    states: {
      initial: {
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
            actions: assign(
              (context, event) =>
                (context.selectedCountry = event.selectedCountry)
            ),
          },
          CANCEL: {
            target: "initial",
            actions: "setInitialState",
          },
        },
        ...fillCountries,
      },
      passengers: {
        on: {
          DONE: {
            target: "tickets",
            cond: "moreThanOnePassenger",
          },
          CANCEL: {
            target: "initial",
            actions: "setInitialState",
          },
          ADD: {
            target: "passengers",
            actions: assign((context, event) =>
              context.passengers.push(event.newPassenger)
            ),
          },
        },
      },
      tickets: {
        after: {
          5000: {
            target: "initial",
            actions: "setInitialState",
          },
        },
        on: {
          FINISH: {
            target: "initial",
            actions: "setInitialState",
          },
        },
      },
    },
  },
  {
    actions: {
      setInitialState: assign(
        (context, event) => (context = { ...initialState })
      ),
    },
    guards: {
      moreThanOnePassenger: (context) => {
        return context.passengers.length > 0;
      },
    },
  }
);

export default bookingMachine;
