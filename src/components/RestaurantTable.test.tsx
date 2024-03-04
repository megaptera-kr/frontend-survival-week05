import { render } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

import restaurants from '../../fixtures/restaurants';

test('RestaurantRow', () => {
  // When
  const { getByText } = render(<RestaurantTable restaurants={restaurants} />);

  // Then
  expect(getByText(/메가반점/)).toBeTruthy();
  expect(getByText(/중식/)).toBeTruthy();
  expect(getByText(/한식/)).toBeTruthy();
});
