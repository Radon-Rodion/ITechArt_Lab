import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import { NavLinkInfo, navLinks } from "@/links";

function mapLinks() {
  return navLinks.map((link: NavLinkInfo) => (
    <li key={link.id} className={styles.navbutton}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.navlink} ${styles.active}` : styles.navlink)}
        to={link.url}
      >
        {link.name}
      </NavLink>
    </li>
  ));
}

const NavBar = function () {
  return (
    <ul className={styles.navbar}>
      <nav>{mapLinks()}</nav>
    </ul>
  );
};

export default NavBar;
