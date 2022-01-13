import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./starsMark.module.scss";

library.add(fas);

interface IStarsMarkProps {
  value: number;
}

const StarsMark = (props: IStarsMarkProps) => {
  const elementsArr = Array(props.value);
  for (let i = 0; i < props.value; i++) {
    elementsArr[i] = <FontAwesomeIcon icon="star" key={i} />;
  }
  return <div className={styles.stars}>{elementsArr}</div>;
};

export default StarsMark;
