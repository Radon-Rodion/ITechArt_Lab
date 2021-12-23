import noImg from "images/noimg.png";
import { ChangeEvent } from "react";
import styles from "./pictureChoose.module.scss";

interface IPictureChooseProps {
  picture: string;
  className: string;
  buttonClassName: string;
  onChange: ((value: React.SetStateAction<string>) => void) | ((value: string) => void);
}

const PictureChoose = (props: IPictureChooseProps) => {
  const changeProcessor = (e: ChangeEvent) => {
    const reader = new FileReader();
    const { files } = e.target as HTMLInputElement;
    reader.onloadend = (event: ProgressEvent<FileReader>) => {
      if (event?.target?.result != null) props.onChange(event?.target?.result as string);
    };
    if (files != null) reader.readAsDataURL(files[0]);
  };

  const pictureSrc = props.picture === "" ? noImg : props.picture;

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

export default PictureChoose;
