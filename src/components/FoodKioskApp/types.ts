export type CategoryType = '전체' | '중식' | '한식' | '일식';

export type MenuItem = {
  id: string;
  name: string;
  price: number;
};

export type ReceiptType = {
  id?: string;
  menu?: MenuItem[];
  totalPrice?: number;
};

export type ReceiptResponse = {
  receipt: ReceiptType;
};

export type RestaurantItem = {
  id: string;
  category: string;
  name: string;
  menu: MenuItem[];
};

export type RestaurantsItem = {
  restaurants: RestaurantItem[];
};

export type RenderType = 'none' | 'card' | 'notFound';

export interface State {
  restaurants: RestaurantItem[];
  category: CategoryType;
  query: string;
  receipt: ReceiptType;
  addedMenus: MenuItem[];
}

export type Action =
  | { type: 'fetch_data'; payload: RestaurantItem[] }
  | { type: 'update_category'; payload: CategoryType }
  | { type: 'search'; payload: string }
  | { type: 'add_menu'; payload: MenuItem }
  | { type: 'delete_menu'; payload: number }
  | { type: 'reset_menu'; payload: MenuItem[] }
  | { type: 'get_receipt'; payload: ReceiptType }
  | { type: 'delete_receipt'; payload: ReceiptType };
