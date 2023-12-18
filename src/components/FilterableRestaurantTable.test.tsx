import { render, screen } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';
import fixtures from '../../fixtures';

describe('FilterableRestaurantTable ', () => {
  const { restaurants } = fixtures;
  it('renders FilterableRestaurantTable', async () => {
    render(<FilterableRestaurantTable restaurants={restaurants} />);

    screen.getByText(/메가반점/);
    screen.getByText(/메리김밥/);
    screen.getByText(/혹등고래카레/);
  });
});
