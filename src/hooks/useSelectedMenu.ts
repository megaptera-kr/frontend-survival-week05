import { useLocalStorage } from 'usehooks-ts';

import MenuType from '../types/MenuType';

function useSelectedMenu() {
  const [selectedMenuItems, setSelectedMenuItems] = useLocalStorage<MenuType[]>(
    'cart',
    [],
  );

  const handleAddMenu = (menuItem: MenuType) => {
    setSelectedMenuItems([...selectedMenuItems, menuItem]);
  };

  const handleRemoveMenu = (menuItem: MenuType) => {
    const data: MenuType[] = selectedMenuItems.filter(
      (item: MenuType) => item !== menuItem,
    );
    setSelectedMenuItems(data);
  };

  const handleRemoveAllMenu = () => {
    setSelectedMenuItems([]);
  };

  return {
    selectedMenuItems,
    handleAddMenu,
    handleRemoveMenu,
    handleRemoveAllMenu,
  };
}

export default useSelectedMenu;
