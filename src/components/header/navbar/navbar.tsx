import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./navbar.module.scss";
import { NavLinkInfo, navLinks } from "@/data/links";
import DropdownList from "@/elements/dropdownList/dropdownList";
import SignButton from "@/elements/signButton/signButton";
import SignIn from "@/pages/users/signIn";
import SignUp from "@/pages/users/signUp";
import LogOut from "./logoutButton";
import NavLinkWithElement from "./navlinkWithElement";
import LinkGuard from "@/elements/linkGuard";
import { RootState } from "@/redux/store/store";

library.add(fas);

function getNavbarElement(link: NavLinkInfo, userName: string | undefined) {
  // I know that this function is too large, but almost all navbar components have to be processed differently... I have no good idea of how to decrease this switch-case size
  switch (link.name) {
    case "Home":
      return <NavLinkWithElement to={link.url}>Home</NavLinkWithElement>;
    case "Products":
      return <DropdownList className={styles.navlink} to={link.url} name={link.name} />;
    case "Sign In":
      return (
        <SignButton
          name="Sign In"
          className={styles.navbarBtn}
          form={<SignIn onExit={undefined} redirectAfterSign="/" />}
        />
      );
    case "Sign Up":
      return (
        <SignButton
          name="Sign Up"
          className={styles.navbarBtn}
          form={<SignUp onExit={undefined} redirectAfterSign="/profile/" />}
        />
      );
    case "Log Out": {
      return <LogOut />;
    }
    case "Profile": {
      return (
        <NavLinkWithElement to={link.url}>
          <>
            <FontAwesomeIcon icon="user" />
            {userName}
          </>
        </NavLinkWithElement>
      );
    }
    case "Buscket": {
      return (
        <NavLinkWithElement to={link.url}>
          <>
            <FontAwesomeIcon icon="shopping-cart" /> 0
          </>
        </NavLinkWithElement>
      );
    }
    default:
      return <LinkGuard to={link.url} name={link.name} className={styles.navlink} classNameActive={styles.active} />;
  }
}

function showLinks(userName: string | undefined) {
  const showComponent = (link: NavLinkInfo) =>
    link.shownAfterLogIn === undefined || (userName !== undefined) === link.shownAfterLogIn;

  return navLinks.map(
    (link: NavLinkInfo) =>
      showComponent(link) && (
        <li key={link.id} className={styles.navbutton}>
          {getNavbarElement(link, userName)}
        </li>
      )
  );
}

const NavBar = () => {
  const userName = useSelector((state: RootState) => state.user.userName);
  const className = styles.navbar + (userName !== undefined ? styles.logged : "");

  return (
    <ul className={className}>
      <nav>{showLinks(userName)}</nav>
    </ul>
  );
};

export default NavBar;
