import { RestaurantMenuItem } from '../types/restaurants';
import MenuListItem from './MenuListItem';

type MenuListProps = {
  menuList: RestaurantMenuItem[]
}

export default function MenuList({ menuList }: MenuListProps) {
  return (
    <ul>
      {menuList.map((menu) => (
        <MenuListItem
          key={menu.id}
          menu={menu}
        >
          <button
            type="button"
            style={{
              marginLeft: '0.5rem',
            }}
          >
            선택
          </button>
        </MenuListItem>
      ))}
    </ul>
  );
}
