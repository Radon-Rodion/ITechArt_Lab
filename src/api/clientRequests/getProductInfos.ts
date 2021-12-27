import axios from "axios";
import { ProductInfo } from "@/data/productInfos";
import { Filters } from "@/data/filtrationFields";

function sendRequestAndHandleResponse(
  request: string,
  responseSetMethod: (response: Array<ProductInfo>) => void,
  setSpinner: (spinnerState: boolean) => void
) {
  axios
    .get(request)
    .then((response) => {
      responseSetMethod(response.data.products);
      setSpinner(false);
    })
    .catch((error) => {
      console.error(error);
      setSpinner(false);
    });
}

export function filterProductInfos(
  name: string | undefined,
  category: string | undefined,
  responseSetMethod: (response: Array<ProductInfo>) => void,
  setSpinner: (spinnerState: boolean) => void
) {
  sendRequestAndHandleResponse(
    `/api/products/?name=${name ?? ""}&category=${category ?? ""}`,
    responseSetMethod,
    setSpinner
  );
}

export function filterAndSortProductInfos(
  filters: Filters,
  responseSetMethod: (response: Array<ProductInfo>) => void,
  setSpinner: (spinnerState: boolean) => void
) {
  sendRequestAndHandleResponse(
    `/api/products/?name=${filters.name}&category=${filters.category}&age=${filters.age}&genre=${filters.genres}&criteria=${filters.criteria}&order=${filters.order}`,
    responseSetMethod,
    setSpinner
  );
}

export function selectProductInfos(
  amount: number,
  category: string,
  responseSetMethod: (response: Array<ProductInfo>) => void,
  setSpinner: (spinnerState: boolean) => void
) {
  sendRequestAndHandleResponse(
    `/api/topProducts/?amount=${amount}&category=${category}`,
    responseSetMethod,
    setSpinner
  );
}
