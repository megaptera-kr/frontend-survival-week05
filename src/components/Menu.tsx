import MenuType from '../types/MenuType';
import MenuItem from './MenuItem';

type MenuProps = {
  menu: MenuType[];
};

export default function Menu({ menu }: MenuProps) {
  if (!menu.length) {
    return <p>메뉴가 존재하지 않습니다</p>;
  }

  return (
    <ul className='flex flex-col text-left'>
      {menu.map((menuItem: MenuType, index: number) => {
        const key = `${menuItem.id}-${index}`;
        return <MenuItem key={key} menuItem={menuItem} />;
      })}
    </ul>
  );
}
