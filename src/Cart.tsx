import { useLocalStorage } from 'usehooks-ts';

import useCreateOrder from './hooks/useCreateOrder';

import Food from './types/Food';
import Receipt from './types/Receipt';
import CartItem from './CartItem';
import OrderBtn from './OrderBtn';

type CartProps = {
  setReceipt: (receipt: Receipt) => void;
};

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);

  const totalPrice = selectedFoods.reduce((acc, food) => food.price + acc, 0);

  const createOrder = useCreateOrder();

  const handleClickCancel = (index: number) => {
    const food = selectedFoods.filter((_, i) => i !== index);
    setFoods(food);
  };

  const handleOrder = async () => {
    if (!selectedFoods.length) {
      return;
    }
    const receipt = await createOrder(selectedFoods);
    setReceipt(receipt);
    setFoods([]);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul style={{ width: '20%' }}>
        {selectedFoods?.map((food, index) => {
          const key = `${food}-${index}`;
          return (
            <CartItem
              key={key}
              food={food}
              index={index}
              handleClickCancel={handleClickCancel}
            />
          );
        })}
      </ul>
      <OrderBtn totalPrice={totalPrice} handleOrder={handleOrder} />
    </div>
  );
}
