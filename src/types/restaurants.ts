export type Menu = {
  id: string;
  name: string;
  price: number;
}

export type Restaurants = {
  id: string;
  category: string;
  name: string;
  menu: Menu[];
}

export type FilterRestaurantConditions = {
  query: string;
  category: string;
}

export interface ReceiptType {
  id: string;
  menu: Menu[];
  totalPrice: number;
}
