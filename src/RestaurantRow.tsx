import Menu from './Menu';
import Restaurants from './types/Restaurants';

type RestaurantRowprops = {
    restaurant: Restaurants
}
export default function RestaurantRow({ restaurant }:RestaurantRowprops) {
  const { name, category, menu } = restaurant;
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <Menu menu={menu} />
      </td>
    </tr>
  );
}
