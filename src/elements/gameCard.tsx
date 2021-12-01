import styles from "./gameCard.module.scss";

const GameCard = () => (
  <div className={`${styles.card} ${styles.center}`}>
    <div className={styles.front}>
      <img src="1.jpg" alt="1.jpg" />
    </div>

    <div className={styles.back}>
      <div className={`${styles.backContent} ${styles.center}`}>
        <h2>Aniskovich Anton</h2>
        <span>Подпишись на канал!</span>
        <span>и ставьте Like</span>
      </div>
    </div>
  </div>
);

export default GameCard;
