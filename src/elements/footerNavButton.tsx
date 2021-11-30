import styles from "./footerNavButton.module.scss";
import { FooterNavLink } from "@/links";

const FooterNavButton = function (link: FooterNavLink) {
  return (
    <a className={styles.footerNavButton} href={link.url}>
      <img className={styles.footerNavButtonImage} src={link.image} alt={link.name} />
    </a>
  );
};

export default FooterNavButton;
