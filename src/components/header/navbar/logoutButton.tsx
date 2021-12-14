import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./navbar.module.scss";
import UserContext from "@/userContext";

library.add(fas);

const LogOut = () => (
  <UserContext.Consumer>
    {(value) => {
      const logOut = () => {
        value.setUserName(undefined);
      };
      return (
        <NavLink className={styles.navlink} to="/" onClick={logOut}>
          <FontAwesomeIcon icon="sign-out-alt" />
        </NavLink>
      );
    }}
  </UserContext.Consumer>
);

export default LogOut;
