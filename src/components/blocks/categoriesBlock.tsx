import styles from "./blocks.module.scss";
import GameCategory from "@/components/gameCategoryCard/gamesCategory";
import { CategoryInfo, categoryInfos } from "@/categoriesInfo";

interface ICategoriesBlockProps {
  blockName: string;
}

const CategoriesBlock = (props: ICategoriesBlockProps) => (
  <div className={styles.block}>
    <div className={styles.blockHeader}>{props.blockName}</div>
    <div className={styles.blockContent}>
      {categoryInfos.map((info: CategoryInfo) => (
        <div className={styles.blockContentElement} key={info.key}>
          <GameCategory info={info} />
        </div>
      ))}
    </div>
  </div>
);

export default CategoriesBlock;
