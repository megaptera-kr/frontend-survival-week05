import { render, screen } from '@testing-library/react';
import fixtures from '../fixtures';
import RestaurantTable from './RestaurantTable';

describe('RestaurantTable', () => {
  function renderRestaurantTable() {
    render(<RestaurantTable
      restaurants={fixtures.restaurants}
    />);
  }
  it('renders witout crush', () => {
    renderRestaurantTable();

    screen.getByText('식당 이름');
  });
});
