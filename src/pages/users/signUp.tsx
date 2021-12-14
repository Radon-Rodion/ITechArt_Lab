import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import InputText from "@/elements/inputText/inputText";
import styles from "./signForm.module.scss";
import { formFieldByName } from "@/data/formFields";
import { ISignFormProps } from "./signIn";
import { putUserInfo } from "@/api/clientRequests/postPutUserInfo";
import UserContext from "@/userContext";

library.add(fas);

const useFields: () => [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  React.Dispatch<React.SetStateAction<string>>
] = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return [login, setLogin, password, setPassword, password2, setPassword2];
};

const SignUp = (props: ISignFormProps) => {
  const [login, setLogin, password, setPassword, password2, setPassword2] = useFields();
  const [successFlag, setSuccessFlag] = useState(false);

  const userContext = useContext(UserContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords aren't equal!");
    } else {
      putUserInfo({ login, password }, userContext.setUserName as (arg: string) => void, setSuccessFlag);
    }
  };

  // redirection to profile page
  if (successFlag) {
    return <Navigate to="/profile" />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        Registration
        <button type="button" className={styles.closeBtn} onClick={props.onExit}>
          <FontAwesomeIcon icon="times" size="3x" />
        </button>
      </div>
      <InputText icon="address-card" field={formFieldByName("Login")} text={login} onChange={setLogin} />
      <InputText icon="lock" field={formFieldByName("Password")} text={password} onChange={setPassword} />
      <InputText icon="redo" field={formFieldByName("Repeat password")} text={password2} onChange={setPassword2} />
      <input type="submit" value="Submit" className={styles.button} />
    </form>
  );
};

export default SignUp;
