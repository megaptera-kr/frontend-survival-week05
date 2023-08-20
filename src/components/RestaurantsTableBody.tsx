import { Restaurant } from '../types/restaurants';
import priceToLocal from '../utils/priceToLocal';

type RestaurantsTableBodyProps = {
  restaurants: Restaurant[]
}

export default function RestaurantsTableBody({
  restaurants,
}: RestaurantsTableBodyProps) {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <td>
            <ul>
              {restaurant.menu.map((menu) => (
                <li
                  key={menu.id}
                  style={{
                    display: 'flex',
                    paddingBlock: '0.5em',
                  }}
                >
                  <span>
                    {`${menu.name}(${priceToLocal(menu.price)}원)`}
                  </span>
                  <button
                    type="button"
                    style={{
                      marginLeft: '0.5rem',
                    }}
                  >
                    선택
                  </button>
                </li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
