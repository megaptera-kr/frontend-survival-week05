import { useLocalStorage } from 'usehooks-ts';
import MenuItem from './MenuItem';
import Button from './Button';

import type Food from '../types/Food';

type MenuType = {
    menu: Food[]
}

export default function Menu({ menu }: MenuType) {
  const [selectMenu, setSelectMenu] = useLocalStorage<Food[]>('cart', []);

  if (!menu.length) {
    return (
      <p>메뉴가 존재하지 않습니다</p>
    );
  }

  const handleClickSelect = (food: Food) => {
    setSelectMenu([
      ...selectMenu,
      food,
    ]);
  };

  return (
    <ul>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
          >
            <Button
              type="button"
              title="선택"
              buttonStyle={{ marginLeft: '.5rem' }}
              name={`#${food.name}`}
              onClick={() => handleClickSelect(food)}
            />
          </MenuItem>
        );
      })}
    </ul>
  );
}
