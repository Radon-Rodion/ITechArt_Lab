import { Dispatch } from "redux";
import CartTableRow from "./cartTableRow";
import styles from "./cartComponents.module.scss";
import PurpleButton from "@/elements/purpleButton/purpleButton";
import { deleteSelected } from "@/redux/store/reducers/cartReducer";
import { CartElement } from "@/redux/types/cart";

const CartTable = (props: { productsInCart: CartElement[]; dispatch: Dispatch }) => {
  const deleteChecked = () => {
    props.dispatch(deleteSelected());
  };

  return (
    <table className={styles.allWide}>
      <thead>
        <tr className={styles.headRow}>
          <th className={styles.wideColumn}>Name</th>
          <th className={styles.mediumColumn}>Platform</th>
          <th className={styles.mediumColumn}>Order date</th>
          <th className={styles.narrowColumn}>Amount</th>
          <th className={styles.narrowColumn}>Price($)</th>
          <th className={styles.narrowColumn}> </th>
        </tr>
      </thead>
      <tbody>
        {props.productsInCart.map((product, index) => (
          <CartTableRow element={product} key={product.name} dispatch={props.dispatch} index={index} />
        ))}
        <tr className={styles.bodyRow}>
          <td className={styles.wideColumn} colSpan={5}>
            {" "}
          </td>
          <td className={styles.narrowColumn}>
            <PurpleButton name="Remove" type="button" className={styles.button} onClick={deleteChecked} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTable;
