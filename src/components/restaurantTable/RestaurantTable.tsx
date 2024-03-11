import Restaurant from '../../types/Restaurant';
import RestaurantTableRow from './RestaurantTableRow';

type RestaurantTableProps = {
  restaurants: Restaurant[]
}

function RestaurantTable(
  { restaurants }: RestaurantTableProps,
) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ paddingInline: '2rem' }}>
              식당 이름
            </th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <RestaurantTableRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantTable;
