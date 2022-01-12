import axios from "axios";
import { Dispatch } from "redux";
import { ProductInfo } from "@/data/productInfos";
import { addCard, deleteCard, editCard } from "@/redux/actionCreators/productsActionsCreator";
import ProductsAction from "@/redux/types/productsAction";
import defaultShowError from "@/utils/defaultFunctions";

const REQUEST = "api/product";

export function createCard(gameInfo: ProductInfo, showError = defaultShowError) {
  return (dispatch: Dispatch<ProductsAction>) => {
    axios
      .post(REQUEST, gameInfo)
      .then((response) => {
        dispatch(addCard(response.data.body));
      })
      .catch((error) => {
        console.error(error);
        showError("Error during creating game card!");
      });
  };
}

export function updateCard(gameInfo: ProductInfo, showError = defaultShowError) {
  return (dispatch: Dispatch<ProductsAction>) => {
    axios
      .put(REQUEST, gameInfo)
      .then((response) => {
        dispatch(editCard(response.data.body));
      })
      .catch((error) => {
        console.error(error);
        showError("Error during editing game card!");
      });
  };
}

export function removeCard(gameInfo: ProductInfo, showError = defaultShowError) {
  return (dispatch: Dispatch<ProductsAction>) => {
    axios
      .delete(`${REQUEST}/${gameInfo.key}`)
      .then((response) => {
        dispatch(deleteCard(response.data.body));
      })
      .catch((error) => {
        console.error(error);
        showError("Error during deleting game card!");
      });
  };
}
