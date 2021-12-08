import { NavLink } from "react-router-dom";
import styles from "./gamesCategory.module.scss";
import { CategoryInfo } from "@/categoriesInfo";

const GameCategory = (info: CategoryInfo) => (
  <NavLink className={styles.gameCategory} to={info.url}>
    <img className={styles.categoryImage} src={info.image} alt={info.image} />
    <p className={styles.categoryName}>{info.name}</p>
  </NavLink>
);

export default GameCategory;
