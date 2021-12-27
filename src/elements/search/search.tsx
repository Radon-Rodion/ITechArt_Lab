import React from "react";
import styles from "./search.module.scss";

interface ISearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const Search = (props: ISearchProps) => (
  <form className={styles.search}>
    <input className={styles.searchLine} placeholder="Search" onChange={props.onChange} />
  </form>
);

export default React.memo(Search);
