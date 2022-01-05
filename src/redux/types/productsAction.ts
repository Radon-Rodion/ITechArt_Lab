import { ProductInfo } from "@/data/productInfos";

interface ProductsAction {
  type: string;
  payload?: ProductInfo | ProductInfo[] | number | undefined;
}

export default ProductsAction;
