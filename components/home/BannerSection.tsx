import React from "react";
import styles from "./BannerSection.module.css";

export default function BannerSection() {
  return (
    <div className={styles.banner_video}>
      <video autoPlay muted loop playsInline preload="auto">
        <source src="/bannervideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
