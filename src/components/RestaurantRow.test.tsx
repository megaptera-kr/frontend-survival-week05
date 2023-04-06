import { render, screen } from '@testing-library/react';

import RestaurantRow from './RestaurantRow';
import fixtures from '../../fixtures';

describe('RestaurantRow', () => {
  it('renders without crash', () => {
    render(<RestaurantRow restaurant={fixtures.restaurants[0]} />);

    expect(screen.getByText(/중식/)).toBeInTheDocument();
    expect(screen.getByText(/메가반점/)).toBeInTheDocument();
  });
});
