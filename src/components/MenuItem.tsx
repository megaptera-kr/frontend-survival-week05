import Menu from '../types/Menu';

interface MenuItemProps {
    menuItem: Menu;
}

export default function MenuItem({ menuItem }: MenuItemProps) {
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
        >
          선택
        </button>
      </li>
    </ul>
  );
}
