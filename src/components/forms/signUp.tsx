import { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputText from "@/elements/formElements/inputText/inputText";
import styles from "./signForm.module.scss";
import { formFieldByName } from "@/data/formFields";
import { ISignFormProps } from "./signIn";
import { putUserInfo } from "@/api/clientRequests/postPutUserInfo";
import FormHeader from "./formHeader";
import { setUserNameAction } from "@/redux/store/reducers/userReducer";
import PurpleButton from "@/elements/purpleButton/purpleButton";

const SignUp = (props: ISignFormProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [successFlag, setSuccessFlag] = useState(false);

  const dispatch = useDispatch();

  const setUserName = (userName: string) => {
    dispatch(setUserNameAction(userName));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      alert("Passwords aren't equal!");
    } else {
      putUserInfo({ login, password }, setUserName as (arg: string) => void, setSuccessFlag);
    }
  };

  // redirection to required page
  if (successFlag) {
    return <Navigate to={props.redirectAfterSign} />;
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
      />
      <PurpleButton name="Submit" type="submit" className={styles.button} />
    </form>
  );
};

export default SignUp;
