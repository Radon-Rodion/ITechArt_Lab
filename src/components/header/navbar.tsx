import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import { NavLinkInfo, navLinks } from "@/links";
import DropdownList from "@/elements/dropdownList";

function getNavbarElement(link: NavLinkInfo) {
  switch (link.name) {
    case "Products":
      return <DropdownList className={styles.navlink} to={link.url} name={link.name} />;
    default:
      return (
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.navlink} ${styles.active}` : styles.navlink)}
          to={link.url}
        >
          {link.name}
        </NavLink>
      );
  }
}

function showLinks() {
  return navLinks.map((link: NavLinkInfo) => (
    <li key={link.id} className={styles.navbutton}>
      {getNavbarElement(link)}
    </li>
  ));
}

const NavBar = () => (
  <ul className={styles.navbar}>
    <nav>{showLinks()}</nav>
  </ul>
);

export default NavBar;
