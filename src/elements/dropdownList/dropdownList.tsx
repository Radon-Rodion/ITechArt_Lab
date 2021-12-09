import { NavLink } from "react-router-dom";
import { CategoryInfo, categoryInfos } from "@/categoriesInfo";
import styles from "./dropdownList.module.scss";

interface IDopdownListProps {
  name: string;
  className: string;
  to: string;
}

const DropdownList = (props: IDopdownListProps) => (
  <>
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${props.className} ${styles.listHeader} ${styles.active}`
          : `${props.className} ${styles.listHeader}`
      }
      to={props.to}
    >
      {props.name}
    </NavLink>
    <ul className={styles.list}>
      {categoryInfos.map((link: CategoryInfo) => (
        <li key={link.key} className={styles.listItem}>
          <NavLink to={link.url} className={styles.link}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </>
);

export default DropdownList;
