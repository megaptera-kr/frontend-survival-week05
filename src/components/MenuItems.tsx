import { useLocalStorage } from 'usehooks-ts';
import Food from '../types/Food';
import Menu from './Menu';

type MenuItemProps = {
    menu: Food[];
    buttonType: string;
}

export default function MenuItems({ menu, buttonType }: MenuItemProps) {
  const [selectFood, setSelectFood] = useLocalStorage<Food[]>('cart', []);

  const handleClickSelect = (food: Food) => {
    setSelectFood([...selectFood, food]);
  };

  const handleClickCancle = (index: number) => {
    setSelectFood(selectFood.filter((food, idx) => idx !== index));
  };

  return (
    <ul>
      {menu.map((food: Food, index: number) => (
        <Menu
          key={`${food.name}-${index}`}
          name={food.name}
          price={food.price}
        >
          {buttonType && (
            <button
              type="button"
              onClick={
                buttonType === '선택' ? (() => handleClickSelect(food))
                  : (() => handleClickCancle(index))
              }
            >
              {buttonType}
            </button>
          )}
        </Menu>
      ))}
    </ul>
  );
}
