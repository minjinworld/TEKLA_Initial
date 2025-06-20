import React, { useState } from "react";
import styles from "./Steps.module.css";
import MotionText from "../common/MotionText";
import TeklaButton from "../common/TeklaButton";
import ComfortChoiceWrap from "./ComfortChoiceWrap";
import data from "@/backend/db.json";

const { fabricOptions } = data;

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

export default function Step3({ onNext, onPrev }: Props) {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : prev.length < 2
        ? [...prev, id]
        : prev
    );
  };

  return (
    <div className={`${styles.stepsWrap} ${styles.thirdStep}`}>
      <div className={styles.prevIcon} onClick={onPrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.7143 2.82542C16.1482 2.39153 16.8521 2.39152 17.286 2.82542C17.7199 3.25933 17.7199 3.96329 17.286 4.39719L9.18308 12.5002L17.286 20.6031L17.3619 20.6872C17.7181 21.1236 17.6929 21.768 17.286 22.1749C16.8793 22.5816 16.2356 22.6065 15.7992 22.2507L15.7143 22.1749L6.82542 13.286C6.39152 12.8521 6.39153 12.1482 6.82542 11.7143L15.7143 2.82542Z"
            fill="#A0A0A0"
          />
        </svg>
      </div>

      <div className={`${styles.motionText} ${styles.topText}`}>
        <MotionText as="div" delay={0.2}>
          <p>두 가지까지 선택하실 수 있어요 :)</p>
        </MotionText>
        <MotionText as="div" delay={0.4}>
          <p>당신을 더 편안하게 만들어줄 소재는 어떤 건가요?</p>
        </MotionText>
      </div>

      <MotionText as="div" delay={1}>
        <ComfortChoiceWrap
          choices={fabricOptions}
          selected={selected}
          onSelect={handleSelect}
        ></ComfortChoiceWrap>
      </MotionText>

      <div className={styles.buttonWrap}>
        <MotionText as="div" delay={1.4}>
          <TeklaButton
            className={selected.length === 2 ? styles.active : styles.inactive}
            onClick={onNext}
            disabled={selected.length !== 2}
          >
            다음
          </TeklaButton>
        </MotionText>
      </div>
    </div>
  );
}
