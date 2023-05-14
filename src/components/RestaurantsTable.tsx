import Restaurant from '../types/Restaurants';
import ReataurantRow from './ReataurantRow';

type RestaurantsTableProps = {
  restaurants: Restaurant[];
}

export default function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
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
        {
          restaurants.map((restaurant: Restaurant) => (
            <ReataurantRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))
        }
      </tbody>
    </table>
  );
}
