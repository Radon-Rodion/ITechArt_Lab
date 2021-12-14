import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Navigate } from "react-router-dom";
import styles from "./navbar.module.scss";
import { NavLinkInfo, navLinks } from "@/data/links";
import DropdownList from "@/elements/dropdownList/dropdownList";
import NavbarButton from "./navbarButton";
import SignIn from "@/pages/users/signIn";
import SignUp from "@/pages/users/signUp";
import UserContext from "@/userContext";
import LogOut from "./logoutButton";
import NavLinkWithElement from "./navlinkWithElement";

library.add(fas);

function getNavbarElement(link: NavLinkInfo, userName: string | undefined) {
  // I know that this function is too large, but almost all navbar components have to be processed differently... I have no good idea of how to decrease this switch-case size
  switch (link.name) {
    case "Products":
      return <DropdownList className={styles.navlink} to={link.url} name={link.name} />;
    case "Sign In":
      return (
        <NavbarButton name="Sign In">
          <SignIn onExit={undefined} />
        </NavbarButton>
      );
    case "Sign Up":
      return (
        <NavbarButton name="Sign Up">
          <SignUp onExit={undefined} />
        </NavbarButton>
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
      return <NavLinkWithElement to={link.url}>{link.name}</NavLinkWithElement>;
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

const NavBar = () => (
  <UserContext.Consumer>
    {(value) => (
      <ul className={styles.navbar}>
        <nav>{showLinks(value.userName)}</nav>
      </ul>
    )}
  </UserContext.Consumer>
);

export default NavBar;
