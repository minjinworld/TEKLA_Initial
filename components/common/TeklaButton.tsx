import React from "react";
import styles from "./TeklaButton.module.css";

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function TeklaButton({
  className,
  children,
  onClick,
  disabled,
}: Props) {
  return (
    <button
      className={`${className ?? ""} ${styles.teklaButton}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
