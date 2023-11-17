import { render, waitFor, screen } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';

describe('RestaurantTable ', () => {
  it('renders restaurantTable', async () => {
    render(<FilterableRestaurantTable />);

    // await waitFor(() => {
    //   screen.getByText(/메가반점/);
    //   screen.getByText(/메리김밥/);
    // });
  });
});
