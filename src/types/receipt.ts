import type { Food } from './food';

export interface Receipts {
  id: string;
  menu: Food[];
  totalPrice: number;
}
