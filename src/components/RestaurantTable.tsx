import { Restaurant } from '../types';
import MenuRow from './MenuRow';

type Props = {
  restaurants: Restaurant[]
}

function RestaurantTable({ restaurants }:Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>
              {restaurant.name}
            </td>
            <td>
              {restaurant.category}
            </td>
            <td>
              <ul>
                {restaurant.menu.map((menu) => (
                  <MenuRow key={menu.id} menu={menu} />
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
