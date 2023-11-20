import { render, screen } from '@testing-library/react';
import FilterableRestaurantTable from './FilterableRestaurantTable';
import fixtures from '../../fixtures';

describe('FilterableRestaurantTable', () => {
  const { restaurants } = fixtures;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders FilterableRestaurantTable', () => {
    render((
      <FilterableRestaurantTable restaurants={restaurants} />
    ));

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
