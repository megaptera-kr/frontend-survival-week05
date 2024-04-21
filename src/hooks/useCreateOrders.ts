import Orders from '../types/Orders';
import ReceiptType from '../types/Receipt';

function useCreateOrders() {
  async function postOrders(orders:Orders):Promise<ReceiptType> {
    const url = 'http://localhost:3000/orders';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu: orders.menu, totalPrice: orders.totalPrice }),
    });

    const { receipt } = await response.json();
    return receipt;
  }
  return { postOrders };
}

export default useCreateOrders;
