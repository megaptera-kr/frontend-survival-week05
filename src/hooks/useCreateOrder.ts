import type { Menu, ReceiptType } from '../types/restaurants';
import calcPrice from '../utils/calcPrice';

const url = 'http://localhost:3000/orders';

function useCreateOrder() {
  const createOrder = async (menu: Menu[]) => {
    const totalPrice = calcPrice(menu);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const { receipt } = await response.json() as {receipt: ReceiptType};

    return receipt;
  };

  return { createOrder };
}

export default useCreateOrder;
