import axios from "axios";
import { ProductInfo } from "@/productInfos";

function sendRequestAndHandleResponse(request: string, responseSetMethod: (response: Array<ProductInfo>) => void) {
  axios
    .get(request)
    .then((response) => {
      responseSetMethod(response.data.products);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function filterProductInfos(
  name: string | undefined,
  category: string | undefined,
  responseSetMethod: (response: Array<ProductInfo> | null) => void
) {
  sendRequestAndHandleResponse(`/api/search/?name=${name ?? ""}&category=${category ?? ""}`, responseSetMethod);
}

export function selectProductInfos(
  amount: number,
  category: string,
  responseSetMethod: (response: Array<ProductInfo>) => void
) {
  sendRequestAndHandleResponse(`/api/getTopProducts/?amount=${amount}&category=${category}`, responseSetMethod);
}
