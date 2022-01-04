import axios from "axios";
import { Dispatch } from "redux";
import { ProductInfo } from "@/data/productInfos";
import { addCard, editCard, deleteCard } from "@/redux/actionCreators/productsActionsCreator";
import ProductsAction from "@/redux/types/productsAction";

const REQUEST = "api/product";

export function createCard(gameInfo: ProductInfo) {
  return (dispatch: Dispatch<ProductsAction>) => {
    axios
      .post(REQUEST, gameInfo)
      .then((response) => {
        dispatch(addCard(response.data.body));
      })
      .catch((error) => {
        console.error(error);
        alert("Error during creating game card!");
      });
  };
}

export function updateCard(gameInfo: ProductInfo) {
  return (dispatch: Dispatch<ProductsAction>) => {
    axios
      .put(REQUEST, gameInfo)
      .then((response) => {
        dispatch(editCard(response.data.body));
      })
      .catch((error) => {
        console.error(error);
        alert("Error during editing game card!");
      });
  };
}

export function removeCard(gameInfo: ProductInfo) {
  return (dispatch: Dispatch<ProductsAction>) => {
    axios
      .delete(`${REQUEST}/${gameInfo.key}`)
      .then((response) => {
        dispatch(deleteCard(response.data.body));
      })
      .catch((error) => {
        console.error(error);
        alert("Error during deleting game card!");
      });
  };
}
