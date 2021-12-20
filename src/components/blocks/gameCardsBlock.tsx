import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GameCard from "@/components/gameCard/gameCard";
import { ProductInfo } from "@/data/productInfos";
import styles from "./blocks.module.scss";
import Block from "@/components/blocks/block";

library.add(fas);

interface IGamesBlockProps {
  blockName: string;
  blockContent: Array<ProductInfo>;
  spinner: boolean;
}

const GamesBlock = (props: IGamesBlockProps) => {
  if (props.spinner) return <FontAwesomeIcon icon="spinner" spin size="7x" className={styles.spinner} />;
  if (props.blockContent.length === 0) return <h1>Nothing found(</h1>;
  return (
    <Block blockName={props.blockName}>
      {props.blockContent.map((info: ProductInfo) => (
        <div className={styles.blockContentElement} key={info.key}>
          <GameCard gameInfo={info} />
        </div>
      ))}
    </Block>
  );
};

export default GamesBlock;
