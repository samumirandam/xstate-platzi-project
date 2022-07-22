import { createMachine } from "xstate";

const bookingMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QCMCuBPABABwDYEMA7MTAFwEsBjAazFNgDpzDyL9cBiAZQBUBBAEo9EobAHtYrcmMIiQAD0QB2AIwAWBioCsANgBMATjVqlOkwAYAzABoQ6RHp07NTnbqUm1WywA4Avn62aFh4RCQUNHSMsGD4AE6UABYcAMIA8gByPACSGQCqAKJy4pIUMnKKCKoa2vpGJmZKVrb2CAbmDAZdXSqWOuY6ProqAUEYOATEZFS09Awx8UmpfBkpBQAyxRJS5UgKypYqDJZaRuYGepZKej6GLQ4qPi5OSlcDKuZKXaMgwRNh00ic2w+FgMUIMDisA4ABFMkU9iUdrI9pU9HoNAZvL0fGpfAZLJY1D57gg9CpnFpzNTPlZ6r1LD8-qEphFZowQWCwBCwFDlqsNltStIUaA0RjOtjfHifASiSS7IgiUcaeZ0aofCoDKomeMWeEZlEGGyohwAGK5bJcAASQuRFUQngYuj0WjUAz6SiUVK0pPJlNVTUs9MJAUCIEIYggcDkzMmBqBjGYUnYdrKov2CC0Xs0uksaq+Wk15hUfq1DDU3R8xdMHzUel1IXjgPZ81iCUSaZFDoQuOcpncXgM-TMZY0ricWLUZl8vUb-1ZhuBoPBkPgiO26Z79dJWM63W95jUWp8Ax08-1LaNJvoXd2YqV7uOp3dV211R0ZY6la6t2rvSLbwL2bG911ETdu1RRBHlJR4wz8IA */
  createMachine({
    id: "buy plane tickets",
    initial: "initial",
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
          },
          CANCEL: {
            target: "initial",
          },
        },
      },
      passengers: {
        on: {
          DONE: {
            target: "tickets",
          },
          CANCEL: {
            target: "initial",
          },
        },
      },
      tickets: {
        on: {
          FINISH: {
            target: "initial",
          },
        },
      },
    },
  });

export default bookingMachine;
