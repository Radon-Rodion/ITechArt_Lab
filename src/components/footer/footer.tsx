import React from "react";
import styles from "./footer.module.scss";
import FooterNavButton from "@/elements/footerNavButton/footerNavButton";
import { FooterNavLink, footerNavLinks } from "@/data/links";

const Footer = () => (
  <footer>
    <div className={styles.slogan}>&quot;Games are not just hobbies for us!&quot;</div>
    <ul className={styles.list}>
      {footerNavLinks.map((link: FooterNavLink) => (
        <li key={link.id} className={styles.element}>
          <FooterNavButton id={link.id} url={link.url} image={link.image} name={link.name} />
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
