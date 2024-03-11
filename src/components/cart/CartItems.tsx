import Food from '../../types/Food';
import CartItem from './CartItem';

type CartItemsProps = {
  food: Food;
  index: number;
  handleClickCancel: (index: number) => void;
}

function CartItems(
  { food, index, handleClickCancel }: CartItemsProps,
) {
  return (
    <CartItem food={food}>
      <button
        style={{ marginLeft: '0.5rem' }}
        name={`#${food.name}`}
        type="button"
        onClick={() => handleClickCancel(index)}
      >
        취소
      </button>
    </CartItem>
  );
}

export default CartItems;
