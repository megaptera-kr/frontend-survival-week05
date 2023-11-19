import { RestaurantItemProps } from '../../interfaces/RestaurantList.interface';
import Menues from '../Menues/Menues';

function RestaurantItem({ restaurant, handleAddCart }: RestaurantItemProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Menues menues={restaurant.menu} handleAddCart={handleAddCart} />
      </td>
    </tr>
  );
}

export default RestaurantItem;
