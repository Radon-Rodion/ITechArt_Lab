import styles from "./header.module.css";
import NavBar from "./navbar";

const Header = function () {
  console.log(styles);
  return (
    <header className={styles.header}>
      <div className={styles.title}>Game Store</div>
      <NavBar />
    </header>
  );
};

export default Header;
