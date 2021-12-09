import { NavLink } from "react-router-dom";
import styles from "./gamesCategory.module.scss";
import { CategoryInfo } from "@/categoriesInfo";

interface IGameCategoryProps {
  info: CategoryInfo;
}

const GameCategory = (props: IGameCategoryProps) => (
  <NavLink className={styles.gameCategory} to={props.info.url}>
    <img className={styles.categoryImage} src={props.info.image} alt={props.info.image} />
    <p className={styles.categoryName}>{props.info.name}</p>
  </NavLink>
);

export default GameCategory;
