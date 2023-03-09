import { render } from '@testing-library/react';
import fixtures from '../../fixtures';
import FilterableRestaurantTable from './FilterableRestaurantTable';

describe('FilterableRestaurantTable', () => {
  it('renders without a crash', () => {
    render(<FilterableRestaurantTable restaurants={fixtures.restaurants} />);
  });
});
