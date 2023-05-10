type Category = '한식' | '중식' | '일식';

export type Menu = {
  id: string;
  name: string;
  price: number;
}

export type Restaurants = {
  id: string;
  category: Category;
  name: string;
  menu: Menu[]
}

export type Data = {
  restaurants: Restaurants[];
};

export type Receipt = {
  id: string
  menu: Menu[]
  totalPrice: number
}

export type ReceiptData = {
  receipt: Receipt;
};
