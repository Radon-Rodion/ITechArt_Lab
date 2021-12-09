import { ProductInfo } from "@/productInfos";

function compareByCriteria(info1: ProductInfo, info2: ProductInfo, criteriaName: string): number {
  switch (criteriaName) {
    case "date": {
      if (info1.additionDate < info2.additionDate) return 1;
      if (info1.additionDate > info2.additionDate) return -1;
      return 0;
    }
    case "price":
      return info1.price - info2.price;
    case "mark":
      return info1.mark - info2.mark;
    default: {
      if (info1.name > info2.name) return 1;
      if (info1.name < info2.name) return -1;
      return 0;
    }
  }
}

function select(field: string, amount: number, arr: Array<ProductInfo>) {
  console.log(`${field}: ${amount}`);
  const sortedArr = arr.sort((prInfo1, prInfo2) => compareByCriteria(prInfo1, prInfo2, field));
  return sortedArr.slice(0, amount);
}

export default select;
