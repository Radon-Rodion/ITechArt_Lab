import styles from "./cartComponents.module.scss";
import CartTable from "@/components/cartComponents/cartTable";
import PurpleButton from "@/elements/purpleButton/purpleButton";

const CartForm = () => (
  <form className={styles.allWide}>
    <CartTable />
    <div className={styles.bottom}>
      <div className={styles.bottomElement}>Games cost: ***$</div>
      <div className={styles.bottomElement}>Your balance: ***$</div>
      <div className={styles.bottomElement}>
        <PurpleButton name="Buy" type="button" className={styles.button} onClick={() => {}} />
      </div>
    </div>
  </form>
);

export default CartForm;
