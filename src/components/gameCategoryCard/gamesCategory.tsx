import React from "react";
import styles from "./gamesCategory.module.scss";
import { CategoryInfo } from "@/data/categoriesInfo";
import LinkGuard from "@/elements/linkGuard";

interface IGameCategoryProps {
  info: CategoryInfo;
}

const GameCategory = (props: IGameCategoryProps) => (
  <LinkGuard className={styles.gameCategory} to={props.info.url} name="">
    <>
      <img className={styles.categoryImage} src={props.info.image} alt={props.info.image} />
      <p className={styles.categoryName}>{props.info.name}</p>
    </>
  </LinkGuard>
);

export default GameCategory;
