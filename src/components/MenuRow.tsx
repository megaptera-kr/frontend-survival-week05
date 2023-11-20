import { useLocalStorage } from 'usehooks-ts';
import { Menu } from '../types';

type Props = {
    menu : Menu
}

function MenuRow({ menu } : Props) {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);

  const handleAddCart = (el : Menu) => {
    setCart(() => [...cart, el]);
  };

  return (
    <li key={menu.id} style={{ padding: '0.5rem' }}>
      <span>
        {menu.name}
        (
        {menu.price.toLocaleString()}
        원)
      </span>
      <button type="button" name={menu.name} onClick={() => handleAddCart(menu)}>선택</button>
    </li>
  );
}

export default MenuRow;
