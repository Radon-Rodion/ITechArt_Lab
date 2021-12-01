export interface ProductInfo {
  name: string;
  price: number;
  mark: number;
  description: string;
  ageCategory: number;
  isPC: boolean;
  isXBox: boolean;
  isPS: boolean;
  additionDate: Date;
}

const productInfos = [
  {
    name: "Overwatch",
    price: 23.99,
    mark: 5,
    description: "Best game",
    ageCategory: 0,
    isPC: true,
    isXBox: false,
    isPS: false,
    // additionDate: new Date("2019-01-16");
  },
  {
    name: "Overwatch",
    price: 23.99,
    mark: 5,
    description: "Best game",
    ageCategory: 0,
    isPC: true,
    isXBox: false,
    isPS: false,
    // additionDate: new Date("2019-01-16");
  },
];

export { productInfos };
