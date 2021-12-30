import { useState } from "react";
import { filterAndSortProductInfos } from "@/api/clientRequests/getProductInfos";
import { Filters } from "@/data/filtrationFields";
import { ProductInfo } from "@/data/productInfos";

function useResource(firstFilters?: Filters): [boolean, Array<ProductInfo>, (filter: Filters) => void] {
  const [products, setProducts] = useState(new Array<ProductInfo>());
  const [responseGot, setResponseGot] = useState(false);
  let currentFilters = firstFilters;

  const setFilters = (filters: Filters) => {
    currentFilters = filters;
    setResponseGot(false);
  };

  if (currentFilters && !responseGot) {
    filterAndSortProductInfos(currentFilters)
      .products.promise.then((r) => {
        setResponseGot(true);
        setProducts(r as unknown as ProductInfo[]);
      })
      .catch((e) => {
        setResponseGot(true);
        console.error(e);
      });
  }

  return [responseGot, products, setFilters];
}

export default useResource;
