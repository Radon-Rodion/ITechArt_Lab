import noImg from "images/noimg.png";
import { ChangeEvent } from "react";
import styles from "./pictureChoose.module.scss";

interface IPictureChooseProps {
  picture: string;
  className?: string;
  buttonClassName?: string;
  onChange: ((value: React.SetStateAction<string>) => void) | ((value: string) => void);
  localStorageKey?: string | undefined;
}

const PictureChoose = (props: IPictureChooseProps) => {
  const changeProcessor = (e: ChangeEvent) => {
    e.preventDefault();

    if (!e.target) return;
    const { files } = e.target as HTMLInputElement;
    const reader = new FileReader();
    if (files && files[0]) reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      if (typeof reader.result === "string" && props.localStorageKey) {
        localStorage.setItem(props.localStorageKey, reader.result);
      }
      props.onChange(reader.result as string);
    };
  };

  const pictureFromStorage = props.localStorageKey ? localStorage.getItem(props.localStorageKey) : null;
  const pictureSrc = pictureFromStorage ?? (props.picture === "" ? noImg : props.picture);

  return (
    <div className={props.className}>
      <img src={pictureSrc} alt="NoImage.png" className={styles.image} />
      <div className={styles.inputWrapper}>
        <label htmlFor="picture" className={`${props.buttonClassName} ${styles.label}`}>
          <input type="file" className={`${props.buttonClassName} ${styles.button}`} onChange={changeProcessor} />
          <div className={styles.buttonName}>Select image</div>
        </label>
      </div>
    </div>
  );
};

PictureChoose.defaultProps = {
  className: "",
  buttonClassName: "",
  localStorageKey: undefined,
};

export default PictureChoose;
