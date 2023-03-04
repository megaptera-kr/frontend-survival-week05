import { render } from '@testing-library/react';
import FilterableRestaurantTable from './FilterableRestaurantTable';
import fixtures from '../fixtures';

test('render component', () => {
  render(<FilterableRestaurantTable
    restaurants={fixtures.restaurants}
  />);
});
