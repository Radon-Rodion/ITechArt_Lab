import React, { SetStateAction } from "react";
import styles from "./search.module.scss";
import { filterProductInfos, selectProductInfos } from "@/api/clientRequests/getProductInfos";
import { ProductInfo } from "@/data/productInfos";

interface ISearchProps {
  setResponse: (args: SetStateAction<ProductInfo[]>) => Promise<void>;
  setSpinner: (spinner: boolean) => void;
}

const Search = (props: ISearchProps) => {
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length !== 0)
      await filterProductInfos(event.target.value, undefined, props.setResponse, props.setSpinner);
    else await selectProductInfos(3, "date", props.setResponse, props.setSpinner);
  };
  return (
    <form className={styles.search}>
      <input className={styles.searchLine} placeholder="Search" onChange={onChange} />
    </form>
  );
};

export default React.memo(Search);
