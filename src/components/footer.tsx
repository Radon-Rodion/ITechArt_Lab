import styles from "./footer.module.scss";
import FooterNavButton from "@/elements/footerNavButton";
import { FooterNavLink, footerNavLinks } from "@/links";

function mapLinks() {
  return footerNavLinks.map((link: FooterNavLink) => (
    <li key={link.id} className={styles.element}>
      <FooterNavButton id={link.id} url={link.url} image={link.image} name={link.name} />
    </li>
  ));
}

const Footer = () => (
  <footer>
    <div className={styles.slogan}>"Games are not just hobbies for us!"</div>
    <ul className={styles.list}>{mapLinks()}</ul>
  </footer>
);

export default Footer;
