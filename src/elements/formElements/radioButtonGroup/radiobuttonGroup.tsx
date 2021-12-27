import { FieldValue } from "@/data/filtrationFields";
import { createChangeProcessor } from "../inputText/inputText";
import styles from "./radiobuttonGroup.module.scss";

interface IRadioButtonGroupProps {
  name: string;
  valuesWithText: FieldValue[];
  onChange: (value: string) => void;
  className?: string;
}

const RadioButtonGroup = (props: IRadioButtonGroupProps) => {
  const allElementClass = `${props.className} ${styles.allElement}`;
  return (
    <div className={allElementClass}>
      <label htmlFor="radio">
        <div className={styles.title}>{props.name}</div>
        {props.valuesWithText.map((val) => (
          <div className={styles.rbWithName} key={val.value}>
            <input
              name={props.name}
              type="radio"
              value={val.value}
              defaultChecked={val === props.valuesWithText[0]}
              onChange={createChangeProcessor(props.onChange)}
            />
            {val.text}
          </div>
        ))}
      </label>
    </div>
  );
};
RadioButtonGroup.defaultProps = {
  className: "",
};

export default RadioButtonGroup;
