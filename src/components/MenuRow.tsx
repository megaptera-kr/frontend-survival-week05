import { Menu, SetValue } from '../types';

type Props = {
    menu : Menu
    setCart : SetValue<Menu[]>
}

function MenuRow({ menu, setCart } : Props) {
  const handleAddCart = (el : Menu) => {
    setCart((prev) => [...prev, el]);
  };

  return (
    <li key={menu.id} style={{ padding: '0.5rem' }}>
      <span>
        {menu.name}
        (
        {menu.price.toLocaleString()}
        원)
      </span>
      <button type="button" onClick={() => handleAddCart(menu)}>선택</button>
    </li>
  );
}

export default MenuRow;
