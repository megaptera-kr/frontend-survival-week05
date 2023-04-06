import { render, screen } from '@testing-library/react';

import RestaurantRow from './RestaurantRow';

import fixtures from '../fixtures';

describe('<RestaurantRow />', () => {
  it('renders properly', () => {
    render(<RestaurantRow restaurant={fixtures.restaurants[0]} />, {
      container: document.body.appendChild(document.createElement('tbody')),
    });

    screen.getByText('중식');
    screen.getByText('메가반점');
    screen.getByTestId('Menu');
  });
});
