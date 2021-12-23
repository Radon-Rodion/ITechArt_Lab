import { ProductInfo } from "@/data/productInfos";

function checkFittingCategory(categoryName: string, productInfo: ProductInfo): boolean {
  if (!categoryName) return true;
  switch (categoryName) {
    case "pc":
      return productInfo.isPC;
    case "ps":
      return productInfo.isPS;
    case "xb":
      return productInfo.isXBox;
    default:
      return false;
  }
}

function filter(name: string, category: string, arr: Array<ProductInfo>) {
  return arr.filter(
    (productInfo) =>
      checkFittingCategory(category, productInfo) &&
      (name === "" || productInfo.name.toLowerCase().includes(name.toLowerCase()))
  );
}

export default filter;
