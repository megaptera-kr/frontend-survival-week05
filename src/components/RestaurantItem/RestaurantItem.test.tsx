import { render, screen } from '@testing-library/react';

import RestaurantItem from './RestaurantItem';

import fixtures from '../../../fixtures';

describe('RestaurantItem', () => {
  const restaurant = {
    id: 'RESTAURANT_01',
    category: '중식',
    name: '메가반점',
    menu: [...fixtures.foods],
  };

  it('renders restaurant information', () => {
    render((
      <table>
        <tbody>
          <RestaurantItem restaurant={restaurant} />
        </tbody>
      </table>
    ));

    screen.getByText(/메가반점/);
    screen.getByText(/중식/);
    screen.getByText(/짜장면/);
  });
});
