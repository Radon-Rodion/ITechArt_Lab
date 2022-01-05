import { ProductInfo } from "@/data/productInfos";

export function findIndexByKey(key: number, arr: Array<ProductInfo>) {
  return arr.findIndex((info) => info.key === key);
}

export function checkNameExists(name: string, arr: Array<ProductInfo>): boolean {
  return arr.findIndex((info) => info.name === name) !== -1;
}

export function defineNewItemKey(arr: Array<ProductInfo>) {
  if (!arr.length) return 0;
  let infoKey = arr[0].key;
  arr.forEach((inform) => {
    if (inform.key > infoKey) infoKey = inform.key;
  });
  infoKey++;
  return infoKey; // return new key to be set outside function
}
