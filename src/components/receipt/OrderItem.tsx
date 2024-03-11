import Food from '../../types/Food';

type OrderItemProps = {
  food: Food;
}

function OrderItem({ food }: OrderItemProps) {
  const { name, price } = food;
  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '.5rem',
      }}
    >
      <span style={{ margin: '0 auto' }}>
        {name}
        (
        {price.toLocaleString()}
        원)
      </span>
    </li>
  );
}

export default OrderItem;
