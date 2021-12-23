import styles from "./header.module.css";
import NavBar from "./navbar/navbar";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.title}>Game Store</div>
    <NavBar />
  </header>
);

export default Header;
