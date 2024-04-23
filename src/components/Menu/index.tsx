import { useLocalStorage } from 'usehooks-ts';
import MenuType from '../../types/MenuType';
import OrdersType from '../../types/Orders';
import MenuItem from '../MenuItem';

type MenuProps = {
 menu:MenuType[]
}

function Menu({ menu }:MenuProps) {
  const [, setOrders] = useLocalStorage<OrdersType>(
    'orders',
    { menu: [], totalPrice: 0 },
  );

  const addMenuItem = (menuItem:MenuType) => () => setOrders((prev) => ({
    ...prev,
    menu: [...prev.menu, {
      id: Date.now().toString(),
      name: menuItem.name,
      price: menuItem.price,
    }],
  }));
  return (
    <ul style={{ listStyle: 'none' }}>
      {menu.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          menuItem={menuItem}
          addMenuItem={addMenuItem(menuItem)}
        />
      ))}
    </ul>
  );
}

export default Menu;
