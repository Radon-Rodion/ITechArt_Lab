import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GamesBlock from "@/components/blocks/gameCardsBlock";
import styles from "./products.module.scss";

import ProductsFiltration from "@/components/forms/productsFiltration/productsFiltration";
import { defaultFilters } from "@/data/filtrationFields";
import Search from "@/elements/search/search";
import debounce from "@/utils/debounce";
import { createChangeProcessor } from "@/elements/formElements/inputText/inputText";
import Spinner from "@/elements/spinner/spinner";
import useResource from "@/utils/useResource";
import SignButton from "@/elements/signButton/signButton";
import AdminForm from "@/components/forms/adminForm";
import { newProductInfo } from "@/data/productInfos";
import { formByName } from "@/data/adminFormsParams";
import { RootState } from "@/redux/store/store";

interface IProductsPageProps {
  category: string | undefined;
}

const Products = (props: IProductsPageProps) => {
  const [filters, setFilters] = useState({ ...defaultFilters, category: props.category ?? "" });

  const [responseGot, products, updateFilters] = useResource(filters);

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
    updateFilters(filters);
  }, [filters]);

  const isAdmin = useSelector((state: RootState) => state.user.isAdmin);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const adminForm = <AdminForm formInfo={formByName("Create card")} gameInfo={newProductInfo} onExit={() => {}} />;

  return (
    <div className={styles.allPage}>
      <ProductsFiltration filters={filters} setFilters={setFilters} className={styles.filtrationBlock} />
      <div className={styles.rightPart}>
        <div className={styles.topLine}>
          <Search onChange={onChange} />
          {isAdmin ? <SignButton name="Create card" className={styles.createButton} form={adminForm} /> : undefined}
        </div>
        {responseGot ? <GamesBlock blockName="Games list" products={products} /> : <Spinner />}
      </div>
    </div>
  );
};
export default Products;
