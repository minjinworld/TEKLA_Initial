import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import type { JSX } from "react";

type Props = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function MotionText({
  children,
  as = "span",
  delay = 0,
  duration = 0.8,
  className,
}: Props) {
  const MotionTag = motion[as as keyof typeof motion] as React.ElementType;

  return React.createElement(MotionTag, {
    className,
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: "easeOut" },
    children,
  });
}
