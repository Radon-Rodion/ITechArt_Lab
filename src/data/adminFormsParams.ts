import { Dispatch } from "redux";
import { createCard, removeCard, updateCard } from "@/api/clientRequests/adminRequests";
import ProductsAction from "@/redux/types/productsAction";
import confirmAction from "@/utils/confirm";
import { ProductInfo } from "./productInfos";

export interface AdminFormParams {
  formName: string;
  leftButtonName: string;
  leftButtonAction: (info: ProductInfo, dispatch: Dispatch<ProductsAction>) => void;
  rightButtonName: string;
  rightButtonAction: ((info: ProductInfo, dispatch: Dispatch<ProductsAction>) => void) | undefined; // if undefined - modal form will just be closed
}

const formsParamsArr: AdminFormParams[] = [
  {
    formName: "Create card",
    leftButtonName: "Create",
    leftButtonAction: (info: ProductInfo, dispatch) => createCard(info)(dispatch),
    rightButtonName: "Cancel",
    rightButtonAction: undefined,
  },
  {
    formName: "Edit card",
    leftButtonName: "Submit",
    leftButtonAction: (info: ProductInfo, dispatch) => updateCard(info)(dispatch),
    rightButtonName: "Delete card",
    rightButtonAction: (info: ProductInfo, dispatch) => confirmAction(() => removeCard(info)(dispatch)),
  },
];

export function formByName(name: string): AdminFormParams {
  return formsParamsArr.find((form) => form.formName === name) ?? formsParamsArr[0];
}

export default formsParamsArr;
