import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import styles from "./cartComponents.module.scss";
import CartTable from "@/components/cartComponents/cartTable";
import PurpleButton from "@/elements/purpleButton/purpleButton";
import { RootState } from "@/redux/store/store";
import { totalSum } from "@/redux/supportFunctions/cartFunctions";
import { getBalance, postBalance } from "@/api/clientRequests/profileRequests";
import { clearCart } from "@/redux/actionCreators/cartActionsCreator";

const CartForm = () => {
  const productsInCart = useSelector((state: RootState) => state.cart.elements);
  const dispatch = useDispatch();
  const gamesCost = totalSum(productsInCart);

  const userName = useSelector((state: RootState) => state.user.info.userName) ?? "";
  const [balance, setBalance] = useState(-1);

  if (balance === -1) getBalance(userName, setBalance);

  const enoughMoney = balance >= gamesCost || balance === -1;

  const buy = (): void => {
    if (!enoughMoney) return;
    const newBalance = balance - gamesCost;
    setBalance(newBalance);
    dispatch(clearCart());
    postBalance(userName, newBalance);
  };
  const balanceValue =
    balance === -1 ? "loading..." : `${balance.toFixed(2)}$ (${!enoughMoney ? "Not enough" : "Enough"})`;
  const balanceMessage = `Your balance: ${balanceValue}`;
  const priceMessage = `Games cost: ${gamesCost.toFixed(2)}$`;

  return (
    <form className={styles.allWide}>
      <CartTable productsInCart={productsInCart} dispatch={dispatch} />
      <div className={styles.bottom}>
        <div className={styles.bottomElement}>{priceMessage}</div>
        <div className={`${styles.bottomElement} ${!enoughMoney ? styles.notEnough : ""}`}>{balanceMessage}</div>
        <div className={styles.bottomElement}>
          <PurpleButton name="Buy" type="button" className={styles.button} onClick={buy} />
        </div>
      </div>
    </form>
  );
};

export default CartForm;
