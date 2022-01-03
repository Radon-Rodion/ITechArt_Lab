import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import styles from "./checkbox.module.scss";

library.add(fas);

interface ICheckboxProps {
  name: string;
  value: boolean;
  onChange: () => void;
}

const Checkbox = (props: ICheckboxProps) => (
  <label htmlFor={props.name} className={styles.allElement}>
    <div className={styles.name}>{props.name}:</div>
    <input type="checkbox" className={styles.checkbox} checked={props.value} onChange={props.onChange} />
  </label>
);

export default Checkbox;
