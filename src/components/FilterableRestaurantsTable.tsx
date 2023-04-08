import Restaurants from '../types/Restaurants';

interface FilterableRestaurantsTableProps {
  restaurants: Restaurants[];
}

export default function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: 110 }}>식당 이름</th>
          <th style={{ width: 90 }}>종류</th>
          <th style={{ width: 200 }}>메뉴</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: 'center' }}>
        {restaurants.map((restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
              {restaurant.menu.map((menuItem) => (
                <ul key={menuItem.id} style={{ listStyle: 'none', padding: 0 }}>
                  <li>
                    {menuItem.name}
                    (
                    {(menuItem.price).toLocaleString('ko-kr')}
                    원)
                  </li>
                </ul>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
