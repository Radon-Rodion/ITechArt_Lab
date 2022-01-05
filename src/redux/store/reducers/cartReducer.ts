/* eslint-disable default-param-last */
import { ADD_ELEMENT, EDIT_ELEMENT, DELETE_SELECTED, CLEAR_CART } from "@/redux/actions/cartActions";
import { findCartElement } from "@/redux/supportFunctions/cartFunctions";
import serialize from "@/redux/supportFunctions/serialize";
import Cart, { CartElement } from "@/redux/types/cart";
import CartAction, { CartParamsToChange } from "@/redux/types/cartAction";

const CART = "cart";

const defaultState: Cart = {
  elements: JSON.parse(localStorage.getItem(CART) ?? "[]"),
};

const cartReducer = (state = defaultState, action: CartAction): Cart => {
  let cartElements = [...state.elements];
  switch (action.type) {
    case ADD_ELEMENT: {
      const newElement = action.payload as CartElement;
      const elementIndex = findCartElement(cartElements, newElement.name, newElement.orderDate);
      if (elementIndex === -1) cartElements.push(newElement);
      else cartElements[elementIndex].amount += 1;
      serialize<CartElement[]>(cartElements, CART);
      return { ...state, elements: cartElements };
    }
    case EDIT_ELEMENT: {
      const editParams = action.payload as CartParamsToChange;
      if (editParams.newAmount) cartElements[editParams.index].amount = editParams.newAmount;
      else if (editParams.newChosenPlatformIndex !== undefined)
        cartElements[editParams.index].chosenPlatformIndex = editParams.newChosenPlatformIndex;
      else cartElements[editParams.index].selected = !cartElements[editParams.index].selected;
      serialize<CartElement[]>(cartElements, CART);
      return { ...state, elements: cartElements };
    }
    case DELETE_SELECTED:
      cartElements = cartElements.filter((element) => !element.selected);
      serialize<CartElement[]>(cartElements, CART);
      return { ...state, elements: cartElements };

    case CLEAR_CART:
      localStorage.removeItem(CART);
      return { ...state, elements: new Array<CartElement>() };
    default:
      return state;
  }
};

export default cartReducer;
