import Menu from '../types/Menu';

interface CartItemProps {
  menu: Menu;
  index: number;
  handleClickCancel: (index: number) => void
}

export default function CartItem({
  menu, index, handleClickCancel,
} : CartItemProps) {
  return (
    <li>
      <span>
        {menu.name}
        (
        {menu.price.toLocaleString()}
        원)
      </span>
      <button
        type="button"
        name={`#${menu.name}`}
        onClick={() => handleClickCancel(index)}
      >
        취소

      </button>
    </li>
  );
}
