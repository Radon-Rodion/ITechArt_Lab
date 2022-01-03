import { ProductInfo } from "@/data/productInfos";
import ProductsAction from "@/redux/types/productsAction";
import { ADD_GAME, CLEAR_ALL, DELETE_GAME, EDIT_GAME, REFRESH_ALL } from "@/redux/actions/productsActions";

export const addCard = (card: ProductInfo): ProductsAction => ({ type: ADD_GAME, payload: card });
export const editCard = (card: ProductInfo): ProductsAction => ({ type: EDIT_GAME, payload: card });
export const deleteCard = (key: number): ProductsAction => ({ type: DELETE_GAME, payload: key });
export const refreshCards = (newCards: ProductInfo[]): ProductsAction => ({ type: REFRESH_ALL, payload: newCards });
export const clearCards = (): ProductsAction => ({ type: CLEAR_ALL });
