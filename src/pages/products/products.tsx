import { useState, useEffect } from "react";
import GamesBlock from "@/components/blocks/gameCardsBlock";
import styles from "./products.module.scss";
import ProductsFiltration from "@/components/forms/productsFiltration/productsFiltration";
import { defaultFilters } from "@/data/filtrationFields";
import Search from "@/elements/search/search";
import debounce from "@/utils/debounce";
import { createChangeProcessor } from "@/elements/formElements/inputText/inputText";
import Spinner from "@/elements/spinner/spinner";
import useResource from "@/utils/useResource";

interface IProductsPageProps {
  category: string | undefined;
}

const Products = (props: IProductsPageProps) => {
  const [filters, setFilters] = useState({ ...defaultFilters, category: props.category ?? "" });

  const onChange = debounce(
    createChangeProcessor((newName: string) => {
      setFilters({ ...filters, name: newName });
    }),
    330
  );

  const [responseGot, products, updateFilters] = useResource(filters);

  useEffect(() => {
    setFilters({ ...filters, category: props.category ?? "" });
  }, [props.category]);

  useEffect(() => {
    updateFilters(filters);
  }, [filters]);

  return (
    <div className={styles.allPage}>
      <ProductsFiltration filters={filters} setFilters={setFilters} className={styles.filtrationBlock} />
      <div className={styles.rightPart}>
        <Search onChange={onChange} />
        {responseGot ? <GamesBlock blockName="Games list" products={products} /> : <Spinner />}
      </div>
    </div>
  );
};
export default Products;
