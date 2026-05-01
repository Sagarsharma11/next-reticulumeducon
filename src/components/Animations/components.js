"use client";

import { motion } from "framer-motion";
import { useFadeIn, useSlide } from "./hooks";

// Fade Component
export const MotionFade = ({ children, delay = 0, ...props }) => {
  const animation = useFadeIn(delay);

  return (
    <motion.div {...animation} {...props}>
      {children}
    </motion.div>
  );
};

// Slide Component
export const MotionSlide = ({
  children,
  direction = "up",
  delay = 0,
  ...props
}) => {
  const animation = useSlide(direction, delay);

  return (
    <motion.div {...animation} {...props}>
      {children}
    </motion.div>
  );
};