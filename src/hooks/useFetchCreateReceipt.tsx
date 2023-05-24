import Food from '../type/Food';
import calcTotalPrice from '../utils/calcTotalPrice';

type useFetchCreateReceiptProps = {
  cartFood : Food[]
}

const url = 'http://localhost:3000/orders';

export default function useFetchCreateReceipt({ cartFood }: useFetchCreateReceiptProps) {
  const menu = cartFood;
  const totalPrice = calcTotalPrice({ cartFood });
  async function CreatReceipt() {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ totalPrice, menu }),
    });
    const { receipt } = await response.json();
    return receipt;
  }
  return CreatReceipt();
}
