import RestaurantRow from './RestaurantRow';
import Restaurants from './types/Restaurants';

type RestaurantTableProps = {
    filteredCategories : Restaurants[];
}

export default function RestaurantTable({ filteredCategories }: RestaurantTableProps) {
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
        {filteredCategories.map((restaurant) => (
          <RestaurantRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}
