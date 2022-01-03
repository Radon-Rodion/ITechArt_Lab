import axios, { AxiosResponse } from "axios";
import { Filters } from "@/data/filtrationFields";
import { ProductInfo } from "@/data/productInfos";
import delay from "@/utils/delay";
import { Filters } from "@/data/filtrationFields";

function wrapPromise(promise: Promise<AxiosResponse<unknown, unknown>>) {
  let status = "pending";
  let result: AxiosResponse<unknown, unknown>;
  const suspender = promise.then(
    (r) => {
      result = r;
      status = "success";
    },
    (e) => {
      console.error(e);
      result = e;
      status = "error";
    }
  );
  return {
    read(): Array<ProductInfo> | AxiosResponse<unknown, unknown> {
      switch (status) {
        case "pending":
          throw suspender;
        case "success":
          return result;
        default:
          throw result;
      }
    },
    promise,
  };
}

export interface ProductsResource {
  products: {
    read(): Array<ProductInfo> | AxiosResponse<unknown, unknown>; // for suspense
    promise: Promise<AxiosResponse<unknown, unknown>>; // for custom hook
  };
}

function getProductsResource(request: string): ProductsResource {
  return {
    products: wrapPromise(delay(500).then(() => axios.get(request).then((response) => response.data.products))),
  };
}

export function selectProductInfos(amount: number, category: string): ProductsResource {
  return getProductsResource(`/api/topProducts/?amount=${amount}&category=${category}`);
}

export function filterProductInfos(name: string | undefined, category: string | undefined): ProductsResource {
  return getProductsResource(`/api/products/?name=${name ?? ""}&category=${category ?? ""}&age=0`);
}

export function filterAndSortProductInfos(filters: Filters): ProductsResource {
  return getProductsResource(
    `/api/products/?name=${filters.name}&category=${filters.category}&age=${filters.age}&genre=${filters.genres}&criteria=${filters.criteria}&order=${filters.order}`
  );
}

export default getProductsResource;
