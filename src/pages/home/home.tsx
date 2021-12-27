import { useState } from "react";
import styles from "./home.module.scss";
import GamesBlock from "@/components/blocks/gameCardsBlock";
import CategoriesBlock from "@/components/blocks/categoriesBlock";
import Search from "@/elements/search/search";
import { ProductInfo } from "@/data/productInfos";
import { filterProductInfos, selectProductInfos } from "@/api/clientRequests/getProductInfos";
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

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length !== 0)
      await filterProductInfos(event.target.value, undefined, debouncedSetInfos, setSpinner);
    else await selectProductInfos(3, "date", debouncedSetInfos, setSpinner);
  };

  return (
    <div className={styles.allPage}>
      <Search onChange={onChange} />

      <CategoriesBlock blockName="Game categories" />

      <GamesBlock blockName="New games" blockContent={infos} spinner={spinner} />
    </div>
  );
};
export default Home;
