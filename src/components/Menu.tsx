import { useLocalStorage } from 'usehooks-ts';
import MenuItem from './MenuItem';

import Food from '../types/Food';

type MenuProps = {
  menu: Food[];
};

export default function Menu({ menu }: MenuProps) {
  const [selectedFood, setFood] = useLocalStorage<Food[]>('cart', []);

  const handleClickSelect = (food: Food) => {
    if (!food.id) {
      return;
    }
    setFood([...selectedFood, food]);
  };

  if (!menu.length) {
    return <p>메뉴가 존재하지 않습니다.</p>;
  }

  return (
    <ul>
      {menu.map((food, index) => {
        const key = `${food.id}_${index}`;

        return (
          <MenuItem key={key} food={food}>
            <button
              type="button"
              name={`${food.name}`}
              data-testid={`${food.name}_${key}`}
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
