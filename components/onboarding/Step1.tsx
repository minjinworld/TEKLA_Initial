import React from "react";
import styles from "./Steps.module.css";
import TeklaButton from "../common/TeklaButton";
import MotionText from "../common/MotionText";

export default function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div className={`${styles.stepsWrap} ${styles.firstStep}`}>
      <div className={`${styles.motionText} ${styles.topText}`}>
        <MotionText as="div" delay={0.2}>
          <p>TEKLA 에</p>
        </MotionText>
        <MotionText as="div" delay={0.4}>
          <p>오신 걸 환영해요.</p>
        </MotionText>
      </div>

      <div className={`${styles.motionText} ${styles.centerText}`}>
        <MotionText as="div" delay={1.6}>
          <p>당신의 집이 더 편안해지길 바라며,</p>
        </MotionText>

        <MotionText as="div" delay={1.8}>
          <p>몇 가지 질문을 드릴게요.</p>
        </MotionText>
      </div>

      <MotionText as="div" delay={3}>
        <TeklaButton onClick={onNext}>{"취향 선택하기"}</TeklaButton>
      </MotionText>
    </div>
  );
}
