import { render, screen } from '@testing-library/react';
import fixtures from '../fixtures';

import RestaurantRow from './RestaurantRow';

describe('RestaurantRow', () => {
  const tableBody = document.createElement('tbody');
  const { container } = render(<RestaurantRow restaurant={fixtures.restaurants[0]} />, {
    container: document.body.appendChild(tableBody),
  });
  it('renders without crash', () => {
    expect(container).toBeTruthy();
    expect(screen.getByText(fixtures.restaurants[0].name)).toBeInTheDocument();
  });
});
