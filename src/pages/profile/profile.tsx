import { useSelector, useDispatch } from "react-redux";
import React, { FormEvent, useRef, useState } from "react";
import styles from "./profile.module.scss";
import { RootState } from "@/redux/store/store";

import Block from "@/components/blocks/block";
import PictureChoose from "@/elements/formElements/pictureChoose/pictureChoose";
import InputText from "@/elements/formElements/inputText/inputText";
import InputTextArea from "@/elements/formElements/inputText/inputTextArea";
import { formFieldByName } from "@/data/formFields";
import SignButton from "@/elements/signButton/signButton";
import ChangePassword from "@/components/forms/changePassword";
import { defaultUser, IUserInfo } from "@/data/users";
import Spinner from "@/elements/spinner/spinner";
import { getProfile, postProfile } from "@/api/clientRequests/profileRequests";
import Switcher from "@/elements/formElements/switcher/switcher";
import Modal from "@/components/modal/modal";
import ErrorForm from "@/components/forms/errorForm";

interface IProfilePageState {
  userInfo: IUserInfo;
  spinner: boolean;
  errorMessage: string;
}

const Profile = () => {
  const userName = useSelector((state) => (state as RootState).user.info.userName);
  const blockName = `${userName} profile page`;

  const [state, setState] = useState<IProfilePageState>({ userInfo: defaultUser, spinner: true, errorMessage: "" });
  const newUserInfo = useRef<IUserInfo>(state.userInfo);

  const setErrorMessage = (errorMessage: string) => {
    setState((prevState: IProfilePageState) => ({ ...prevState, errorMessage }));
  };

  const setUserInfo = (userInfo: IUserInfo) => {
    setState((prevState: IProfilePageState) => ({ ...prevState, userInfo, spinner: false }));
    newUserInfo.current = userInfo;
  };

  // changable fields
  const setUserName = (name: string) => {
    newUserInfo.current.userName = name;
  };
  const setDescription = (description: string) => {
    newUserInfo.current.description = description;
  };
  const setPicture = (picture: string) => {
    setState((prevState: IProfilePageState) => ({ ...prevState, userInfo: { ...prevState.userInfo, picture } }));
    newUserInfo.current.picture = picture;
  };
  const setPhone = (phone: string) => {
    newUserInfo.current.phone = phone;
  };
  const changeAdminState = () => {
    newUserInfo.current.isAdmin = !newUserInfo.current.isAdmin;
  };

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    postProfile(newUserInfo.current, dispatch, setErrorMessage);
  };

  if (state.spinner) {
    getProfile(userName ?? "", setUserInfo);
    return <Spinner />;
  }

  return (
    <>
      {state.errorMessage ? (
        <Modal>
          <ErrorForm message={state.errorMessage} onExit={() => setErrorMessage("")} />
        </Modal>
      ) : undefined}
      <div className={styles.allPage}>
        <Block blockName={blockName} className={styles.block}>
          <form className={styles.block} onSubmit={handleSubmit}>
            <PictureChoose
              picture={state.userInfo?.picture ?? ""}
              className={styles.pictureSection}
              buttonClassName={styles.button}
              onChange={setPicture}
              localStorageKey="photo"
            />
            <div className={styles.inputSection}>
              <InputText
                icon="ellipsis-h"
                field={formFieldByName("User name")}
                text={state.userInfo?.userName ?? ""}
                onChange={setUserName}
              />
              <InputTextArea
                field={formFieldByName("Profile description")}
                text={state.userInfo?.description ?? ""}
                onChange={setDescription}
              />
              <InputText
                icon="phone"
                field={formFieldByName("Phone number")}
                text={state.userInfo?.phone ?? ""}
                onChange={setPhone}
              />
              <Switcher name="Is admin" value={state.userInfo.isAdmin} onChange={changeAdminState} />
            </div>
            <div className={styles.buttonsSection}>
              <input type="submit" value="Save profile" className={styles.button} />
              <SignButton
                name="Change password"
                className={styles.button}
                form={<ChangePassword userId={state.userInfo.id} curPassword={state.userInfo.password} />}
              />
            </div>
          </form>
        </Block>
      </div>
    </>
  );
};

export default Profile;
