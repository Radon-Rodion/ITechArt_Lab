import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./navbar.module.scss";

interface INavlinkWithElementProps {
  children: JSX.Element | string;
  to: string;
}

const NavLinkWithElement = (props: INavlinkWithElementProps) => (
  <NavLink
    className={({ isActive }) => (isActive ? `${styles.navlink} ${styles.active}` : styles.navlink)}
    to={props.to}
  >
    {props.children}
  </NavLink>
);

export default NavLinkWithElement;
