import { Suspense, useState } from "react";
import styles from "./home.module.scss";
import GamesBlock from "@/components/blocks/gameCardsBlock";
import CategoriesBlock from "@/components/blocks/categoriesBlock";
import Search from "@/elements/search/search";
import { filterProductInfos, selectProductInfos } from "@/api/clientRequests/getProductInfos";
import debounce from "@/utils/debounce";
import Spinner from "@/elements/spinner/spinner";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const resource = !searchText.length ? selectProductInfos(3, "date") : filterProductInfos(searchText, undefined);

  const onChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }, 330);

  return (
    <div className={styles.allPage}>
      <Search onChange={onChange} />

      <CategoriesBlock blockName="Game categories" />
      <Suspense fallback={<Spinner />}>
        <GamesBlock blockName="New games" resource={resource} />
      </Suspense>
    </div>
  );
};
export default Home;
