import type { Menu } from '../types/restaurants';

type CartListProps = {
  item: Menu;
  idx: number;
  onClickCancel: (idx: number) => void;
};

function CartList({ item, idx, onClickCancel }: CartListProps) {
  return (
    <li>
      <span>{`${item.name}(${item.price.toLocaleString()}원)`}</span>
      <button type="button" onClick={() => onClickCancel(idx)}>취소</button>
    </li>
  );
}

export default CartList;
