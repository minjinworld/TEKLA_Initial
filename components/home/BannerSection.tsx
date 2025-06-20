import React from "react";
import styles from "./BannerSection.module.css";

export default function BannerSection() {
  return (
    <div className={styles.banner_video}>
      <video
        src="/bannervideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
}
