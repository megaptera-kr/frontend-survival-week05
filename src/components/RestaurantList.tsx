import { RestaurantList } from '../interfaces/RestaurantList.interface';
import Menu from './Menu';

export interface RestaurantListProps {
  restaurants: RestaurantList[]
}

function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <>
      <h3>레스토랑 목록</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">매장명</th>
            <th scope="col">업종</th>
            <th scope="col">가격</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <tr key={`restaurant_${restaurant.id}`}>
              <td>
                {restaurant.name}
              </td>
              <td>
                {restaurant.category}
              </td>
              <td>
                <Menu menues={restaurant.menu} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default RestaurantList;
