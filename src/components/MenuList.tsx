import { useLocalStorage } from 'usehooks-ts';
import { Menu } from '../types/restaurants';

type RestaurantTableRowProps = {
  food: Menu;
}

function MenuList({ food }: RestaurantTableRowProps) {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);

  const handleClickBtn = (selectedFood: Menu) => {
    setCart([...cart, selectedFood]);
  };

  return (
    <li key={food.id} style={{ marginBottom: '1rem' }}>
      <span>{`${food.name}(${food.price.toLocaleString()}원)`}</span>
      <button
        type="button"
        name={`#${food.name}`}
        style={{ float: 'right', marginLeft: '0.5rem' }}
        onClick={() => handleClickBtn(food)}
        data-testid={`#${food.name}`}
      >
        선택
      </button>
    </li>
  );
}

export default MenuList;
