import { render, screen } from '@testing-library/react';

import RestaurantRow from './RestaurantRow';

import foods from '../fixtures/foods';

describe('RestaurantRow', () => {
  it('render RestaurantRow', () => {
    const restaurant = {
      id: 'RESTAURANT_01',
      category: '중식',
      name: '메가반점',
      menu: [...foods],
    };
    render(<RestaurantRow restaurant={restaurant} />);

    screen.getByText(/메가반점/);
    screen.getByText(/중식/);
  });
});
