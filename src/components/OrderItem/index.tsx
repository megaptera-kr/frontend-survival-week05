import { convertKRW } from '../../utils';

type OrderItemProps = {
  name:string;
  price:number
  removeMenuItem:() => void
}

function OrderItem({ name, price, removeMenuItem }:OrderItemProps) {
  return (
    <li style={{ marginBlock: '0.5rem' }}>
      <span style={{ marginRight: '1rem' }}>
        {`${name}(${convertKRW(price)})`}
      </span>
      <button type="button" onClick={removeMenuItem}>취소</button>
    </li>
  );
}

export default OrderItem;
