import useSelectedMenu from '../hooks/useSelectedMenu';
import MenuItem from './MenuItem';

import MenuType from '../types/MenuType';

type MenuProps = {
  menu: MenuType[];
};

export default function Menu({ menu }: MenuProps) {
  const { handleAddMenu } = useSelectedMenu();

  if (!menu.length) {
    return <p>메뉴가 존재하지 않습니다</p>;
  }

  return (
    <ul className='flex flex-col text-left'>
      {menu.map((menuItem: MenuType, index: number) => {
        const key = `menu-${menuItem.id}-${index}`;
        return (
          <MenuItem key={key} menuItem={menuItem}>
            <button
              type='button'
              className='font-bold bg-teal-400 text-white rounded-xl mr-2 w-3/12 h-8'
              onClick={() => handleAddMenu(menuItem)}
            >
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
