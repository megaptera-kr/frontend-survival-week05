import { render, screen } from '@testing-library/react';
import fixtures from '../fixtures';
import RestaurantTable from './RestaurantTable';

test('RestaurantTable', () => {
  // given
  const { restaurants } = fixtures;
  // when
  render((
    <RestaurantTable
      restaurants={restaurants}
    />
  ));

  // then
  screen.getByText('메가반점');
});
