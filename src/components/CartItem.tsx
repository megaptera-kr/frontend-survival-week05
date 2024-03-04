import MenuItem from './MenuItem';
import Food from '../types/Food';

type CartItemProps = {
  food: Food;
  index: number;
  onClickCancel: (index: number) => void;
};

export default function CartItem({
  food,
  index,
  onClickCancel,
}: CartItemProps) {
  return (
    <MenuItem food={food}>
      <button
        type="button"
        name={`#${food.name}`}
        onClick={() => onClickCancel(index)}
      >
        취소
      </button>
    </MenuItem>
  );
}
