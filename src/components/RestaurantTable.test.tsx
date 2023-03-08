import { render } from '@testing-library/react';
import fixtures from '../fixtures';

import RestaurantTable from './RestaurantTable';

describe('RestaurantTable', () => {
  it('renders without crash', () => {
    render(<RestaurantTable restaurants={fixtures.restaurants} />);
  });
});
