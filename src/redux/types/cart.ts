export interface CartElement {
  name: string;
  possiblePlatforms: string[];
  chosenPlatformIndex: number;
  orderDate: string;
  amount: number;
  price: number;
  selected: boolean;
}

interface Cart {
  elements: Array<CartElement>;
}

export default Cart;
