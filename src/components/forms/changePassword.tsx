import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useState } from "react";
import InputText from "@/elements/formElements/inputText/inputText";
import styles from "./form.module.scss";
import { formFieldByName } from "@/data/formFields";
import FormHeader from "./formHeader";
import { postPassword } from "@/api/clientRequests/profileRequests";
import PurpleButton from "@/elements/purpleButton/purpleButton";

library.add(fas);

interface IChangePasswordProps {
  curPassword: string;
  onExit: () => void;
  userId: number;
}

const ChangePassword = (props: IChangePasswordProps) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (oldPassword === props.curPassword) {
      postPassword(props.userId, newPassword);
      props.onExit();
    } else alert("Incorrect password!");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormHeader name="Change password" onExit={props.onExit} />
      <InputText icon="lock" field={formFieldByName("Password")} text={oldPassword} onChange={setOldPassword} />
      <InputText icon="redo" field={formFieldByName("New password")} text={newPassword} onChange={setNewPassword} />
      <PurpleButton name="Submit" type="submit" className={styles.button} />
    </form>
  );
};

export default ChangePassword;
