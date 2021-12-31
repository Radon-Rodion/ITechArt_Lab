import { FieldValue } from "@/data/filtrationFields";
import { createChangeProcessor } from "../inputText/inputText";
import styles from "./select.module.scss";

interface ISelectProps {
  name?: string;
  valuesWithText: FieldValue[];
  selectedItemIndex?: number;
  onChange: (value: string) => void;
  className?: string;
}

const Select = (props: ISelectProps) => {
  const allElementClass = `${props.className} ${styles.allElement}`;
  const selectedValue = props.valuesWithText[props.selectedItemIndex ?? 0].value;
  return (
    <div className={allElementClass}>
      <label htmlFor="select" className={styles.label}>
        {props.name}
        <select
          name="form_select"
          className={styles.select}
          onChange={createChangeProcessor(props.onChange)}
          value={selectedValue}
        >
          {props.valuesWithText.map((val, i) => (
            <option value={val.value} key={val.value} className={styles.option}>
              {val.text}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
Select.defaultProps = {
  name: "",
  selectedItemIndex: 0,
  className: "",
};

export default Select;
