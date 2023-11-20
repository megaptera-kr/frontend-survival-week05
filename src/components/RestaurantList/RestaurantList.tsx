import { RestaurantListProps } from '../../interfaces/RestaurantList.interface';
import Menues from '../Menues/Menues';

function RestaurantList({ restaurants, handleAddCart }: RestaurantListProps) {
  return (
    <div className="restaurantWrap">
      <h3 className="restaurantTitle">레스토랑 목록</h3>
      { restaurants?.length === 0 ? <p className="no-list">검색 결과가 없습니다.</p>
        : (
          <table>
            <thead>
              <tr>
                <th className="restaurantName" scope="col">매장명</th>
                <th className="restaurantCategory" scope="col">업종</th>
                <th scope="col">가격</th>
              </tr>
            </thead>
            <tbody>
              {restaurants?.map((restaurant) => (
                <tr key={`restaurant_${restaurant.id}`}>
                  <td>
                    {restaurant.name}
                  </td>
                  <td>
                    {restaurant.category}
                  </td>
                  <td>
                    <Menues menues={restaurant.menu} handleAddCart={handleAddCart} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
}

export default RestaurantList;
