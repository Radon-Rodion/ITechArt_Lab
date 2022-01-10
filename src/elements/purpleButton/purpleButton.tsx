import React from "react";
import styles from "./purpleButton.module.scss";

/* eslint-disable react/button-has-type */
interface IPurpleButtonProps {
  name: string;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PurpleButton = (props: IPurpleButtonProps) => {
  const buttonClass = `${styles.button} ${props.className}`;
  return (
    <button className={buttonClass} type={props.type} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

PurpleButton.defaultProps = {
  type: "button",
  onClick: undefined,
};

export default PurpleButton;
