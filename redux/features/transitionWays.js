export const way_up = (timeout) => {
  return {
    direction: "up",
    entering: {
      position: `absolute`,
      opacity: 0,
      transform: `translateY(250px)`
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateY(0px)`,
      animation: "blink .3s linear 2"
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateY(-250px)`
    }
  };
};

export const way_down = (timeout) => {
  return {
    direction: "down",
    entering: {
      position: `absolute`,
      opacity: 0,
      transform: `translateY(-250px)`
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateY(0px)`,
      animation: "blink .3s linear 2"
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateY(250px)`
    }
  };
};

export const way_left = (timeout) => {
  return {
    direction: "left",
    entering: {
      position: `absolute`,
      opacity: 0,
      transform: `translateX(-250px)`
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateX(0px)`,
      animation: "blink .3s linear 2"
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateX(250px)`
    }
  };
};

export const way_right = (timeout) => {
  return {
    direction: "right",
    entering: {
      position: `absolute`,
      opacity: 0,
      transform: `translateX(250px)`
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: `translateX(0px)`,
      animation: "blink .3s linear 2"
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out, transform ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateX(-250px)`
    }
  };
};
