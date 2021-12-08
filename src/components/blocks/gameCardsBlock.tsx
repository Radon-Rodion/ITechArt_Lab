import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GameCard from "@/components/gameCard/gameCard";
import { ProductInfo } from "@/productInfos";
import styles from "./blocks.module.scss";

library.add(fas);

interface GamesBlockProps {
  blockName: string;
  blockContent: Array<ProductInfo> | null;
}

const GamesBlock = (props: GamesBlockProps) => {
  if (props.blockContent == null) return <FontAwesomeIcon icon="spinner" spin size="7x" className={styles.spinner} />;
  if (props.blockContent.length === 0) return <h1>Nothing found(</h1>;
  return (
    <div className={styles.block}>
      <div className={styles.blockHeader}>{props.blockName}</div>
      <div className={styles.blockContent}>
        {props.blockContent.map((info: ProductInfo) => (
          <div className={styles.blockContentElement}>
            <GameCard
              name={info.name}
              price={info.price}
              mark={info.mark}
              image={info.image}
              description={info.description}
              ageCategory={info.ageCategory}
              isPC={info.isPC}
              isXBox={info.isXBox}
              isPS={info.isPS}
              additionDate={info.additionDate}
              key={info.key}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesBlock;
