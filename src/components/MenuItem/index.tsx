import { useLocalStorage } from 'usehooks-ts';
import { useRef } from 'react';
import { convertKRW } from '../../utils';
import Orders from '../../types/Orders';

type MenuItemProps = {
  name:string;
  price:number
}

function MenuItem({ name, price }:MenuItemProps) {
  const id = useRef<string>(`${name}-${new Date()}`);
  const [orders, setOrders] = useLocalStorage<Orders>(
    'orders',
    { menu: [], totalPrice: 0 },
  );

  const addMenuItem = () => {
    setOrders({
      ...orders,
      menu: [...orders.menu, {
        id: id.current,
        name,
        price,
      }],
    });
  };
  return (
    <li style={{ marginBlock: '0.5rem' }}>
      <span style={{ marginRight: '1rem' }}>
        {`${name}(${convertKRW(price)})`}
      </span>
      <button type="button" onClick={addMenuItem}>선택</button>
    </li>
  );
}

export default MenuItem;
