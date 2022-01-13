import { Dispatch } from "redux";
import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { FieldValue } from "@/data/filtrationFields";
import Select from "@/elements/formElements/select/select";
import styles from "./cartComponents.module.scss";
import { changeSelection, editAmount, editChosenPlatform } from "@/redux/actionCreators/cartActionsCreator";
import { RootState } from "@/redux/store/store";
import { CartElement } from "@/redux/types/cart";

interface IRowProps {
  index: number;
  dispatch: Dispatch;
}

function platformFieldValues(platforms: string[]) {
  const res = new Array<FieldValue>();
  platforms.forEach((platform, index) => res.push({ text: platform, value: `${index}` }));
  return res;
}

const CartTableRow = (props: IRowProps) => {
  const [element, setElement] = useState(useSelector((state: RootState) => state.cart.elements[props.index]));

  const changeSelectedPlatform = (value: string): void => {
    setElement((prevElement: CartElement) => ({ ...prevElement, chosenPlatformIndex: +value }));
    props.dispatch(editChosenPlatform(+value, props.index));
  };
  const onAmountChange = (e: FormEvent) => {
    const amount = Math.round(+(e.target as HTMLInputElement).value);
    if (amount > 0) {
      setElement((prevElement: CartElement) => ({ ...prevElement, amount }));
      props.dispatch(editAmount(amount, props.index));
    }
  };

  const onSelectionChange = () => {
    setElement((prevElement: CartElement) => ({ ...prevElement, selected: !prevElement.selected }));
    props.dispatch(changeSelection(props.index));
  };

  return (
    <tr className={styles.bodyRow}>
      <td className={styles.wideColumn}>{element.name}</td>
      <td className={styles.mediumColumn}>
        <Select
          valuesWithText={platformFieldValues(element.possiblePlatforms)}
          onChange={changeSelectedPlatform}
          selectedItemValue={`${element.chosenPlatformIndex}`}
        />
      </td>
      <td className={styles.mediumColumn}>{element.orderDate}</td>
      <td className={styles.narrowColumn}>
        <input type="number" className={styles.input} required value={element.amount} onChange={onAmountChange} />
      </td>
      <td className={styles.narrowColumn}>{element.price}</td>
      <td className={styles.narrowColumn}>
        <input type="checkbox" checked={element.selected} onChange={onSelectionChange} />
      </td>
    </tr>
  );
};

export default React.memo(CartTableRow);
