import RestaurantsRow from './RestaurantsRow';
import Restaurants from '../types/Restaurants';
import Menu from '../types/Menu';

interface RestaurantsTableProps {
    restaurants: Restaurants[];
    onAddCart: (menuItem: Menu) => void;
}

export default function RestaurantsTable({ restaurants, onAddCart }: RestaurantsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: 110 }}>식당 이름</th>
          <th style={{ width: 90 }}>종류</th>
          <th style={{ width: 250 }}>메뉴</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: 'center' }}>
        {restaurants.map((restaurant) => (
          <RestaurantsRow
            key={restaurant.id}
            restaurant={restaurant}
            onAddCart={onAddCart}
          />
        ))}
      </tbody>
    </table>
  );
}
