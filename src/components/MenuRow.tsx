import { useLocalStorage } from 'usehooks-ts';

import Menu from '../types/Menu';

export default function MenuRow({ food } : {food : Menu}) {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);

  const handleClick = () => {
    setCart([...cart, food]);
  };

  return (
    <li
      key={food.id}
      style={{ paddingBlock: '0.3rem' }}
    >
      <span>
        {food.name}
        (
        {food.price.toLocaleString()}
        원)
      </span>
      <button
        type="button"
        name={`#${food.name}`}
        onClick={handleClick}
      >
        선택

      </button>
    </li>
  );
}
