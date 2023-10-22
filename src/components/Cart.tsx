import { useLocalStorage } from 'usehooks-ts';
import CartItem from './CartItem';
import Food from '../types/Food';

export default function Cart({ setReceipt }: any) {
  const [selectedFoods, setSelectFood] = useLocalStorage<Food[]>('cart', []);

  const totalPrice = selectedFoods.reduce(
    (result, food) => result + food.price,
    0,
  );

  const onOrderHandler = async () => {
    if (!selectedFoods.length) {
      return;
    }

    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu: selectedFoods, totalPrice }),
    });
    const { receipt: data } = await response.json();
    setReceipt(data);
    setSelectFood([]);
  };
  return (
    <div>
      <div style={{ marginBottom: '48px' }}>
        <h2>점심 바구니</h2>
        <ul style={{ width: '20%' }}>
          {selectedFoods.map((food: Food, index: number) => (
            <CartItem
              key={`food${food.id + index}`}
              cartItemIndex={index}
              food={food}
            />
          ))}
        </ul>
        <button type="button" onClick={() => onOrderHandler()}>
          {`합계: ${totalPrice.toLocaleString()}원 주문`}
        </button>
      </div>
    </div>
  );
}