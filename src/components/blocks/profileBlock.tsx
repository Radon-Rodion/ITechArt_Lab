import React, { FormEvent, useState } from "react";
import Block from "@/components/blocks/block";
import PictureChoose from "@/elements/pictureChoose/pictureChoose";
import InputText from "@/elements/inputText/inputText";
import InputTextArea from "@/elements/inputText/inputTextArea";
import styles from "./blockForm.module.scss";
import { formFieldByName } from "@/data/formFields";
import SignButton from "@/elements/signButton/signButton";
import ChangePassword from "@/pages/users/changePassword";

interface IProfileBlockProps {
  blockName: string;
}

const useFields: () => [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  string,
  React.Dispatch<React.SetStateAction<string>>
] = () => {
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");

  return [userName, setUserName, description, setDescription];
};

const ProfileBlock = (props: IProfileBlockProps) => {
  const [userName, setUserName, description, setDescription] = useFields();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Block blockName={props.blockName} className={styles.block}>
      <PictureChoose picture="images/Stalker2.jpg" className={styles.pictureSection} buttonClassName={styles.button} />
      <form className={styles.block} onSubmit={handleSubmit}>
        <div className={styles.inputSection}>
          <InputText icon="ellipsis-h" field={formFieldByName("User name")} text={userName} onChange={setUserName} />
          <InputTextArea field={formFieldByName("Profile description")} text={description} onChange={setDescription} />
        </div>
        <div className={styles.buttonsSection}>
          <input type="submit" value="Save profile" className={styles.button} />
          <SignButton name="Change password" className={styles.button} form={<ChangePassword onExit={undefined} />} />
        </div>
      </form>
    </Block>
  );
};

export default ProfileBlock;
