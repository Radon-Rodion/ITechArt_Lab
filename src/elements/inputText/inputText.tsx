import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent } from "react";
import styles from "./inputText.module.scss";
import { FormField } from "@/data/formFields";

library.add(fas);

interface IInputTextProps {
  field: FormField;
  icon: IconProp;
  text: string;
  onChange: ((value: React.SetStateAction<string>) => void) | ((value: string) => void);
}

export function createChangeProcessor(
  setter: ((value: React.SetStateAction<string>) => void) | ((value: string) => void)
) {
  const changeProcessor = (e: FormEvent) => {
    setter((e.target as HTMLInputElement).value);
  };
  return changeProcessor;
}

const InputText = (props: IInputTextProps) => (
  <label htmlFor={props.field.name} className={styles.label}>
    <div className={styles.labelName}>{props.field.name}:</div>
    <div className={styles.inputWithIcon}>
      <input
        type={props.field.inputType}
        name={props.field.name}
        className={styles.input}
        required={props.field.required}
        minLength={props.field.minLength}
        maxLength={props.field.maxLength}
        pattern={props.field.pattern}
        title={props.field.title}
        value={props.text}
        onChange={createChangeProcessor(props.onChange)}
      />
      <FontAwesomeIcon icon={props.icon} className={styles.icon} />
    </div>
  </label>
);

export default InputText;
