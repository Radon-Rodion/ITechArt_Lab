import styles from "./footerNavButton.module.scss";
import { FooterNavLink } from "@/data/links";

const FooterNavButton = (link: FooterNavLink) => (
  <a className={styles.footerNavButton} href={link.url}>
    <img className={styles.footerNavButtonImage} src={link.image} alt={link.name} />
  </a>
);

export default FooterNavButton;
