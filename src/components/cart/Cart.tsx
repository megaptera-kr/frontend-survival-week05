import { useLocalStorage } from 'usehooks-ts';

import Receipt from '../../types/Receipt';
import Food from '../../types/Food';
import useCreateOrder from '../../hooks/useCreateOrder';
import CartItems from './CartItems';
import OrderButton from './OrderButton';

type CartProps = {
  setReceipt: (receipt: Receipt) => void;
}
function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);

  const { createOrder } = useCreateOrder();

  const handleClickCancel = (indexToRemove: number) => {
    const foods = selectedFoods.filter((_, index) => index !== indexToRemove);
    setFoods(foods);
  };

  const handleClickOrder = async () => {
    if (!selectedFoods.length) return;

    const receipt = await createOrder(selectedFoods);
    setReceipt(receipt);

    setFoods([]);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ width: '20%' }}>
        {selectedFoods.map((food, index) => {
          const key = `${food.id}-${index}`;

          return (
            <CartItems
              key={key}
              food={food}
              index={index}
              handleClickCancel={handleClickCancel}
            />
          );
        })}
      </ul>
      <OrderButton
        selectedFoods={selectedFoods}
        handleClickOrder={handleClickOrder}
      />
    </div>
  );
}

export default Cart;
