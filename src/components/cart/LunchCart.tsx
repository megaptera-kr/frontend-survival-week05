import { useLocalStorage } from 'usehooks-ts';
import { Menu, Receipt, ReceiptData } from '../../types';
import calculateTotalPrice from '../../utils/calculateTotalPrice';
import orderInitialValue from '../../utils/orderInitialValue';
import Cart from './Cart';
import OrderButton from './OrderButton';
import ResultReceipt from './ResultReceipt';

export default function LunchCart() {
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
    <div className="w-1/2 flex flex-col item-center">
      <h2 className="text-center font-bold text-2xl">점심 바구니</h2>
      <Cart />
      <OrderButton
        totalPrice={totalPrice}
        handleOrder={handleOrder}
      />
      <ResultReceipt />
    </div>
  );
}
