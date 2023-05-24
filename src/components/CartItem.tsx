import { useLocalStorage } from 'usehooks-ts';
import Food from '../type/Food';

type CartItemProps = {
  menu:Food,
  index:number
}

export default function CartItem({ menu, index }:CartItemProps) {
  const [cartFood, setCartFood] = useLocalStorage<Food[]>('cart', []);
  const handleCancel = () => {
    const filterdeCartFood = cartFood.filter((food, i) => (index !== i));
    setCartFood(filterdeCartFood);
  };
  return (
    <li>
      <span>
        {menu.name}
        (
        {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원)
      </span>
      <button type="button" onClick={handleCancel}>취소</button>
    </li>
  );
}
