import React, { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputText from "@/elements/formElements/inputText/inputText";
import styles from "./form.module.scss";
import { formFieldByName } from "@/data/formFields";
import { ISignFormProps } from "./signIn";
import { putUserInfo, SUCCESS } from "@/api/clientRequests/postPutUserInfo";
import FormHeader from "./formHeader";
import PurpleButton from "@/elements/purpleButton/purpleButton";
import ErrorForm from "./errorForm";
import useRefWithValueChanger from "@/utils/useRefWithValueChanger";

const SignUp = (props: ISignFormProps) => {
  const [login, setLogin] = useRefWithValueChanger("");
  const [password, setPassword] = useRefWithValueChanger("");
  const [passwordRepeat, setPasswordRepeat] = useRefWithValueChanger("");
  const [responseMessage, setResponseMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password.current === passwordRepeat.current)
      putUserInfo({ login: login.current, password: password.current }, dispatch, setResponseMessage);
    else setResponseMessage("Passwords aren't equal!");
  };

  // redirection to required page
  if (responseMessage === SUCCESS) {
    return <Navigate to={props.redirectAfterSign} />;
  }

  if (responseMessage) {
    return <ErrorForm message={responseMessage} onExit={() => setResponseMessage("")} />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormHeader name="Registration" onExit={props.onExit} />
      <InputText icon="address-card" field={formFieldByName("Login")} text={login.current} onChange={setLogin} />
      <InputText icon="lock" field={formFieldByName("Password")} text={password.current} onChange={setPassword} />
      <InputText
        icon="redo"
        field={formFieldByName("Repeat password")}
        text={passwordRepeat.current}
        onChange={setPasswordRepeat}
      />
      <PurpleButton name="Submit" type="submit" className={styles.button} />
    </form>
  );
};

export default SignUp;
