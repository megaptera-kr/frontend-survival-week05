import Restaurant from '../types/Restaurant';
import MenuRow from './MenuRow';

interface RestaurantRowProps {
  restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant } : RestaurantRowProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td style={{ paddingInline: '2rem' }}>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((food) => (
            <MenuRow key={food.id} food={food} />
          ))}
        </ul>
      </td>
    </tr>
  );
}
