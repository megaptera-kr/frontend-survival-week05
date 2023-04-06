import { HTMLAttributes } from 'react';

import { useLocalStorage } from 'usehooks-ts';

import MenuItem from './MenuItem';

import Food from '../types/Food';

type MenuProps = {
  menu: Food[];
} & HTMLAttributes<Element> ;

export default function Menu({ menu }: MenuProps) {
  const [selectedFoods, selectFood] = useLocalStorage<Food[]>('cart', []);

  const handleClickSelect = (food: Food) => {
    selectFood([
      ...selectedFoods,
      food,
    ]);
  };

  return (
    <ul data-testid="Menu">
      {menu.map((food, index) => {
        const { id } = food;

        const key = `${id}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
          >
            <button
              style={{ marginLeft: '.5rem' }}
              name={`#${food.name}`}
              type="button"
              onClick={() => handleClickSelect(food)}
            >
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
