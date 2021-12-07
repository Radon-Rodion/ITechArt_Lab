import cyberpunkImage from "images/Cyberpunk.jpg";

export interface ProductInfo {
  name: string;
  price: number;
  mark: number;
  image: string;
  description: string;
  ageCategory: number;
  isPC: boolean;
  isXBox: boolean;
  isPS: boolean;
  additionDate: Date;
  key: number;
}

const productInfos = [
  {
    name: "Overwatch",
    price: 23.99,
    mark: 5,
    image: cyberpunkImage,
    description: "Best game",
    ageCategory: 0,
    isPC: true,
    isXBox: false,
    isPS: false,
    additionDate: new Date("2019-01-16"),
    key: 1,
  },
  {
    name: "Overwatch 2",
    price: 23.99,
    mark: 5,
    image: cyberpunkImage,
    description: "Best game 2",
    ageCategory: 0,
    isPC: false,
    isXBox: true,
    isPS: true,
    additionDate: new Date("2019-01-16"),
    key: 2,
  },
  {
    name: "Overwatch 3",
    price: 23.99,
    mark: 5,
    image: cyberpunkImage,
    description: "Best game 3",
    ageCategory: 0,
    isPC: true,
    isXBox: true,
    isPS: true,
    additionDate: new Date("2019-01-16"),
    key: 3,
  },
];

export { productInfos };
