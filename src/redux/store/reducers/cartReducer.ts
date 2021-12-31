/* eslint-disable default-param-last */
import { ProductInfo } from "@/data/productInfos";
import { findCartElement, createCartElement } from "@/redux/supportFunctions/cartFunctions";
import Cart, { CartElement } from "@/redux/types/cart";
import CartAction, { CartParamsToChange } from "@/redux/types/cartAction";

const CART = "cart";
const ADD_ELEMENT = "ADD_ELEMENT";
const EDIT_ELEMENT = "EDIT_ELEMENT";
const DELETE_SELECTED = "DELETE_SELECTED";
const CLEAR_CART = "CLEAR_CART";

const defaultState: Cart = {
  elements: JSON.parse(localStorage.getItem(CART) ?? "[]"),
};

const serialize = (elements: CartElement[]): void => {
  localStorage.setItem(CART, JSON.stringify(elements));
};

const cartReducer = (state = defaultState, action: CartAction): Cart => {
  let elements = [...state.elements];
  switch (action.type) {
    case ADD_ELEMENT: {
      const newElement = action.payload as CartElement;
      const elementIndex = findCartElement(elements, newElement.name, newElement.orderDate);
      if (elementIndex === -1) elements.push(newElement);
      else elements[elementIndex].amount += 1;
      serialize(elements);
      return { elements };
    }
    case EDIT_ELEMENT: {
      const editParams = action.payload as CartParamsToChange;
      if (editParams.newAmount) elements[editParams.index].amount = editParams.newAmount;
      else if (editParams.newChosenPlatformIndex !== undefined)
        elements[editParams.index].chosenPlatformIndex = editParams.newChosenPlatformIndex;
      else elements[editParams.index].selected = !elements[editParams.index].selected;
      serialize(elements);
      return { elements };
    }
    case DELETE_SELECTED:
      elements = elements.filter((element) => !element.selected);
      serialize(elements);
      return { elements };

    case CLEAR_CART:
      localStorage.removeItem(CART);
      return { elements: new Array<CartElement>() };
    default:
      return state;
  }
};

export default cartReducer;

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
