import Menu from '../types/Menu';

interface MenuItemProps {
    menuItem: Menu;
    onAddCart: (menuItem: Menu) => void;
}

export default function MenuItem({
  menuItem,
  onAddCart,
}: MenuItemProps) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <li>
        {menuItem.name}
        (
        {(menuItem.price).toLocaleString('ko-kr')}
        원)
        <button
          type="button"
          name={menuItem.name}
          style={{ marginLeft: 10 }}
          onClick={() => onAddCart(menuItem)}
        >
          선택
        </button>
      </li>
    </ul>
  );
}
