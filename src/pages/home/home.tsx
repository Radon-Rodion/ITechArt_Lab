import { useState } from "react";
import styles from "./home.module.scss";
import GamesBlock from "@/components/blocks/gameCardsBlock";
import CategoriesBlock from "@/components/blocks/categoriesBlock";
import Search from "@/elements/search/search";
import { ProductInfo } from "@/data/productInfos";
import { selectProductInfos } from "@/api/clientRequests/getProductInfos";
import debounce from "@/utils/debounce";

const Home = () => {
  const [infos, setInfos] = useState<Array<ProductInfo>>([]);
  const [gamesLoaded, setGamesLoadedBool] = useState(false);
  const [spinner, setSpinner] = useState(true);

  if (!gamesLoaded) {
    selectProductInfos(3, "date", setInfos, setSpinner);
    setGamesLoadedBool(true);
  }
  const debouncedSetInfos = debounce(setInfos, 330);

  return (
    <div className={styles.allPage}>
      <Search setResponse={debouncedSetInfos} setSpinner={setSpinner} />

      <CategoriesBlock blockName="Game categories" />

      <GamesBlock blockName="New games" blockContent={infos} spinner={spinner} />
    </div>
  );
};
export default Home;
