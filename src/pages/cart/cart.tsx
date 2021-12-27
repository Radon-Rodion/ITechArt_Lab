import Block from "@/components/blocks/block";
import CartForm from "@/components/cartComponents/cartForm";
import styles from "./cart.module.scss";

const Cart = () => (
  <div className={styles.allPage}>
    <Block blockName="Cart page" className={styles.block}>
      <CartForm />
    </Block>
  </div>
);

export default Cart;
