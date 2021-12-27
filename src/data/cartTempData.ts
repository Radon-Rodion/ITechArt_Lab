export interface GameOrder {
  name: string;
  platform: string;
  orderDate: string;
  amount: number;
  price: number;
}

const orders = [
  {
    name: "CS: GO",
    platform: "PC",
    orderDate: "05/12/21",
    amount: 1,
    price: 32.99,
  },
  {
    name: "Minecraft",
    platform: "PC",
    orderDate: "09/06/21",
    amount: 1,
    price: 9.99,
  },
];

export default orders;
