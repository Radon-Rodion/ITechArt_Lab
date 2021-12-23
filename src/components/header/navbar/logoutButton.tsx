import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import styles from "./navbar.module.scss";
import { resetUserNameAction } from "@/redux/store/reducers/userReducer";

library.add(fas);

const LogOut = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(resetUserNameAction());
  };
  return (
    <NavLink className={styles.navlink} to="/" onClick={logOut}>
      <FontAwesomeIcon icon="sign-out-alt" />
    </NavLink>
  );
};

export default LogOut;
