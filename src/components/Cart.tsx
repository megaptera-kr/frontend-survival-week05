import { useLocalStorage } from 'usehooks-ts';
import CartItem from './CartItem';

import Food from '../types/Food';
import Receipt from '../types/Receipt';
import useCreateOrder from '../hooks/useCreateOrder';

type CartProps = {
  setReceipt: (receipt: Receipt) => void;
};

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);
  const totalPrice = selectedFoods.reduce((acc, cur) => acc + cur.price, 0);

  const { createOrder } = useCreateOrder();

  const handleClickCancel = (index: number) => {
    const filterFoods = selectedFoods.filter((_, i) => i !== index);
    setFoods(filterFoods);
  };

  const handleClickOrder = async () => {
    if (!selectedFoods.length) {
      return;
    }
    const receipt = await createOrder(selectedFoods);
    setReceipt(receipt);

    setFoods([]);
  };

  return (
    <div>
      <h2>점심 장바구니</h2>
      <ul>
        {selectedFoods.map((food, index) => {
          const key = `${food.id}_${index}`;
          return (
            <CartItem
              key={key}
              food={food}
              index={index}
              onClickCancel={handleClickCancel}
            />
          );
        })}
      </ul>
      <div>
        <button type="button" onClick={handleClickOrder}>
          {`합계 : ${totalPrice.toLocaleString()}원 주문`}
        </button>
      </div>
    </div>
  );
}
