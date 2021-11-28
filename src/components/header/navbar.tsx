import "./header.scss";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavLinkInfo, navLinks } from "@/links";

export class NavBar extends Component {
  renderLinks = () =>
    navLinks.map((link: NavLinkInfo) => (
      <li className="navbutton">
        <NavLink className={({ isActive }) => (isActive ? "navlink active" : "navlink")} to={link.url}>
          {link.name}
        </NavLink>
      </li>
    ));

  render() {
    return (
      <ul className="navbar">
        <nav>{this.renderLinks()}</nav>
      </ul>
    );
  }
}
