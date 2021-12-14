import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useState, useContext } from "react";
import InputText from "@/elements/inputText/inputText";
import styles from "./signForm.module.scss";
import { formFieldByName } from "@/data/formFields";
import postUserInfo from "@/api/clientRequests/postPutUserInfo";
import UserContext from "@/userContext";

library.add(fas);

export interface ISignFormProps {
  onExit: (() => void) | undefined;
}

const useFields: () => [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  React.Dispatch<React.SetStateAction<string>>
] = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return [login, setLogin, password, setPassword];
};

const SignIn = (props: ISignFormProps) => {
  const [login, setLogin, password, setPassword] = useFields();

  const userContext = useContext(UserContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    postUserInfo({ login, password }, userContext.setUserName as (arg: string) => void);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        Authorization
        <button type="button" className={styles.closeBtn} onClick={props.onExit}>
          <FontAwesomeIcon icon="times" size="3x" />
        </button>
      </div>
      <InputText icon="ellipsis-h" field={formFieldByName("Login")} text={login} onChange={setLogin} />
      <InputText icon="ellipsis-h" field={formFieldByName("Password")} text={password} onChange={setPassword} />
      <input type="submit" value="Submit" className={styles.button} />
    </form>
  );
};

export default SignIn;
