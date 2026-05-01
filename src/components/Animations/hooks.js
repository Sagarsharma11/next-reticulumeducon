import { defaultTransition } from "./transitions";

export const useFadeIn = (delay = 0) => ({
  initial: "hidden",
  animate: "show",
  variants: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ...defaultTransition,
        delay,
      },
    },
  },
});

export const useSlide = (direction = "up", delay = 0) => {
  const dirMap = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return {
    initial: "hidden",
    animate: "show",
    variants: {
      hidden: {
        opacity: 0,
        ...dirMap[direction],
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay,
          duration: 0.5,
        },
      },
    },
  };
};