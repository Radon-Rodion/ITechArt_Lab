import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { FormEvent, useState } from "react";
import InputText from "@/elements/inputText/inputText";
import styles from "./signForm.module.scss";
import { formFieldByName } from "@/data/formFields";
import FormHeader from "./formHeader";

library.add(fas);

interface IChangePasswordProps {
  onExit: (() => void) | undefined;
}

const useFields: () => [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  React.Dispatch<React.SetStateAction<string>>
] = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return [password, setPassword, password2, setPassword2];
};

const ChangePassword = (props: IChangePasswordProps) => {
  const [password, setPassword, password2, setPassword2] = useFields();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormHeader name="Change password" onExit={props.onExit} />
      <InputText icon="lock" field={formFieldByName("Password")} text={password} onChange={setPassword} />
      <InputText icon="redo" field={formFieldByName("Repeat password")} text={password2} onChange={setPassword2} />
      <input type="submit" value="Submit" className={styles.button} />
    </form>
  );
};

export default ChangePassword;
