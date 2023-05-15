import { Menu } from '../types';

export default function calculateTotalPrice(menu: Menu[]):number {
  return menu.reduce((acc, item) => acc + item.price, 0);
}
