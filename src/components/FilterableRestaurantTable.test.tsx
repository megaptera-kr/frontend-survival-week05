import { render, waitFor, screen } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';

describe('RestaurantTable ', () => {
  it('renders restaurantTable', async () => {
    render(<FilterableRestaurantTable />);

    await waitFor(() => {
      screen.getByText(/검색/);
      screen.getByText(/식당 이름/);
    });
  });
});
