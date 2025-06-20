import React from "react";
import styles from "./ComfortChoiceWrap.module.css";
import { motion } from "framer-motion";

type Props = {
  text: string;
  bgValue: string;

  selected?: boolean;
  onClick?: () => void;
};

export default function ComfortChoice({
  text,
  bgValue,
  selected,
  onClick,
}: Props) {
  return (
    <motion.div
      className={`${styles.wrap} ${selected ? styles.selected : ""}`}
      onClick={onClick}
      animate={{ scale: selected ? 1 : 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
      }}
    >
      <div className={styles.bg} style={{ background: bgValue }} />
      <div className={styles.name}>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}
