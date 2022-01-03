import { createCard, removeCard, updateCard } from "@/api/clientRequests/adminRequests";
import confirmAction from "@/utils/confirm";
import { ProductInfo } from "./productInfos";

export interface AdminFormParams {
  formName: string;
  leftButtonName: string;
  leftButtonAction: (info: ProductInfo, dispatch) => void;
  rightButtonName: string;
  rightButtonAction: ((info: ProductInfo, dispatch) => void) | undefined; // if undefined - modal form will just be closed
}

const formsParamsArr: AdminFormParams[] = [
  {
    formName: "Create card",
    leftButtonName: "Create",
    leftButtonAction: (info: ProductInfo, dispatch) => dispatch(createCard(info)),
    rightButtonName: "Cancel",
    rightButtonAction: undefined,
  },
  {
    formName: "Edit card",
    leftButtonName: "Submit",
    leftButtonAction: (info: ProductInfo, dispatch) => dispatch(updateCard(info)),
    rightButtonName: "Delete card",
    rightButtonAction: (info: ProductInfo, dispatch) => confirmAction(() => dispatch(removeCard(info))),
  },
];

export function formByName(name: string): AdminFormParams {
  return formsParamsArr.find((form) => form.formName === name) ?? formsParamsArr[0];
}

export default formsParamsArr;
