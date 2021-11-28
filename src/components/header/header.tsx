import "./header.scss";
import { Component } from "react";
import { NavBar } from "./navbar";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">Best Games Portal</div>
        <NavBar />
      </header>
    );
  }
}
