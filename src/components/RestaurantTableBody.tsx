import { useContext } from 'react';

import RestaurantsContext from '../../hooks/context/RestaurantsContext';

import RestaurantsTableBodyMenu from './RestaurantsTableBodyMenu';

export default function RestaurantsTableBody() {
  const restaurants = useContext(RestaurantsContext);
  return (
    <>
      {
        // eslint-disable-next-line react/destructuring-assignment
        restaurants.map((restaurant, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={`${restaurant.id}-${index}`}>
            <td>
              {restaurant.name}
            </td>
            <td>
              {restaurant.category}
            </td>
            <td>
              <RestaurantsTableBodyMenu
                menu={restaurant.menu}
              />
            </td>
          </tr>
        ))
      }
    </>
  );
}
