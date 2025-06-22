import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./HeaderSection.module.css";
import Logo from "./Logo";

import Link from "next/link";

export default function HeaderSection() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 100;
      controls.start(shouldShow ? "visible" : "hidden");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      <motion.div
        className={styles.backgroundLayer}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            y: "-150%",
          },
          visible: {
            y: "0%",
            transition: {
              duration: 0.2,
              ease: [0.25, 1, 0.5, 1], // cubic-bezier 형태로, 탄력 있고 말랑한 느낌
            },
          },
        }}
      />
      <div className={styles.header_wrap}>
        <Link href="/">
          <Logo className={styles.headerLogo} />
        </Link>
        <div className={styles.icon_box}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                d="M13.8013 6.18077C13.6323 3.68283 12.0984 2 9.87556 2C7.60073 2 6.04084 3.68283 5.88486 6.18077H4V18H15.6861V6.18077H13.8013ZM9.83656 2.82827C11.5524 2.82827 12.6573 4.07724 12.7873 6.18077H6.88578C7.01577 4.07724 8.10769 2.82827 9.83656 2.82827ZM14.8282 17.1454H4.83194V7.03533H14.8282V17.1454Z"
                stroke="white"
                strokeWidth="0.0865735"
              />
            </svg>
          </div>

          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <rect x="2" y="5" width="16" height="1" />
              <rect x="2" y="14" width="16" height="1" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
