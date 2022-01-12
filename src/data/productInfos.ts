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

export const newProductInfo: ProductInfo = {
  name: "",
  price: 0.01,
  mark: 0,
  image: "images/noimg.png",
  description: "",
  ageCategory: 0,
  isPC: false,
  isXBox: false,
  isPS: false,
  additionDate: new Date(),
  key: -1,
};

const productInfos = [
  {
    name: "Overwatch2",
    price: 34.99,
    mark: 4,
    image: "images/Overwatch2.jpg",
    description: "Action, shooter, siquel, by Blizzard Entertainment",
    ageCategory: 12,
    isPC: true,
    isXBox: true,
    isPS: true,
    additionDate: new Date("2023-10-22"),
    key: 1,
  },
  {
    name: "Cyberpunk",
    price: 29.99,
    mark: 3,
    image: "images/Cyberpunk.jpg",
    description: "Action, RPG, open-world, by CD project red",
    ageCategory: 18,
    isPC: true,
    isXBox: true,
    isPS: true,
    additionDate: new Date("2020-11-05"),
    key: 2,
  },
  {
    name: "Bladerunner",
    price: 9.99,
    mark: 4,
    image: "images/Bladerunner.jpg",
    description: "Action, shooter, stels, by my imagination",
    ageCategory: 0,
    isPC: true,
    isXBox: true,
    isPS: true,
    additionDate: new Date("2019-05-15"),
    key: 3,
  },
  {
    name: "Field of arms",
    price: 24.99,
    mark: 5,
    image: "images/FieldOfArms.jpg",
    description: "Tactic, strategy, real-time, by BALANDRA S.A.S",
    ageCategory: 12,
    isPC: true,
    isXBox: false,
    isPS: false,
    additionDate: new Date("2022-09-04"),
    key: 4,
  },
  {
    name: "Virtual hunter",
    price: 9.99,
    mark: 3,
    image: "images/VirtualHunter.jpg",
    description: "Simulator, survival, by Virtual Hunter",
    ageCategory: 6,
    isPC: true,
    isXBox: false,
    isPS: false,
    additionDate: new Date("2022-05-18"),
    key: 5,
  },
  {
    name: "Hytale",
    price: 14.99,
    mark: 4,
    image: "images/Hytale.jpg",
    description: "Action, roleplay, adventure, fighting, by Hypixel Studios",
    ageCategory: 12,
    isPC: true,
    isXBox: true,
    isPS: false,
    additionDate: new Date("2023-08-20"),
    key: 6,
  },
];

export { productInfos };
