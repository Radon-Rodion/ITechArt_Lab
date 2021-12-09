import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GameCard from "@/components/gameCard/gameCard";
import { ProductInfo } from "@/productInfos";
import styles from "./blocks.module.scss";

library.add(fas);

interface IGamesBlockProps {
  blockName: string;
  blockContent: Array<ProductInfo> | null;
}

const GamesBlock = (props: IGamesBlockProps) => {
  if (props.blockContent == null) return <FontAwesomeIcon icon="spinner" spin size="7x" className={styles.spinner} />;
  if (props.blockContent.length === 0) return <h1>Nothing found(</h1>;
  return (
    <div className={styles.block}>
      <div className={styles.blockHeader}>{props.blockName}</div>
      <div className={styles.blockContent}>
        {props.blockContent.map((info: ProductInfo) => (
          <div className={styles.blockContentElement} key={info.key}>
            <GameCard gameInfo={info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesBlock;
