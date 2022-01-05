import { FormEvent } from "react";
import styles from "./form.module.scss";
import FormHeader from "./formHeader";

export interface IErrorFormProps {
  onExit: (() => void) | undefined;
  message: string;
}

const ErrorForm = (props: IErrorFormProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (props.onExit) props.onExit();
  };

  return (
    <form className={styles.smallForm} onSubmit={handleSubmit}>
      <FormHeader name="Error" onExit={props.onExit} />
      <div className={styles.errorMessage}>{props.message}</div>
    </form>
  );
};

export default ErrorForm;
