import { render, screen } from '@testing-library/react';

import fixtures from '../fixtures';

import RestaurantTable from './RestaurantTable';

describe('RestaurantTable', () => {
  it('renders without a crash', () => {
    render(<RestaurantTable restaurants={fixtures.restaurants} />);

    expect(screen.getByText('한식')).toBeInTheDocument();
    expect(screen.getByText('중식')).toBeInTheDocument();
    expect(screen.getByText('일식')).toBeInTheDocument();
  });
});
