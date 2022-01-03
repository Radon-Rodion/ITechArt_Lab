/* eslint-disable default-param-last */
import { ProductInfo } from "@/data/productInfos";
import { ADD_GAME, CLEAR_ALL, DELETE_GAME, EDIT_GAME, REFRESH_ALL } from "@/redux/actions/productsActions";
import Products from "@/redux/types/products";
import ProductsAction from "@/redux/types/productsAction";

const PRODUCTS = "products";

const defaultState: Products = {
  elements: JSON.parse(localStorage.getItem(PRODUCTS) ?? "[]"),
};

const serialize = (elements: ProductInfo[]): void => {
  localStorage.setItem(PRODUCTS, JSON.stringify(elements));
};

const productsReducer = (state = defaultState, action: ProductsAction): Products => {
  let tempArr: ProductInfo[] = [...state.elements];
  switch (action.type) {
    case ADD_GAME: {
      tempArr.push(action.payload as ProductInfo);
      serialize(tempArr);
      return { elements: tempArr };
    }
    case EDIT_GAME: {
      const updatedGame = action.payload as ProductInfo;
      const index = tempArr.findIndex((el) => el.key === updatedGame.key);
      tempArr[index] = updatedGame;
      serialize(tempArr);
      return { elements: tempArr };
    }
    case DELETE_GAME: {
      const key = action.payload as number;
      tempArr = tempArr.filter((el) => el.key !== key);
      serialize(tempArr);
      return { elements: tempArr };
    }
    case REFRESH_ALL:
      serialize(action.payload as ProductInfo[]);
      return { elements: action.payload as ProductInfo[] };
    case CLEAR_ALL:
      serialize(new Array<ProductInfo>());
      return { elements: [] };
    default:
      return state;
  }
};

export default productsReducer;
