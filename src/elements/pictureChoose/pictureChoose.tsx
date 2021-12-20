import noImg from "images/noimg.png";
import styles from "./pictureChoose.module.scss";

interface IPictureChooseProps {
  picture: string;
  className: string;
  buttonClassName: string;
}

const PictureChoose = (props: IPictureChooseProps) => (
  <div className={props.className}>
    <img src={noImg} alt={noImg} className={styles.image} />
    <input type="file" name="Select image" className={`${props.buttonClassName} ${styles.button}`} />
  </div>
);

export default PictureChoose;
