import React from "react";
import { CategoryInfo, categoryInfos } from "@/data/categoriesInfo";
import styles from "./dropdownList.module.scss";
import LinkGuard from "@/elements/linkGuard";

interface IDopdownListProps {
  name: string;
  className: string;
  to: string;
}

const DropdownList = (props: IDopdownListProps) => (
  <>
    <LinkGuard
      className={`${props.className} ${styles.listHeader}`}
      classNameActive={styles.active}
      to={props.to}
      name={props.name}
    />
    <ul className={styles.list}>
      {categoryInfos.map((link: CategoryInfo) => (
        <li key={link.key} className={styles.listItem}>
          <LinkGuard to={link.url} className={styles.link} name={link.name} />
        </li>
      ))}
    </ul>
  </>
);

export default DropdownList;
