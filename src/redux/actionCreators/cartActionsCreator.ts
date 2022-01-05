import { ProductInfo } from "@/data/productInfos";
import { ADD_ELEMENT, EDIT_ELEMENT, DELETE_SELECTED, CLEAR_CART } from "@/redux/actions/cartActions";
import { createCartElement } from "../supportFunctions/cartFunctions";

export const addGame = (game: ProductInfo) => ({ type: ADD_ELEMENT, payload: createCartElement(game) });

export const editAmount = (newAmount: number, index: number) => ({
  type: EDIT_ELEMENT,
  payload: {
    newAmount,
    index,
  },
});

export const editChosenPlatform = (chosenPlatform: number, index: number) => ({
  type: EDIT_ELEMENT,
  payload: {
    newChosenPlatformIndex: chosenPlatform,
    index,
  },
});

export const changeSelection = (index: number) => ({
  type: EDIT_ELEMENT,
  payload: {
    index,
  },
});

export const deleteSelected = () => ({ type: DELETE_SELECTED });

export const clearCart = () => ({ type: CLEAR_CART });
