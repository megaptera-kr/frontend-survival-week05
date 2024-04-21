import Restaurant from '../../types/Restaurant';
import Menu from '../Menu';

type RestaurantTableRowProps = {
  restaurant:Restaurant
}

function RestaurantTableRow({ restaurant }:RestaurantTableRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Menu menu={restaurant.menu} />
      </td>
    </tr>
  );
}

export default RestaurantTableRow;
