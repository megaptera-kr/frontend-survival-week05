import { render, screen } from '@testing-library/react';

import FilteredRestaurantTable from './FilteredRestaurantTable';

import fixtures from '../../../fixtures';

describe('FilteredRestaurantTable', () => {
  const { restaurants } = fixtures;

  it('renders restaurants', () => {
    render(<FilteredRestaurantTable restaurants={restaurants} />);

    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
  });
});
