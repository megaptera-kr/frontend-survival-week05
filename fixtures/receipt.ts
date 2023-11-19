import foods from './foods';
import { ReceiptInterface } from '../src/interfaces/RestaurantList.interface';

const receipt : ReceiptInterface = {
  id: 'RECEIPT_ID',
  menu: foods,
  totalPrice: foods.reduce((acc, cur) => acc + cur.price, 0),
};

export default receipt;
