import { useLocalStorage } from 'usehooks-ts';

import Food from '../../types/Food';
import MenuItem from './MenuItem';

type MenuProps = {
  menu: Food[]
}

function Menu({ menu }: MenuProps) {
  const [selectedFoods, selectFood] = useLocalStorage<Food[]>('cart', []);

  if (!menu.length) {
    return (<p>메뉴가 존재하지 않습니다.</p>);
  }

  const handleClickSelectFood = (food: Food) => {
    selectFood([...selectedFoods, food]);
  };

  return (
    <ul>
      {menu.map((food, idx) => {
        const key = `${food.id}-${idx}`;

        return (
          <MenuItem key={key} food={food}>
            <button
              style={{ marginLeft: '0.5rem' }}
              name={`#${food.name}`}
              type="button"
              onClick={() => handleClickSelectFood(food)}
            >
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}

export default Menu;
