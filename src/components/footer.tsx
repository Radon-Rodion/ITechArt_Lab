import "./footer.scss";
import { Component } from "react";
import { FooterNavButton } from "@/elements/footerNavButton";
import { FooterNavLink, footerNavLinks } from "@/links";

export class Footer extends Component {
  renderLinks = () =>
    footerNavLinks.map((link: FooterNavLink) => (
      <li className="element">
        <FooterNavButton url={link.url} image={link.image} name={link.name} />
      </li>
    ));

  render() {
    return (
      <footer>
        <div className="slogan">"Games are not just hobbies for us!"</div>
        <ul className="list">{this.renderLinks()}</ul>
      </footer>
    );
  }
}
