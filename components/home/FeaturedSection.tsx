import React from "react";
import styles from "./FeaturedSection.module.css";
import TeklaButton from "../common/TeklaButton";

export default function FeaturedSection() {
  return (
    <div className={styles.featuredWrap}>
      <div className={styles.section_image}>
        <TeklaButton className={styles.featured_section_button}>
          <p>{"View featured products"}</p>
          <div className={styles.more_icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.66732 3.3335V12.0002M3.33398 7.66683H12.0007"
                stroke="#181818"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </TeklaButton>
      </div>
    </div>
  );
}
