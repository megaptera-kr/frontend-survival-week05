import { useLocalStorage } from 'usehooks-ts';
import { Menu } from '../types';

type Props = {
  title: string;
  item: Menu;
}

export default function MenuItem({ title, item }:Props) {
  const [, setCart] = useLocalStorage<Menu[]>('cart', []);

  const handleCart = () => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <li className="flex justify-between px-2 first:mt-2 my-2 last:mb-2">
      <div className="w-[80%]">
        {item.name}
        (
        {item.price.toLocaleString()}
        원)
      </div>
      <button
        className="w-[20%] bg-green-400 rounded py-2"
        name={`#${item.name}`}
        type="button"
        onClick={handleCart}
      >
        {title}
      </button>
    </li>
  );
}
