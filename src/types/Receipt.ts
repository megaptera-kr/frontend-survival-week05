import MenuType from './MenuType';

type ReceiptType = {
  id:string;
  menu:MenuType[],
  totalPrice:number
}

export default ReceiptType;
