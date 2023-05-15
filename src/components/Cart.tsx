import { useLocalStorage } from 'usehooks-ts';
import Food from '../types/Food';
import MenuItems from './MenuItems';
import Receipt from '../types/Receipt';
import useOrder from '../hooks/useOrder';

type CartProps = {
  setReceipt: (value: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);

  const totalPrice = selectedFoods.reduce((acc, food) => (acc + food.price), 0);

  const handleClickOrder = () => {
    const receipt = useOrder();
    setReceipt(receipt);
    setFoods([]);
  };

  return (
    <>
      <h2>점심 바구니</h2>
      <div>
        <MenuItems menu={selectedFoods} buttonType="삭제" />
      </div>
      <button
        type="button"
        onClick={handleClickOrder}
      >
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </>
  );
}
