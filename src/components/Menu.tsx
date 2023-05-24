import { useLocalStorage } from 'usehooks-ts';
import Food from '../type/Food';

type MenuProps = {
  menu :Food
}

export default function Menu({ menu }: MenuProps) {
  const [cartFood, setCartFood] = useLocalStorage<Food[]>('cart', []);
  function handleCart() {
    const cartitems = [...cartFood, menu];
    setCartFood(cartitems);
  }
  return (
    <ul>
      <li>
        <span>
          {menu.name}
          (
          {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원)
        </span>
        <button name={`#${menu.name}`} type="button" onClick={handleCart}>선택</button>
      </li>
    </ul>
  );
}
