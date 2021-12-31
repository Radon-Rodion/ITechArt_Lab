import { ProductInfo } from "@/data/productInfos";
import { CartElement } from "@/redux/types/cart";

export const getPossiblePlatforms = (game: ProductInfo): Array<string> => {
  const platforms = new Array<string>();
  if (game.isPC) platforms.push("PC");
  if (game.isPS) platforms.push("Playstation");
  if (game.isXBox) platforms.push("Xbox");
  return platforms;
};

export const createCartElement = (game: ProductInfo): CartElement => ({
  name: game.name,
  possiblePlatforms: getPossiblePlatforms(game),
  chosenPlatformIndex: 0,
  orderDate: new Date().toDateString(),
  amount: 1,
  price: game.price,
  selected: false,
});

export const findCartElement = (elements: CartElement[], name: string, orderDate: string): number => {
  if (!elements) return -1;
  return elements.findIndex((element) => element.name === name && element.orderDate === orderDate);
};

export const totalSum = (cartElements: CartElement[]): number => {
  let sum = 0;
  cartElements.forEach((element) => {
    sum += element.price * element.amount;
  });
  return sum;
};
