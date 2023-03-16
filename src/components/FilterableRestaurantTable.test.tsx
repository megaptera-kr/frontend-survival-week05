import { render } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';
import fixtures from '../../fixtures';

describe('FilterableRestaurantTable ', () => {
  it('renders without crash', () => {
    render(<FilterableRestaurantTable restaurants={fixtures.restaurants} />);
  });
});
