import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useState } from "react";
import InputText from "@/elements/inputText/inputText";
import styles from "./signForm.module.scss";
import { formFieldByName } from "@/data/formFields";
import FormHeader from "./formHeader";
import { postPassword } from "@/api/clientRequests/profileRequests";

library.add(fas);

interface IChangePasswordProps {
  onExit: () => void;
  userId: number;
}

const ChangePassword = (props: IChangePasswordProps) => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === password2) {
      postPassword(props.userId, password);
      props.onExit();
    }
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
