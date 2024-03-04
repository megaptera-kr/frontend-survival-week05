import MenuType from './MenuType';

type OrderResponseType = {
  id: string;
  menu: MenuType[];
  totalPrice: number;
};

export default OrderResponseType;
