import { ReactNode } from "react";
import styles from "./MobileLayout.module.css";

type Props = {
  children: ReactNode;
  padding?: string;
};

export default function MobileLayout({ children, padding = "16px" }: Props) {
  return (
    <div
      className={styles.container}
      style={{ paddingLeft: padding, paddingRight: padding }}
    >
      {children}
    </div>
  );
}
