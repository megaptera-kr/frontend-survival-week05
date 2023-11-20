import { Menu } from '../types';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const useCreateOrder = () => {
  const createOrder = async (menu : Menu[]) => {
    const totalPrice = calculateTotalPrice(menu);
    const url = 'http://localhost:3000/orders';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        menu,
        totalPrice,
      }),
    });
    const { receipt } = await response.json();

    return receipt;
  };

  return { createOrder };
};

export default useCreateOrder;
