import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import InputText from "@/elements/inputText/inputText";
import styles from "./signForm.module.scss";
import { formFieldByName } from "@/data/formFields";
import postUserInfo from "@/api/clientRequests/postPutUserInfo";
import FormHeader from "./formHeader";
import { setUserNameAction } from "@/redux/store/reducers/userReducer";

export interface ISignFormProps {
  onExit: (() => void) | undefined;
  redirectAfterSign: string;
}

const SignIn = (props: ISignFormProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [successFlag, setSuccessFlag] = useState(false);

  const dispatch = useDispatch();

  const setUserName = (userName: string) => {
    dispatch(setUserNameAction(userName));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    postUserInfo({ login, password }, setUserName as (arg: string) => void, setSuccessFlag);
  };

  // redirection to required page
  if (successFlag) {
    return <Navigate to={props.redirectAfterSign} />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormHeader name="Authorization" onExit={props.onExit} />
      <InputText icon="ellipsis-h" field={formFieldByName("Login")} text={login} onChange={setLogin} />
      <InputText icon="ellipsis-h" field={formFieldByName("Password")} text={password} onChange={setPassword} />
      <input type="submit" value="Submit" className={styles.button} />
    </form>
  );
};

export default SignIn;
