import "./footerNavButton.scss";
import { Component } from "react";
import { FooterNavLink } from "@/links";

export class FooterNavButton extends Component<FooterNavLink> {
  ["constructor"]: typeof FooterNavButton;

  constructor(props: FooterNavLink) {
    super(props);
  }

  render() {
    return (
      <a className="footerNavButton" href={this.props.url}>
        <img className="footerNavButtonImage" src={this.props.image} alt={this.props.name} />
      </a>
    );
  }
}
