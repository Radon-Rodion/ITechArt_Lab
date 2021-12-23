/* eslint-disable @typescript-eslint/no-empty-function */
import { useSelector, useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import styles from "./profile.module.scss";
import { RootState } from "@/redux/store/store";

import Block from "@/components/blocks/block";
import PictureChoose from "@/elements/pictureChoose/pictureChoose";
import InputText from "@/elements/inputText/inputText";
import InputTextArea from "@/elements/inputText/inputTextArea";
import { formFieldByName } from "@/data/formFields";
import SignButton from "@/elements/signButton/signButton";
import ChangePassword from "@/pages/users/changePassword";
import { FieldNames, IUserInfo } from "@/data/users";
import Spinner from "@/elements/spinner/spinner";
import { getProfile, postProfile } from "@/api/clientRequests/profileRequests";
import { setUserNameAction } from "@/redux/store/reducers/userReducer";

const userInfoActionCreator = (prevInfo: IUserInfo, fieldName: FieldNames, value: string): IUserInfo => {
  const newInfo = { ...prevInfo };
  switch (fieldName) {
    case FieldNames.NAME:
      newInfo.userName = value;
      break;
    case FieldNames.DESCRIPTION:
      newInfo.description = value;
      break;
    case FieldNames.PHONE:
      newInfo.phone = value;
      break;
    case FieldNames.PICTURE:
      newInfo.picture = value;
      break;
    default:
      break;
  }
  return newInfo;
};

const Profile = () => {
  const userName = useSelector((state) => (state as RootState).user.userName);
  const blockName = `${userName} profile page`;

  // user info and its fields
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    id: -1,
    login: "",
    password: "",
    userName: "",
    description: "",
  });
  const setUserName = (name: string) => {
    setUserInfo(userInfoActionCreator(userInfo, FieldNames.NAME, name));
  };
  const setDescription = (description: string) => {
    setUserInfo(userInfoActionCreator(userInfo, FieldNames.DESCRIPTION, description));
  };
  const setPicture = (picture: string) => {
    setUserInfo(userInfoActionCreator(userInfo, FieldNames.PICTURE, picture));
  };
  const setPhone = (phone: string) => {
    setUserInfo(userInfoActionCreator(userInfo, FieldNames.PHONE, phone));
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
              form={<ChangePassword onExit={() => {}} userId={userInfo.id} />}
            />
          </div>
        </form>
      </Block>
    </div>
  );
};

export default Profile;
