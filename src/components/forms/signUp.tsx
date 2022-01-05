import { FormEvent, useState } from "react";
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

const SignUp = (props: ISignFormProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === passwordRepeat) putUserInfo({ login, password }, dispatch, setResponseMessage);
  };

  const errorMessageAboutPasswords = password !== passwordRepeat ? "Passwords aren't equal!" : undefined;

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
      <InputText icon="address-card" field={formFieldByName("Login")} text={login} onChange={setLogin} />
      <InputText icon="lock" field={formFieldByName("Password")} text={password} onChange={setPassword} />
      <InputText
        icon="redo"
        field={formFieldByName("Repeat password")}
        text={passwordRepeat}
        onChange={setPasswordRepeat}
        errorMessage={errorMessageAboutPasswords}
      />
      <PurpleButton name="Submit" type="submit" className={styles.button} />
    </form>
  );
};

export default SignUp;
