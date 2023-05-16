import { useContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Button from './common/atoms/button/Button';

import Food from '../types/food';

type RestaurantsTableBodyMenuProps = {
  menu: Food[];
}

export default function RestaurantsTableBodyMenu({
  menu,
}: RestaurantsTableBodyMenuProps) {
  const [selectFood, setSelectFood] = useLocalStorage<Food[]>('food', []);
  function handleClick(food: Food) {
    setSelectFood([
      ...selectFood,
      food,
    ]);
  }
  return (
    <ul>
      {menu.map((food, index) => (
        <li
          // eslint-disable-next-line react/no-array-index-key
          key={`${food.id}-${index}`}
          style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between' }}
        >
          <p style={{ marginRight: '1rem' }}>{`${food.name}(${food.price.toLocaleString('ko-kr')}원)`}</p>
          <Button
            name={`#${food.name}`}
            data-testid={food.name}
            onClick={() => handleClick(food)}
          >
            선택
          </Button>
        </li>
      ))}
    </ul>
  );
}
