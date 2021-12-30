import orders from "@/data/cartTempData";
import CartTableRow from "./cartTableRow";
import styles from "./cartComponents.module.scss";
import PurpleButton from "@/elements/purpleButton/purpleButton";

const CartTable = () => (
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
      {orders.map((order) => (
        <CartTableRow order={order} key={order.name} />
      ))}
      <tr className={styles.bodyRow}>
        <td className={styles.wideColumn}> </td>
        <td className={styles.mediumColumn}> </td>
        <td className={styles.mediumColumn}> </td>
        <td className={styles.narrowColumn}> </td>
        <td className={styles.narrowColumn}> </td>
        <td className={styles.narrowColumn}>
          <PurpleButton name="Remove" type="submit" className={styles.button} />
        </td>
      </tr>
    </tbody>
  </table>
);

export default CartTable;
