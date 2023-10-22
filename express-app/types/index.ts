export interface Menu {
    id: string;
    name: string;
    price: number;
  }
  export interface Receipt {
    id: string;
    menu: Menu[];
    totalPrice: number;
  }
 
  export interface Restaurant {
    id: string;
    category: string;
    name: string;
    menu: Menu[];
  }