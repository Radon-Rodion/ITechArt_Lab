import { useState, useEffect } from "react";
import { ProductInfo } from "@/data/productInfos";
import GamesBlock from "@/components/blocks/gameCardsBlock";
import styles from "./products.module.scss";
import { filterProductInfos } from "@/api/clientRequests/getProductInfos";

interface IProductsPageProps {
  category: string | undefined;
}
const Products = (props: IProductsPageProps) => {
  const [infos, setInfos] = useState<Array<ProductInfo>>([]);
  const [spinner, setSpinner] = useState(true);

  if (infos.length === 0) {
    filterProductInfos(undefined, props.category, setInfos, setSpinner);
  }

  useEffect(() => {
    filterProductInfos(undefined, props.category, setInfos, setSpinner);
  }, [props.category]);

  return (
    <div className={styles.allPage}>
      <GamesBlock blockName="Games list" blockContent={infos} spinner={spinner} />
    </div>
  );
};

export default Products;
