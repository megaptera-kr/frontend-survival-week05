import Food from './Food';

export default interface Receipt {
   id: string;
   menu: Food[];
   totalPrice: number;
 }