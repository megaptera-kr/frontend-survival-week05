import { useLocalStorage } from 'usehooks-ts';
import Food from '../type/Food';
import CartItem from './CartItem';
import OrderButton from './OrderButton';

export default function Cart() {
  const [cartFood, setCartFood] = useLocalStorage<Food[]>('cart', []);
  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {cartFood.map((menu, index) => {
          const key = `${index}-${menu.id}`;
          return (
            <CartItem key={key} menu={menu} index={index} />
          );
        })}
      </ul>
      <OrderButton />
    </div>
  );
}
