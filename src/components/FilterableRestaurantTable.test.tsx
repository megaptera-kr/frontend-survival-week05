import { render, screen } from "@testing-library/react"
import fixtures from "../fixtures";
import FilterableRestaurantTable from "./FilterableRestaurantTable"

test('FilterableRestaurantTable', () => {
  // given
  const restaurants = fixtures.restaurants;
  // when
  render((
    <FilterableRestaurantTable
      restaurants = {restaurants}
    />
  ));

  // then
  screen.getByText('메가반점');
})