import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import InputText from "@/elements/formElements/inputText/inputText";
import styles from "./form.module.scss";
import { formFieldByName } from "@/data/formFields";
import postUserInfo, { SUCCESS } from "@/api/clientRequests/postPutUserInfo";
import FormHeader from "./formHeader";
import PurpleButton from "@/elements/purpleButton/purpleButton";
import ErrorForm from "./errorForm";

export interface ISignFormProps {
  onExit: (() => void) | undefined;
  redirectAfterSign: string;
}

const SignIn = (props: ISignFormProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    postUserInfo({ login, password }, dispatch, setResponseMessage);
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
      <FormHeader name="Authorization" onExit={props.onExit} />
      <InputText icon="ellipsis-h" field={formFieldByName("Login")} text={login} onChange={setLogin} />
      <InputText icon="ellipsis-h" field={formFieldByName("Password")} text={password} onChange={setPassword} />
      <PurpleButton name="Submit" type="submit" className={styles.button} />
    </form>
  );
};

export default SignIn;
