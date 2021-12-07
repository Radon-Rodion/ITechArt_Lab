import styles from "./home.module.scss";
import GameCard from "@/elements/gameCard";
import GameCategory from "@/elements/gamesCategory";
import { ProductInfo, productInfos } from "@/productInfos";
import { CategoryInfo, categoryInfos } from "@/categoriesInfo";

const Search = () => (
  <form className={styles.search}>
    <input className={styles.searchLine} placeholder="Search" />
  </form>
);

function gamesBlockContent() {
  return (
    <div className={styles.blockContent}>
      {productInfos.map((info: ProductInfo) => (
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
  );
}

function categoriesBlockContent() {
  return (
    <div className={styles.blockContent}>
      {categoryInfos.map((info: CategoryInfo) => (
        <div className={styles.blockContentElement}>
          <GameCategory name={info.name} image={info.image} url={info.url} key={info.key} />
        </div>
      ))}
    </div>
  );
}

const Home = () => (
  <div className={styles.allPage}>
    <Search />
    <div className={styles.block}>
      <div className={styles.blockHeader}>Categories</div>
      {categoriesBlockContent()}
    </div>
    <div className={styles.block}>
      <div className={styles.blockHeader}>New games</div>
      {gamesBlockContent()}
    </div>
  </div>
);

export default Home;
