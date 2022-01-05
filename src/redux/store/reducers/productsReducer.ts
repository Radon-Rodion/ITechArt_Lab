/* eslint-disable default-param-last */
import { ProductInfo } from "@/data/productInfos";
import { ADD_GAME, CLEAR_ALL, DELETE_GAME, EDIT_GAME, REFRESH_ALL } from "@/redux/actions/productsActions";
import serialize from "@/redux/supportFunctions/serialize";
import Products from "@/redux/types/products";
import ProductsAction from "@/redux/types/productsAction";

const PRODUCTS = "products";

const defaultState: Products = {
  elements: JSON.parse(localStorage.getItem(PRODUCTS) ?? "[]"),
};

const productsReducer = (state = defaultState, action: ProductsAction): Products => {
  let products: ProductInfo[] = [...state.elements];
  switch (action.type) {
    case ADD_GAME: {
      products.push(action.payload as ProductInfo);
      serialize<ProductInfo[]>(products, PRODUCTS);
      return { ...state, elements: products };
    }
    case EDIT_GAME: {
      const updatedGame = action.payload as ProductInfo;
      const index = products.findIndex((product) => product.key === updatedGame.key);
      products[index] = updatedGame;
      serialize<ProductInfo[]>(products, PRODUCTS);
      return { ...state, elements: products };
    }
    case DELETE_GAME: {
      const key = action.payload as number;
      products = products.filter((product) => product.key !== key);
      serialize<ProductInfo[]>(products, PRODUCTS);
      return { ...state, elements: products };
    }
    case REFRESH_ALL:
      serialize<ProductInfo[]>(action.payload as ProductInfo[], PRODUCTS);
      return { ...state, elements: action.payload as ProductInfo[] };
    case CLEAR_ALL:
      serialize<ProductInfo[]>(new Array<ProductInfo>(), PRODUCTS);
      return { ...state, elements: [] };
    default:
      return state;
  }
};

export default productsReducer;
