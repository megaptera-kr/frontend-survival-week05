/* eslint-disable import/no-extraneous-dependencies */
import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';
import { Menu } from '../types';
import SelectMenuItem from './SelectMenuItem';

export default function Cart() {
  const [carts] = useLocalStorage<Menu[]>('cart', []);
  return (
    <ul className="w-full h-[40%] border-2 border-green-400 overflow-scroll">
      {carts.map((cart, index) => (
        <SelectMenuItem
          key={uuidv4()}
          index={index}
          title="취소"
          item={cart}
        />
      ))}
    </ul>
  );
}
