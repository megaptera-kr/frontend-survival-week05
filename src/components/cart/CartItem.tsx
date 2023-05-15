import MenuItem from '../restaurants/MenuItem';

import Food from '../../types/Food';

type CartItemProps = {
    index: number;
    food: Food;
    onClickCancle: (index: number) => void;
  }

export default function CartItem({
  index, food, onClickCancle,
}: CartItemProps) {
  return (
    <MenuItem
      food={food}
    >
      <button
        type="button"
        onClick={() => onClickCancle(index)}
      >
        취소
      </button>
    </MenuItem>
  );
}
