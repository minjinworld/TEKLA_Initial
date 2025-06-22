import React from "react";
import styles from "./LogoIntro.module.css";
import Logo from "@/components/common/Logo";

import MotionText from "../common/MotionText";

export default function LogoIntro() {
  return (
    <div className={styles.wrap}>
      <MotionText as="h1" delay={0.4}>
        <Logo className={styles.splashLogo} fillColor={"#181818"} />
      </MotionText>
    </div>
  );
}
