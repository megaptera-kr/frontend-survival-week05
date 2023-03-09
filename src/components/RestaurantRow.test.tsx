import { render } from '@testing-library/react';
import fixtures from '../../fixtures';
import RestaurantRow from './RestaurantRow';

describe('RestaurantRow', () => {
  it('renders without a crash', () => {
    const tableBody = document.createElement('tbody');

    render(<RestaurantRow restaurant={fixtures.restaurants[0]} />, {
      container: document.body.appendChild(tableBody),
    });
  });
});
