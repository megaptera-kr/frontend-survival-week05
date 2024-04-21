import { useReadLocalStorage } from 'usehooks-ts';
import Orders from '../../types/Orders';
import OrderItem from '../OrderItem';
import { convertKRW } from '../../utils';
import getTotalPrice from '../../utils/getTotalPrice';

function Orders() {
  const orders = useReadLocalStorage<Orders>('orders');
  const totalPrice = getTotalPrice(orders?.menu ?? []);
  return (
    <div>
      <h2>점심 바구니</h2>
      <ul style={{ listStyle: 'none' }}>
        {orders?.menu.map((order) => (
          <OrderItem
            key={order.id}
            name={order.name}
            price={order.price}
          />
        ))}
      </ul>

      <button type="button">
        합계:
        {convertKRW(totalPrice ?? 0)}
        {' '}
        주문
      </button>
    </div>
  );
}

export default Orders;
