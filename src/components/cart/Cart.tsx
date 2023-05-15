/* eslint-disable import/no-extraneous-dependencies */
import { useLocalStorage } from 'usehooks-ts';
import { v4 } from 'uuid';
import { Menu } from '../../types';
import SelectMenuItem from './SelectMenuItem';

export default function Cart() {
  const [carts, setCarts] = useLocalStorage<Menu[]>('cart', []);

  const handleCart = (currentIndex: number) => {
    setCarts((prev) => [...prev.filter((_, prevIndex) => prevIndex !== currentIndex)]);
  };
  return (
    <ul className="w-full h-[40%] border-2 border-green-400 overflow-scroll">
      {carts.map((cart, index) => (
        <SelectMenuItem
          key={v4()}
          index={index}
          title="취소"
          item={cart}
          handleCart={handleCart}
        />
      ))}
    </ul>
  );
}
