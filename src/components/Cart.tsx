import { useLocalStorage } from 'usehooks-ts';
import Button from './Button';
import CartItem from './CartItem';
import calculateTotalPrice from '../utils/calculateTotalPrice';
import useCreateOrder from '../hooks/useCreateOrder';

import type Food from '../types/Food';
import type Receipt from '../types/Receipt';

type CartType = {
  setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartType) {
  const [selectMenu, setSelectMenu] = useLocalStorage<Food[]>('cart', []);
  const { createOrder } = useCreateOrder();
  const totalPrice = calculateTotalPrice(selectMenu);

  const handleClickOrder = async () => {
    if (!selectMenu.length) {
      return;
    }

    const receipt = await createOrder(selectMenu);

    setReceipt(receipt);
    setSelectMenu([]);
  };

  const handleClickCancel = (index: number) => {
    const foods = selectMenu.filter((_, i) => i !== index);
    setSelectMenu(foods);
  };

  return (
    <div style={{ width: '20%', marginBottom: 20 }}>
      <h2>점심 바구니</h2>
      <ul>
        {
          selectMenu.map((menu: Food, idx: number) => {
            const key = `${menu.id}-${idx}`;
            return (
              <CartItem item={menu} key={key} index={idx} onClickCancel={handleClickCancel} />
            );
          })
        }
      </ul>
      <Button type="button" title={`합계: ${totalPrice.toLocaleString()}원 주문`} onClick={handleClickOrder} />
    </div>
  );
}
