import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import React from "react";
import styles from "./navbar.module.scss";
import { resetUserAction } from "@/redux/actionCreators/userActionsCreator";
import { clearCart } from "@/redux/actionCreators/cartActionsCreator";

library.add(fas);

const LogOut = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearCart());
    dispatch(resetUserAction());
  };
  return (
    <NavLink className={styles.navlink} to="/" onClick={logOut}>
      <FontAwesomeIcon icon="sign-out-alt" />
    </NavLink>
  );
};

export default LogOut;
