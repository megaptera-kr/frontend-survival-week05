import { render, screen } from '@testing-library/react';
import RestaurantRow from './RestaurantRow';
import fixtures from '../../fixtures';

describe('RestaurantRow', () => {
  const restaurant = {
    id: 'RESTAURANT_02',
    category: '한식',
    name: '메리김밥',
    menu: [...fixtures.foods],
  };

  it('renders RestaurantRow', () => {
    render((
      <table>
        <tbody>
          <RestaurantRow restaurant={restaurant} />
        </tbody>
      </table>
    ));

    screen.getByText(/메리김밥/);
    screen.getByText(/한식/);
    screen.getByText('짜장면(8,000원)');
  });
});
