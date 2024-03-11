import { ButtonHTMLAttributes } from 'react';
import Food from '../../types/Food';

type CartItem = {
  food: Food
} & ButtonHTMLAttributes<HTMLButtonElement>

function CartItem({ food, children }: CartItem) {
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
      {children}
    </li>
  );
}

export default CartItem;
