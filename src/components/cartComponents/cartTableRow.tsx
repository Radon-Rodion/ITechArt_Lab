import { Dispatch } from "redux";
import { FormEvent } from "react";
import { FieldValue } from "@/data/filtrationFields";
import Select from "@/elements/formElements/select/select";
import { CartElement } from "@/redux/types/cart";
import styles from "./cartComponents.module.scss";
import { changeSelection, editAmount, editChosenPlatform } from "@/redux/actionCreators/cartActionsCreator";

interface IRowProps {
  element: CartElement;
  index: number;
  dispatch: Dispatch;
}

function platformFieldValues(platforms: string[]) {
  const res = new Array<FieldValue>();
  platforms.forEach((platform, index) => res.push({ text: platform, value: `${index}` }));
  return res;
}

const CartTableRow = (props: IRowProps) => {
  const changeSelectedPlatform = (value: string): void => {
    props.dispatch(editChosenPlatform(+value, props.index));
  };
  const onAmountChange = (e: FormEvent) => {
    const amount = +(e.target as HTMLInputElement).value;
    if (amount > 0) props.dispatch(editAmount(amount, props.index));
  };

  const onSelectionChange = () => {
    props.dispatch(changeSelection(props.index));
  };

  return (
    <tr className={styles.bodyRow}>
      <td className={styles.wideColumn}>{props.element.name}</td>
      <td className={styles.mediumColumn}>
        <Select
          valuesWithText={platformFieldValues(props.element.possiblePlatforms)}
          onChange={changeSelectedPlatform}
          selectedItemValue={`${props.element.chosenPlatformIndex}`}
        />
      </td>
      <td className={styles.mediumColumn}>{props.element.orderDate}</td>
      <td className={styles.narrowColumn}>
        <input type="number" className={styles.input} required value={props.element.amount} onChange={onAmountChange} />
      </td>
      <td className={styles.narrowColumn}>{props.element.price}</td>
      <td className={styles.narrowColumn}>
        <input type="checkbox" checked={props.element.selected} onChange={onSelectionChange} />
      </td>
    </tr>
  );
};

export default CartTableRow;
