import { Restaurants } from '../../types';
import RestaurantRow from './RestaurantRow';

const commonStyle = 'border-2 border-green-500';

type Props = {
  filteredRestaurants: [] | Restaurants[]
}
export default function RestaurantTable({
  filteredRestaurants,
}:Props) {
  return (
    <table className="table-auto border-collapse w-full mt-4">
      <thead>
        <tr>
          <th className={commonStyle}>식당이름</th>
          <th className={commonStyle}>종류</th>
          <th className={commonStyle}>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {filteredRestaurants.length > 0 ? filteredRestaurants.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            name={restaurant.name}
            category={restaurant.category}
            menu={restaurant.menu}
          />
        )) : (
          <tr>
            <td colSpan={3} className={commonStyle}>식당이 존재하지 않습니다.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
