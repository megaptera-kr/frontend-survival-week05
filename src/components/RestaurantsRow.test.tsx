import { render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import RestaurantsRow from './RestaurantsRow';

describe('RestaurantsRow', () => {
  const restaurant = {
    id: 'RESTAURANT_01',
    category: '중식',
    name: '메가반점',
    menu: [...fixtures.foods],
  };

  const onAddCart = jest.fn();

  function renderRestaurantsRow() {
    render((
      <table>
        <tbody>
          <RestaurantsRow
            restaurant={restaurant}
            onAddCart={onAddCart}
          />
        </tbody>
      </table>
    ));
  }

  it('renders restaurant information', () => {
    renderRestaurantsRow();

    screen.getByText(/메가반점/);
    screen.getByText(/중식/);
    screen.getByText(/짜장면/);
  });
});
