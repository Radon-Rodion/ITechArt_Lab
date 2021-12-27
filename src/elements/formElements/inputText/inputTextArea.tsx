import styles from "./inputText.module.scss";
import { FormField } from "@/data/formFields";
import { createChangeProcessor } from "./inputText";

interface IInputTextAreaProps {
  field: FormField;
  text: string;
  onChange: ((value: React.SetStateAction<string>) => void) | ((value: string) => void);
}

const InputText = (props: IInputTextAreaProps) => (
  <label htmlFor={props.field.name} className={styles.label}>
    <div className={styles.labelName}>{props.field.name}:</div>
    <textarea
      name={props.field.name}
      className={styles.inputMultiline}
      required={props.field.required}
      minLength={props.field.minLength}
      maxLength={props.field.maxLength}
      title={props.field.title}
      value={props.text}
      onChange={createChangeProcessor(props.onChange)}
    />
  </label>
);

export default InputText;
