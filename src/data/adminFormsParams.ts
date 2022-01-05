import { Dispatch } from "redux";
import { createCard, removeCard, updateCard } from "@/api/clientRequests/adminRequests";
import ProductsAction from "@/redux/types/productsAction";
import confirmAction from "@/utils/confirm";
import { ProductInfo } from "./productInfos";

export interface AdminFormParams {
  formName: string;
  leftButtonName: string;
  leftButtonAction: (info: ProductInfo, dispatch: Dispatch<ProductsAction>, showError: (e: string) => void) => void;
  rightButtonName: string;
  rightButtonAction:
    | ((info: ProductInfo, dispatch: Dispatch<ProductsAction>, showError: (e: string) => void) => void)
    | undefined; // if undefined - modal form will just be closed
}

const formsParamsArr: AdminFormParams[] = [
  {
    formName: "Create card",
    leftButtonName: "Create",
    leftButtonAction: (info: ProductInfo, dispatch, showError) => dispatch(createCard(info, showError)),
    rightButtonName: "Cancel",
    rightButtonAction: undefined,
  },
  {
    formName: "Edit card",
    leftButtonName: "Submit",
    leftButtonAction: (info: ProductInfo, dispatch, showError) => dispatch(updateCard(info, showError)),
    rightButtonName: "Delete card",
    rightButtonAction: (info: ProductInfo, dispatch, showError) =>
      confirmAction(() => dispatch(removeCard(info, showError))),
  },
];

export function formByName(name: string): AdminFormParams {
  return formsParamsArr.find((form) => form.formName === name) ?? formsParamsArr[0];
}

export default formsParamsArr;
