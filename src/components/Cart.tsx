import { useLocalStorage } from 'usehooks-ts';

import useCreateOrder from '../hooks/useCreateOrder';

import calcPrice from '../utils/calcPrice';

import type { Menu, ReceiptType } from '../types/restaurants';
import CartList from './CartList';

type CartProps = {
  setReceipt: (receipt: ReceiptType) => void;
}

function Cart({ setReceipt }: CartProps) {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);

  const { createOrder } = useCreateOrder();

  const totalPrice = calcPrice(cart);

  const handleClickCancel = (cartIdx: number) => {
    const filteredFood = cart.filter((_, i) => i !== cartIdx);
    setCart(filteredFood);
  };

  const handleClickOrder = async () => {
    if (!cart.length) return;

    const receipt = await createOrder(cart);
    setReceipt(receipt);
    setCart([]);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ listStyle: 'none' }}>
        {cart.length > 0 && cart.map((item, idx) => {
          const key = `${item.id}-${idx}`;
          return (
            <CartList key={key} item={item} idx={idx} onClickCancel={handleClickCancel} />
          );
        })}
      </ul>
      <div>
        <button
          type="button"
          onClick={handleClickOrder}
        >
          {`합계: ${totalPrice.toLocaleString()}원 주문`}
        </button>

      </div>
    </div>
  );
}

export default Cart;
