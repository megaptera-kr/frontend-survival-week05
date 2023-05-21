import { render, screen } from '@testing-library/react';

import fixtures from '../../fixtures';

import RestaurantRow from './RestaurantRow';

describe('<RestaurantRow />', () => {
  const restaurant = fixtures.restaurants[0];

  it('render restaurant row', () => {
    render(
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>,
    );

    screen.getByText(/메가반점/);
    screen.getByText(/중식/);
  });
});
