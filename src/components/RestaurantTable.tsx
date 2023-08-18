import { useLocalStorage } from 'usehooks-ts';
import type { Menu, Restaurants } from '../types/restaurants';

type RestaurantTableProps = {
  restaurants: Restaurants[]
};

function RestaurantTable({ restaurants }: RestaurantTableProps) {
  const [cart, setCart] = useLocalStorage<Menu[]>('cart', []);

  const handleClickBtn = (food: Menu) => {
    setCart([...cart, food]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={restaurant.id}>
              <td>{restaurant.name}</td>
              <td>{restaurant.category}</td>
              <td>
                <ul style={{ listStyle: 'none' }}>
                  {restaurant.menu.map((food) => (
                    <li key={food.id} style={{ marginBottom: '1rem' }}>
                      <span>{`${food.name}(${food.price.toLocaleString()}원)`}</span>
                      <button
                        type="button"
                        name={`#${food.name}`}
                        style={{ float: 'right', marginLeft: '0.5rem' }}
                        onClick={() => handleClickBtn(food)}
                      >
                        선택
                      </button>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantTable;
