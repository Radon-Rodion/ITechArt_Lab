import styles from "./switcher.module.scss";

interface ISwitchProps {
  name: string;
  value: boolean;
  onChange: () => void;
}

const Switcher = (props: ISwitchProps) => (
  <label htmlFor={props.name} className={styles.allElement}>
    <div className={styles.name}>{props.name}:</div>
    <div className={styles.switchWrap}>
      <input type="checkbox" className={styles.switch} defaultChecked={props.value} onChange={props.onChange} />
      <span className={styles.switchVisual} />
    </div>
  </label>
);

export default Switcher;
