import { GameOrder } from "@/data/cartTempData";
import { categoryFieldValues } from "@/data/filtrationFields";
import Select from "@/elements/formElements/select/select";
import styles from "./cartComponents.module.scss";

interface IRowProps {
  order: GameOrder;
}

const CartTableRow = (props: IRowProps) => (
  <tr className={styles.bodyRow}>
    <td className={styles.wideColumn}>{props.order.name}</td>
    <td className={styles.mediumColumn}>
      <Select valuesWithText={categoryFieldValues()} onChange={() => {}} />
    </td>
    <td className={styles.mediumColumn}>{props.order.orderDate}</td>
    <td className={styles.narrowColumn}>
      <input type="number" className={styles.input} required defaultValue={props.order.amount} />
    </td>
    <td className={styles.narrowColumn}>{props.order.price}</td>
    <td className={styles.narrowColumn}>
      <input type="checkbox" />
    </td>
  </tr>
);

export default CartTableRow;
