import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import InputText from "@/elements/formElements/inputText/inputText";
import styles from "./signForm.module.scss";
import { formFieldByName } from "@/data/formFields";
import postUserInfo from "@/api/clientRequests/postPutUserInfo";
import FormHeader from "./formHeader";
import { setUserNameAction } from "@/redux/actionCreators/userActionsCreator";
import PurpleButton from "@/elements/purpleButton/purpleButton";

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
      <PurpleButton name="Submit" type="submit" className={styles.button} />
    </form>
  );
};

export default SignIn;
