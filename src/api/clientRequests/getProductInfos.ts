import axios from "axios";
import { ProductInfo } from "@/data/productInfos";

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
    `/api/search/?name=${name ?? ""}&category=${category ?? ""}`,
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
    `/api/getTopProducts/?amount=${amount}&category=${category}`,
    responseSetMethod,
    setSpinner
  );
}
