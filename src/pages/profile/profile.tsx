/* eslint-disable @typescript-eslint/no-empty-function */
import { useSelector, useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
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
import { setUserNameAction } from "@/redux/actionCreators/userActionsCreator";

const Profile = () => {
  const userName = useSelector((state) => (state as RootState).user.userName);
  const blockName = `${userName} profile page`;

  // user info and its fields
  const [userInfo, setUserInfo] = useState<IUserInfo>(defaultUser);
  const setUserName = (name: string) => {
    setUserInfo((prevState: IUserInfo) => ({ ...prevState, userName: name }));
  };
  const setDescription = (description: string) => {
    setUserInfo((prevState: IUserInfo) => ({ ...prevState, description }));
  };
  const setPicture = (picture: string) => {
    setUserInfo((prevState: IUserInfo) => ({ ...prevState, picture }));
  };
  const setPhone = (phone: string) => {
    setUserInfo((prevState: IUserInfo) => ({ ...prevState, phone }));
  };

  const [spinner, setSpinner] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    postProfile(userInfo, (name: string) => dispatch(setUserNameAction(name)));
  };

  if (spinner) {
    getProfile(userName ?? "", setUserInfo, setSpinner);
    return <Spinner />;
  }

  return (
    <div className={styles.allPage}>
      <Block blockName={blockName} className={styles.block}>
        <form className={styles.block} onSubmit={handleSubmit}>
          <PictureChoose
            picture={userInfo?.picture ?? ""}
            className={styles.pictureSection}
            buttonClassName={styles.button}
            onChange={setPicture}
            localStorageKey="photo"
          />
          <div className={styles.inputSection}>
            <InputText
              icon="ellipsis-h"
              field={formFieldByName("User name")}
              text={userInfo?.userName ?? ""}
              onChange={setUserName}
            />
            <InputTextArea
              field={formFieldByName("Profile description")}
              text={userInfo?.description ?? ""}
              onChange={setDescription}
            />
            <InputText
              icon="phone"
              field={formFieldByName("Phone number")}
              text={userInfo?.phone ?? ""}
              onChange={setPhone}
            />
          </div>
          <div className={styles.buttonsSection}>
            <input type="submit" value="Save profile" className={styles.button} />
            <SignButton
              name="Change password"
              className={styles.button}
              form={<ChangePassword onExit={() => {}} userId={userInfo.id} curPassword={userInfo.password} />}
            />
          </div>
        </form>
      </Block>
    </div>
  );
};

export default Profile;
