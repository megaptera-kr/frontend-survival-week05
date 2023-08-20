import { RestaurantMenuItem } from './restaurants';

export interface Receipt {
  id: string;
  menu: RestaurantMenuItem[];
  totalPrice: number;
}
