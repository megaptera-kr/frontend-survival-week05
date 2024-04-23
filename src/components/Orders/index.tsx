import { useLocalStorage } from 'usehooks-ts';
import usePostOrders from '../../hooks/useCreateOrders';
import OrdersType from '../../types/Orders';
import ReceiptType from '../../types/Receipt';
import { convertKRW } from '../../utils';
import getTotalPrice from '../../utils/getTotalPrice';
import OrderItem from '../OrderItem';

type OrdersProps = {
  setReceipt:React.Dispatch<React.SetStateAction<ReceiptType>>
}

const initOrders: OrdersType = { menu: [], totalPrice: 0 };

function Orders({ setReceipt }:OrdersProps) {
  const [orders, setOrders] = useLocalStorage<OrdersType>(
    'orders',
    initOrders,
  );
  const totalPrice = getTotalPrice(orders?.menu ?? []);

  const removeMenuItem = (id:string) => {
    const filteredMenu = orders.menu.filter((menuItem) => menuItem.id !== id);
    return () => setOrders({ ...orders, menu: filteredMenu });
  };

  const { postOrders } = usePostOrders();

  const handleSubmit = async () => {
    const receipt = await postOrders({ menu: orders.menu, totalPrice });
    setOrders(initOrders);
    setReceipt(receipt);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul style={{ listStyle: 'none' }}>
        {orders?.menu.map((order) => (
          <OrderItem
            key={order.id}
            name={order.name}
            price={order.price}
            removeMenuItem={removeMenuItem(order.id)}
          />
        ))}
      </ul>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={orders.menu.length === 0}
      >
        합계:
        {convertKRW(totalPrice ?? 0)}
        {' '}
        주문
      </button>
    </div>
  );
}

export default Orders;
