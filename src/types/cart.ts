import type { Food } from './food';

export interface OrderRequest {
  menu: Food[];
  totalPrice: string;
}
