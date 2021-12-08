import styles from "./blocks.module.scss";
import GameCategory from "@/components/gameCategoryCard/gamesCategory";
import { CategoryInfo, categoryInfos } from "@/categoriesInfo";

interface BlockName {
  blockName: string;
}

const CategoriesBlock = (blockName: BlockName) => (
  <div className={styles.block}>
    <div className={styles.blockHeader}>{blockName.blockName}</div>
    <div className={styles.blockContent}>
      {categoryInfos.map((info: CategoryInfo) => (
        <div className={styles.blockContentElement}>
          <GameCategory name={info.name} image={info.image} url={info.url} key={info.key} />
        </div>
      ))}
    </div>
  </div>
);

export default CategoriesBlock;
