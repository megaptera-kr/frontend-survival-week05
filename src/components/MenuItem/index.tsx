import MenuType from '../../types/MenuType';
import { convertKRW } from '../../utils';

type MenuItemProps = {
  menuItem: MenuType
  addMenuItem: () => void
}

function MenuItem({ menuItem, addMenuItem }:MenuItemProps) {
  return (
    <li style={{ marginBlock: '0.5rem' }}>
      <span style={{ marginRight: '1rem' }}>
        {`${menuItem.name}(${convertKRW(menuItem.price)})`}
      </span>
      <button
        type="button"
        name={`#${menuItem.name}`}
        onClick={addMenuItem}
      >
        선택
      </button>
    </li>
  );
}

export default MenuItem;
