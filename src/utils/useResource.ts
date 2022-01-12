import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { filterAndSortProductInfos } from "@/api/clientRequests/getProductInfos";
import { Filters } from "@/data/filtrationFields";
import { ProductInfo } from "@/data/productInfos";
import { RootState } from "@/redux/store/store";
import { refreshCards } from "@/redux/actionCreators/productsActionsCreator";

function useResource(): [boolean, Array<ProductInfo>, (filter: Filters) => void] {
  const products = useSelector((state: RootState) => state.products.elements);
  const dispatch = useDispatch();
  const responseGot = useRef(false);

  const request = (filters: Filters) => {
    filterAndSortProductInfos(filters)
      .products.promise.then((r) => {
        responseGot.current = true;
        dispatch(refreshCards(r as unknown as ProductInfo[]));
      })
      .catch((e) => {
        responseGot.current = true;
      });
  };

  const setFilters = (filters: Filters) => {
    responseGot.current = false;
    if (products.length) {
      dispatch(refreshCards([]));
    }
    request(filters);
  };

  return [responseGot.current, products, setFilters];
}

export default useResource;
