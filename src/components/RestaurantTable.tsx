import { useLocalStorage } from 'usehooks-ts';
import type { Menu, Restaurants } from '../types/restaurants';
import MenuList from './MenuList';

type RestaurantTableProps = {
  restaurants: Restaurants[]
};

function RestaurantTable({ restaurants }: RestaurantTableProps) {
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
                    <MenuList key={food.id} food={food} />
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
