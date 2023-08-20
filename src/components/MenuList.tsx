import { RestaurantMenuItem } from '../types/restaurants';
import AddBucketButton from './AddBucketButton';
import MenuListItem from './MenuListItem';
import useBucketStorage from '../hooks/useBucketStorage';

type MenuListProps = {
  menuList: RestaurantMenuItem[]
}

export default function MenuList({ menuList }: MenuListProps) {
  const { addMenu } = useBucketStorage();

  return (
    <ul>
      {menuList.map((menu) => (
        <MenuListItem
          key={menu.id}
          menu={menu}
        >
          <AddBucketButton
            name={`#${menu.name}`}
            title="선택"
            onClick={() => addMenu(menu)}
          />
        </MenuListItem>
      ))}
    </ul>
  );
}
