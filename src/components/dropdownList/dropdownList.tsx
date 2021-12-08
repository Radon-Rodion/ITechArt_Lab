import { NavLink } from "react-router-dom";
import { CategoryInfo, categoryInfos } from "@/categoriesInfo";
import styles from "./dropdownList.module.scss";

interface ListHeader {
  name: string;
  className: string;
  to: string;
}

function mapSublinks() {
  return categoryInfos.map((link: CategoryInfo) => (
    <li key={link.key} className={styles.listItem}>
      <NavLink to={link.url}>{link.name}</NavLink>
    </li>
  ));
}

const DropdownList = (listHeader: ListHeader) => (
  <>
    <NavLink className={`${listHeader.className} ${styles.listHeader}`} to={listHeader.to}>
      {listHeader.name}
    </NavLink>
    <ul className={styles.list}>{mapSublinks()}</ul>
  </>
);

export default DropdownList;
