import React, { useState } from "react";
import Modal from "@/components/modal/modal";
import styles from "./signButton.module.scss";

interface INavbarButtonProps {
  name: string;
  className: string;
  form: JSX.Element;
  children?: JSX.Element;
}

const SignButton = (props: INavbarButtonProps) => {
  const [modalShown, setShown] = useState(false);
  const toggleModal = () => setShown(!modalShown);

  return (
    <>
      <button type="button" onClick={toggleModal} className={`${styles.notButton} ${props.className}`}>
        {props.children}
        {props.name}
      </button>
      {modalShown && <Modal>{React.cloneElement(props.form, { onExit: toggleModal })}</Modal>}
    </>
  );
};

SignButton.defaultProps = {
  children: null,
};

export default React.memo(SignButton);
