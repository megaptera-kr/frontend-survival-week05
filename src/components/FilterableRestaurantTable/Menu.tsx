import { useLocalStorage } from 'usehooks-ts';
import { Food } from '../../types/Restaurant';
import FoodItem from './FoodItem';

interface FoodProps {
  menu: Food[];
}
export default function Menu({ menu }: FoodProps) {
  const [isCartItem, setCartItem] = useLocalStorage<Food[]>('cartItem', []);

  return menu.length ? (
    <ul>
      {menu.map((food) => (
        <FoodItem key={food.id} food={food}>
          <button
            type="button"
            name={`#${food.name}`}
            style={{ marginLeft: '0.5rem' }}
            onClick={() => setCartItem([food, ...isCartItem])}
          >
            선택
          </button>
        </FoodItem>
      ))}
    </ul>
  ) : (
    <p>메뉴가 존재하지 않습니다</p>
  );
}
