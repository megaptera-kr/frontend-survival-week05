import Receipt from '../src/types/receipt';

export default function useCreateReceipt(cart: Receipt) {
  const createOrder = async () => {
    const url = 'http://localhost:3000/orders';
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    });
    const { receipt } = await response.json();
    return receipt;
  };
  return createOrder();
}
