import { Food } from '../../../types/food';
import { Receipts } from '../../../types/receipt';
import { calcTotalPrice } from '../../../utils/cart';

interface UseCreateOrder {
  createOrder: (menu: Food[]) => Promise<Receipts>;
}

const URL = 'http://localhost:3000/orders';

export default function useCreateOrder(): UseCreateOrder {
  const createOrder = async (menu: Food[]): Promise<Receipts> => {
    const reqData = {
      menu,
      totalPrice: calcTotalPrice(menu),
    };

    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqData),
    });
    const { receipt } = await res.json();

    return receipt;
  };

  return { createOrder };
}
