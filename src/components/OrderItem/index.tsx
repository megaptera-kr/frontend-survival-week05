import { convertKRW } from '../../utils';

type OrderItemProps = {
  name:string;
  price:number
}

function OrderItem({ name, price }:OrderItemProps) {
  return (
    <li style={{ marginBlock: '0.5rem' }}>
      <span style={{ marginRight: '1rem' }}>
        {`${name}(${convertKRW(price)})`}
      </span>
      <button type="button">취소</button>
    </li>
  );
}

export default OrderItem;
