import { render, screen } from "@testing-library/react"
import fixtures from "../fixtures";
import RestaurantRow from "./RestaurantRow"

test('RestaurantRow', () => {
  // given
  const restaurants = fixtures.restaurants;
  
  // when
  render((
    <table>
      <thead>
        <tr>
          <th style={{ paddingInline: '2rem' }}>
            식당 이름
          </th>
          <th>
            종류
          </th>
          <th>
            메뉴
          </th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  ));

  // then
  screen.getByText('메가반점');
})