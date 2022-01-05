import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./form.module.scss";

library.add(fas);

interface IFormHeaderProps {
  name: string;
  onExit: (() => void) | undefined;
}

const FormHeader = (props: IFormHeaderProps) => (
  <div className={styles.header}>
    {props.name}
    <button type="button" className={styles.closeBtn} onClick={props.onExit}>
      <FontAwesomeIcon icon="times" size="3x" />
    </button>
  </div>
);

export default FormHeader;
