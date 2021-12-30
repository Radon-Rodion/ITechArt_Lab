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

function filter(name: string, category: string, genre: string, age: number, arr: Array<ProductInfo>) {
  return arr.filter(
    (productInfo) =>
      checkFittingCategory(category, productInfo) &&
      productInfo.name.toLowerCase().includes(name.toLowerCase()) &&
      productInfo.description.toLowerCase().includes(genre.toLowerCase()) &&
      (age === 0 || productInfo.ageCategory === age)
  );
}

/*  */

export default filter;
