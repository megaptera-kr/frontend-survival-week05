import { Restaurant } from '../types/restaurants';
import priceToLocal from '../utils/priceToLocal';
import MenuList from './MenuList';
import MenuListItem from './MenuListItem';

type RestaurantsTableBodyProps = {
  restaurants: Restaurant[]
}

export default function RestaurantsTableBody({
  restaurants,
}: RestaurantsTableBodyProps) {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <td>
            <MenuList menuList={restaurant.menu} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
