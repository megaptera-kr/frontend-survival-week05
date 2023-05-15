import { useLocalStorage } from 'usehooks-ts';

import CartItem from './CartItem';
import OrderButton from './OrderButton';

import Food from '../../types/Food';
import Receipt from '../../types/Receipt';

import useCreateOrder from '../../hooks/useCreateOrder';

type CartProps = {
  setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setSelectFoods] = useLocalStorage<Food[]>('cart', []);

  const { createOrder } = useCreateOrder();

  const handleClickCancel = (index: number) => {
    const foods = selectedFoods.filter((_, i) => i !== index);
    setSelectFoods(foods);
  };

  const handleClickOrder = async () => {
    if (!selectedFoods.length) { return; }

    const receipt = await createOrder(selectedFoods);
    setReceipt(receipt);

    setSelectFoods([]);
  };

  return (
    <div>
      <h2>주문 바구니</h2>
      <ul>
        {selectedFoods.map((food, index) => {
          const key = `${food.id}-${index}`;

          return (
            <CartItem
              key={key}
              index={index}
              food={food}
              onClickCancle={handleClickCancel}
            />
          );
        })}
        <OrderButton foods={selectedFoods} onClickOrder={handleClickOrder} />
      </ul>
    </div>
  );
}
