import { useState } from "react";
import { useDispatch } from "react-redux";
import FormHeader from "./formHeader";
import InputText from "@/elements/formElements/inputText/inputText";
import InputTextArea from "@/elements/formElements/inputText/inputTextArea";
import styles from "./signForm.module.scss";
import { formFieldByName } from "@/data/formFields";
import PurpleButton from "@/elements/purpleButton/purpleButton";
import { ProductInfo } from "@/data/productInfos";
import Select from "@/elements/formElements/select/select";
import fieldsValues from "@/data/filtrationFields";
import Checkbox from "@/elements/formElements/checkbox/checkbox";
import PictureChoose from "@/elements/formElements/pictureChoose/pictureChoose";
import { AdminFormParams } from "@/data/adminFormsParams";

interface IAdminFormProps {
  gameInfo: ProductInfo;
  onExit: () => void;
  formInfo: AdminFormParams;
}

const AdminForm = (props: IAdminFormProps) => {
  const [gameInfo, setGameInfo] = useState(props.gameInfo);

  const setGameName = (name: string): void => {
    setGameInfo((prevState: ProductInfo) => ({ ...prevState, name }));
  };
  const setGamePrice = (priceString: string): void => {
    const price = +priceString > 0.01 ? +priceString : 0.01;
    setGameInfo((prevState: ProductInfo) => ({ ...prevState, price }));
  };
  const setGameDescription = (description: string): void => {
    setGameInfo((prevState: ProductInfo) => ({ ...prevState, description }));
  };
  const setGamePicture = (picture: string): void => {
    setGameInfo((prevState: ProductInfo) => ({ ...prevState, image: picture }));
  };
  const setAgeCategory = (age: string): void => {
    setGameInfo((prevState: ProductInfo) => ({ ...prevState, ageCategory: +age }));
  };
  const changeIsPC = (): void => {
    setGameInfo((prevState: ProductInfo) => ({ ...prevState, isPC: !prevState.isPC }));
  };
  const changeIsPS = (): void => {
    setGameInfo((prevState: ProductInfo) => ({ ...prevState, isPS: !prevState.isPS }));
  };
  const changeIsXbox = (): void => {
    setGameInfo((prevState: ProductInfo) => ({ ...prevState, isXBox: !prevState.isXBox }));
  };

  const dispatch = useDispatch();

  const leftButtonAction = () => {
    props.formInfo.leftButtonAction(gameInfo, dispatch);
    props.onExit();
  };

  const rightButtonAction = () => {
    if (props.formInfo.rightButtonAction) props.formInfo.rightButtonAction(gameInfo, dispatch);
    props.onExit();
  };

  return (
    <form className={styles.form} onSubmit={leftButtonAction}>
      <FormHeader name={props.formInfo.formName} onExit={props.onExit} />
      <div className={styles.row}>
        <div className={styles.narrowColumn}>
          <p className={styles.paragraph}>Card Image</p>
          <PictureChoose picture={gameInfo.image} onChange={setGamePicture} buttonClassName={styles.button} />
        </div>
        <div className={styles.wideColumn}>
          <p className={styles.paragraph}>Information</p>
          <InputText
            icon="address-card"
            field={formFieldByName("Game name")}
            text={gameInfo.name}
            onChange={setGameName}
          />
          <InputText
            icon="dollar-sign"
            field={formFieldByName("Price")}
            text={`${gameInfo.price}`}
            onChange={setGamePrice}
          />
          <InputTextArea
            field={formFieldByName("Game description")}
            text={gameInfo?.description ?? ""}
            onChange={setGameDescription}
          />
          <Select
            name="Age"
            valuesWithText={fieldsValues.age}
            onChange={setAgeCategory}
            selectedItemValue={`${gameInfo.ageCategory}`}
          />
          <p className={styles.paragraph}>Platform</p>
          <Checkbox name="PC" value={gameInfo.isPC} onChange={changeIsPC} />
          <Checkbox name="Playstation 5" value={gameInfo.isPS} onChange={changeIsPS} />
          <Checkbox name="Xbox One" value={gameInfo.isXBox} onChange={changeIsXbox} />
        </div>
      </div>
      <div className={styles.buttonsRow}>
        <PurpleButton name={props.formInfo.leftButtonName} className={styles.button} onClick={leftButtonAction} />
        <PurpleButton name={props.formInfo.rightButtonName} className={styles.button} onClick={rightButtonAction} />
      </div>
    </form>
  );
};

export default AdminForm;
