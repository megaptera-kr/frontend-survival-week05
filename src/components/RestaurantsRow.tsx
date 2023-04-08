import Restaurants from '../types/Restaurants';
import MenuItem from './MenuItem';

interface RestaurantsRowProps {
  restaurants: Restaurants[];
}

export default function RestaurantsRow({ restaurants }: RestaurantsRowProps) {
  return (
    <tbody style={{ textAlign: 'center' }}>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <td>
            {restaurant.menu.map((menuItem) => (
              <MenuItem key={menuItem.id} menuItem={menuItem} />
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
