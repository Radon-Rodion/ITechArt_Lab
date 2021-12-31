import { CartElement } from "./cart";

export interface CartParamsToChange {
  newAmount?: number;
  newChosenPlatformIndex?: number;
  index: number;
}

interface CartAction {
  type: string;
  payload?: CartElement | CartParamsToChange | undefined;
}

export default CartAction;
