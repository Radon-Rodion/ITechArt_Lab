/* eslint-disable default-param-last */
import { ADD_ELEMENT, EDIT_ELEMENT, DELETE_SELECTED, CLEAR_CART } from "@/redux/actions/cartActions";
import { findCartElement } from "@/redux/supportFunctions/cartFunctions";
import Cart, { CartElement } from "@/redux/types/cart";
import CartAction, { CartParamsToChange } from "@/redux/types/cartAction";

const CART = "cart";

const defaultState: Cart = {
  elements: JSON.parse(localStorage.getItem(CART) ?? "[]"),
};

const serialize = (elements: CartElement[]): void => {
  localStorage.setItem(CART, JSON.stringify(elements));
};

const cartReducer = (state = defaultState, action: CartAction): Cart => {
  let tempArr = [...state.elements];
  switch (action.type) {
    case ADD_ELEMENT: {
      const newElement = action.payload as CartElement;
      const elementIndex = findCartElement(tempArr, newElement.name, newElement.orderDate);
      if (elementIndex === -1) tempArr.push(newElement);
      else tempArr[elementIndex].amount += 1;
      serialize(tempArr);
      return { elements: tempArr };
    }
    case EDIT_ELEMENT: {
      const editParams = action.payload as CartParamsToChange;
      if (editParams.newAmount) tempArr[editParams.index].amount = editParams.newAmount;
      else if (editParams.newChosenPlatformIndex !== undefined)
        tempArr[editParams.index].chosenPlatformIndex = editParams.newChosenPlatformIndex;
      else tempArr[editParams.index].selected = !tempArr[editParams.index].selected;
      serialize(tempArr);
      return { elements: tempArr };
    }
    case DELETE_SELECTED:
      tempArr = tempArr.filter((element) => !element.selected);
      serialize(tempArr);
      return { elements: tempArr };

    case CLEAR_CART:
      localStorage.removeItem(CART);
      return { elements: new Array<CartElement>() };
    default:
      return state;
  }
};

export default cartReducer;
