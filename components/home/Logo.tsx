import React from "react";
import styles from "./Logo.module.css";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <div className={`${styles.logo} ${className ?? ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="92"
        height="20"
        viewBox="0 0 92 20"
      >
        <path d="M15.6129 0.659424V6.86085H11.4518V19.8684H4.15137V6.86085H0V0.659424H15.6129Z" />
        <path d="M31.089 0.659424V6.02883H24.7289V7.71318H30.405V12.7062H24.7289V14.499H31.3067V19.8684H17.7148V0.659424H31.089Z" />
        <path d="M40.4223 0.659424V8.74353H40.4726L44.5737 0.659424H52.0531L46.704 9.9722L52.8561 19.8684H45.188L40.4726 11.5666H40.4223V19.8684H33.4082V0.659424H40.4223Z" />
        <path d="M62.2488 0.659424V13.5683H68.3012V19.8684H54.957V0.659424H62.2488Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M85.4822 0.664307L92.0009 19.8636H84.6802L83.8375 16.5742H78.3201L77.4484 19.8636H70.4043L76.8437 0.664307H85.4822ZM79.5778 11.7108H82.5498L81.1034 6.02404L79.5778 11.7108Z"
        />
      </svg>
    </div>
  );
}
