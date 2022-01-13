import React from "react";
import styles from "./blocks.module.scss";
import GameCategory from "@/components/gameCategoryCard/gamesCategory";
import { CategoryInfo, categoryInfos } from "@/data/categoriesInfo";
import Block from "@/components/blocks/block";

interface ICategoriesBlockProps {
  blockName: string;
}

const CategoriesBlock = (props: ICategoriesBlockProps) => (
  <Block blockName={props.blockName}>
    {categoryInfos.map((info: CategoryInfo) => (
      <div className={styles.blockContentElement} key={info.key}>
        <GameCategory info={info} />
      </div>
    ))}
  </Block>
);

export default React.memo(CategoriesBlock);
