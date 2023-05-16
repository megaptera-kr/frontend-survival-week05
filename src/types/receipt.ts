import Food from './food';

interface Receipt {
  id?: string;
  totalPrice: number;
  menu: Food[];
}

export default Receipt;
