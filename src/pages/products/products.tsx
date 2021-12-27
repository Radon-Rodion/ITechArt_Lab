import { useState, useEffect } from "react";
import { ProductInfo } from "@/data/productInfos";
import GamesBlock from "@/components/blocks/gameCardsBlock";
import styles from "./products.module.scss";
import { filterAndSortProductInfos } from "@/api/clientRequests/getProductInfos";
import ProductsFiltration from "@/components/forms/productsFiltration/productsFiltration";
import { defaultFilters } from "@/data/filtrationFields";
import Search from "@/elements/search/search";
import debounce from "@/utils/debounce";
import { createChangeProcessor } from "@/elements/formElements/inputText/inputText";

interface IProductsPageProps {
  category: string | undefined;
}
const Products = (props: IProductsPageProps) => {
  const [infos, setInfos] = useState<Array<ProductInfo>>([]);
  const [spinner, setSpinner] = useState(true);
  const [filters, setFilters] = useState({ ...defaultFilters, category: props.category ?? "" });

  if (spinner) {
    filterAndSortProductInfos(filters, setInfos, setSpinner);
  }

  const onChange = debounce(
    createChangeProcessor((newName: string) => {
      setFilters({ ...filters, name: newName });
    }),
    330
  );

  useEffect(() => {
    setFilters({ ...filters, category: props.category ?? "" });
  }, [props.category]);

  useEffect(() => {
    filterAndSortProductInfos(filters, setInfos, setSpinner);
  }, [filters]);

  return (
    <div className={styles.allPage}>
      <ProductsFiltration filters={filters} setFilters={setFilters} className={styles.filtrationBlock} />
      <div className={styles.rightPart}>
        <Search onChange={onChange} />
        <GamesBlock blockName="Games list" blockContent={infos} spinner={spinner} />
      </div>
    </div>
  );
};

export default Products;
