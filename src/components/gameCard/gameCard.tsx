import { ProductInfo } from "@/productInfos";
import getCard from "./getCard";
import StarsMark from "@/elements/starsMark/starsMark";
import CategoryMarkers from "@/elements/gameCategoryMarkers/categoryMarkers";

import styles from "./gameCard.module.scss";

interface IGameCardProps {
  gameInfo: ProductInfo;
}

const GameCard = (props: IGameCardProps) => (
  <div className={styles.card}>
    <div className={styles.front}>
      <CategoryMarkers pc={props.gameInfo.isPC} xbox={props.gameInfo.isXBox} ps={props.gameInfo.isPS} />
      <img src={props.gameInfo.image} alt={props.gameInfo.image} className={styles.image} />
      <div className={styles.frontInfo}>
        <div className={styles.gameName}>{props.gameInfo.name}</div>
        <div className={styles.gmaePrice}>{`${props.gameInfo.price}$`}</div>
        <StarsMark value={props.gameInfo.mark} />
      </div>
    </div>

    <div className={styles.back}>
      <div className={styles.backContent}>
        <div className={styles.description}>{props.gameInfo.description}</div>
        <div className={styles.ageCategory}>{`${props.gameInfo.ageCategory}+`}</div>
        <button className={styles.buttonAdd} type="button" onClick={getCard}>
          Add to cart
        </button>
      </div>
    </div>
  </div>
);

export default GameCard;