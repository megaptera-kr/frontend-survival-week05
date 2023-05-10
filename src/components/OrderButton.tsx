import { useLocalStorage } from 'usehooks-ts';
import { Menu, Receipt, ReceiptData } from '../types';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const orderInitialValue = {
  id: '',
  menu: [],
  totalPrice: 0,
};

export default function OrderButton() {
  const [, setReceipt] = useLocalStorage<Receipt>('receipt', orderInitialValue);
  const [menu, setCart] = useLocalStorage<Menu[]>('cart', []);
  const totalPrice = calculateTotalPrice(menu);

  const handleOrder = async () => {
    setCart([]);
    try {
      const responseOption = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ menu, totalPrice }),
      };
      const response = await fetch('http://localhost:3000/orders', responseOption);
      const data:ReceiptData = await response.json();
      const { receipt } = data;
      setReceipt(receipt);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <button
      className="bg-green-400 rounded py-2 mt-2"
      type="button"
      onClick={handleOrder}
    >
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
