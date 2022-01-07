import { FormEvent, useState } from "react";
import InputText from "@/elements/formElements/inputText/inputText";
import styles from "./form.module.scss";
import { formFieldByName } from "@/data/formFields";
import FormHeader from "./formHeader";
import { postPassword } from "@/api/clientRequests/profileRequests";
import PurpleButton from "@/elements/purpleButton/purpleButton";
import useRefWithValueChanger from "@/utils/useRefWithValueChanger";
import debounce from "@/utils/debounce";

interface IChangePasswordProps {
  curPassword: string;
  onExit?: () => void;
  userId: number;
}

const ChangePassword = (props: IChangePasswordProps) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useRefWithValueChanger("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (oldPassword === props.curPassword) {
      postPassword(props.userId, newPassword.current);
      if (props.onExit) props.onExit();
    }
  };

  const setOldPasswordDebounced = debounce((pass: string) => setOldPassword(pass), 500);

  const errorMessage = oldPassword !== props.curPassword ? "Incorrect password!" : undefined;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormHeader name="Change password" onExit={props.onExit} />
      <InputText
        icon="lock"
        field={formFieldByName("Password")}
        text={oldPassword}
        onChange={setOldPasswordDebounced}
        errorMessage={errorMessage}
      />
      <InputText
        icon="redo"
        field={formFieldByName("New password")}
        text={newPassword.current}
        onChange={setNewPassword}
      />
      <PurpleButton name="Submit" type="submit" className={styles.button} />
    </form>
  );
};

ChangePassword.defaultProps = {
  onExit: undefined,
};

export default ChangePassword;
