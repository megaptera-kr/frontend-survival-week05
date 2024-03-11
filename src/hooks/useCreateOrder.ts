import Food from '../types/Food';
import calculateTotalPrice from '../utils/calculateTotalPrice';

import { BASE_URL } from '../constants/api';

const url = `${BASE_URL}/orders`;

function useCreateOrder() {
  const createOrder = async (menu: Food[]) => {
    const totalPrice = calculateTotalPrice(menu);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const { receipt } = await response.json();

    return receipt;
  };

  return { createOrder };
}

export default useCreateOrder;
