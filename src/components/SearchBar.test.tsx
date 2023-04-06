import { render, screen } from '@testing-library/react';

import fixtures from '../../fixtures';
import RestaurantTable from './RestaurantTable';

describe('RestaurantTable', () => {
  it('renders without crash', () => {
    render(<RestaurantTable restaurants={fixtures.restaurants} />);

    expect(screen.getByText(/식당 이름/)).toBeInTheDocument();
    expect(screen.getByText(/종류/)).toBeInTheDocument();
  });
});
