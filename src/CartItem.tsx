import MenuItem from './MenuItem';

import Food from './types/Food';

type CartItemProps = {
    food: Food;
    handleClickCancel: (index: number) => void
    index: number;
}

export default function CartItem({ food, handleClickCancel, index }:CartItemProps) {
  return (
    <MenuItem food={food}>
      <button
        style={{ marginLeft: '.5rem' }}
        name={`#${food.name}`}
        type="button"
        onClick={() => handleClickCancel(index)}
      >
        취소
      </button>
    </MenuItem>
  );
}
