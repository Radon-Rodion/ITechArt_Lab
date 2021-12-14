import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Modal from "@/components/modal/modal";

interface INavbarButtonProps {
  name: string;
  children: JSX.Element;
}

const NavbarButton = (props: INavbarButtonProps) => {
  const [modalShown, setShown] = useState(false);
  const show = () => setShown(true);
  const hide = () => setShown(false);

  return (
    <>
      <button type="button" onClick={show} className={styles.navbarBtn}>
        {props.name}
      </button>
      {modalShown && <Modal>{React.cloneElement(props.children, { onExit: hide })}</Modal>}
    </>
  );
};

export default NavbarButton;
