import { useState, useEffect } from "react";
import { ProductInfo } from "@/productInfos";
import GamesBlock from "@/components/blocks/gameCardsBlock";
import styles from "./products.module.scss";
import { filterProductInfos } from "@/api/clientRequests/getProductInfos";

interface IProductsPageProps {
  category: string | undefined;
}
const Products = (props: IProductsPageProps) => {
  const [infos, setInfos] = useState<Array<ProductInfo> | null>(null);

  if (infos === null || infos.length === 0) {
    filterProductInfos(undefined, props.category, setInfos);
  }

  useEffect(() => {
    filterProductInfos(undefined, props.category, setInfos);
  }, [props.category]);

  return (
    <div className={styles.allPage}>
      <GamesBlock blockName="Games list" blockContent={infos} />
    </div>
  );
};

export default Products;
