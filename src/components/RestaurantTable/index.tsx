import useFetchRestaurants from '../../hooks/useFetchRestaurants';
import Menu from '../Menu';

function RestaurantTable() {
  const restaurants = useFetchRestaurants(); // TODO: MSW 테스트

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
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
              <Menu menu={restaurant.menu} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
