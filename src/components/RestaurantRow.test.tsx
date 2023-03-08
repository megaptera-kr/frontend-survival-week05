import { render, screen } from '@testing-library/react';
import fixtures from '../fixtures';
import RestaurantRow from './RestaurantRow';

describe('RestaurantRow', () => {
  function renderRestaurantRow() {
    render(
      <RestaurantRow
        restaurant={fixtures.restaurants[0]}
      />,
    );
  }

  it('can see name and category of restaurant', () => {
    renderRestaurantRow();

    screen.getByText(/메가/);
    screen.getByText('중식');
  });
});
