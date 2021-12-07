import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProductInfo } from "@/productInfos";
import { categoryInfos } from "@/categoriesInfo";

import styles from "./gameCard.module.scss";

library.add(fas);

interface Mark {
  value: number;
}

const StarsMark = (mark: Mark) => (
  <div className={styles.stars}>{Array(mark.value).fill(<FontAwesomeIcon icon="star" />)}</div>
);

interface Categories {
  pc: boolean;
  xbox: boolean;
  ps: boolean;
}

const CategoryMarkers = (categories: Categories) => (
  <div className={styles.categories}>
    {categories.pc ? ( // PC category marker
      <img src={categoryInfos.find((info) => info.name === "PC")?.image} alt="PC.jpg" className={styles.category} />
    ) : (
      <span />
    )}

    {categories.ps ? ( // Playstation category marker
      <img
        src={categoryInfos.find((info) => info.name === "Playstation")?.image}
        alt="Playstation.jpg"
        className={styles.category}
      />
    ) : (
      <span />
    )}

    {categories.xbox ? ( // XBox category marker
      <img src={categoryInfos.find((info) => info.name === "Xbox")?.image} alt="Xbox.jpg" className={styles.category} />
    ) : (
      <span />
    )}
  </div>
);

const GameCard = (gameInfo: ProductInfo) => (
  <div className={styles.card}>
    <div className={styles.front}>
      <CategoryMarkers pc={gameInfo.isPC} xbox={gameInfo.isXBox} ps={gameInfo.isPS} />
      <img src={gameInfo.image} alt={gameInfo.image} className={styles.image} />
      <div className={styles.frontInfo}>
        <div className={styles.gameName}>{gameInfo.name}</div>
        <div className={styles.gmaePrice}>{`${gameInfo.price}$`}</div>
        <StarsMark value={gameInfo.mark} />
      </div>
    </div>

    <div className={styles.back}>
      <div className={styles.backContent}>
        <div className={styles.description}>{gameInfo.description}</div>
        <div className={styles.ageCategory}>{`${gameInfo.ageCategory}+`}</div>
        <button className={styles.buttonAdd} type="button">
          Add to cart
        </button>
      </div>
    </div>
  </div>
);

export default GameCard;
