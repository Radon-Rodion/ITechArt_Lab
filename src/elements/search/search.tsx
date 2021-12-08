import React, { SetStateAction } from "react";
import styles from "./search.module.scss";
import { filterProductInfos, selectProductInfos } from "@/api/clientRequests/getProductInfos";
import { ProductInfo } from "@/productInfos";

interface SearchProps {
  setResponse: (args: SetStateAction<ProductInfo[] | null>) => Promise<void>;
}

const Search = (props: SearchProps) => {
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length !== 0) await filterProductInfos(event.target.value, undefined, props.setResponse);
    else await selectProductInfos(3, "date", props.setResponse);
  };
  return (
    <form className={styles.search}>
      <input className={styles.searchLine} placeholder="Search" onChange={onChange} />
    </form>
  );
};

export default React.memo(Search);
