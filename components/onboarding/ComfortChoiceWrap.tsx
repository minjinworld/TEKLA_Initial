import React from "react";
import ComfortChoice from "./ComfortChoice";
import styles from "./ComfortChoiceWrap.module.css";

type choiceOptions = {
  // choices: string[];
  id: number;
  text: string;
  bgValue: string;
};

type Props = {
  choices: choiceOptions[];

  selected: number[];
  onSelect: (id: number) => void;
};

export default function ComfortChoiceWrap({
  choices,
  selected,
  onSelect,
}: Props) {
  return (
    <div className={styles.choice_container}>
      {choices.map((choice) => {
        return (
          <ComfortChoice
            key={choice.id}
            text={choice.text}
            bgValue={choice.bgValue}
            selected={selected.includes(choice.id)}
            onClick={() => onSelect(choice.id)}
          ></ComfortChoice>
        );
      })}
    </div>
  );
}
