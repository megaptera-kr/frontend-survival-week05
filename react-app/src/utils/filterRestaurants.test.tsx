import { waitFor } from '@testing-library/react';
import fixtures from '../fixtures';

import filterRestaurants from './filterRestaurants';

test('filterRestaurants', () => {
  const { restaurants } = fixtures;
  const filterText = '메가';
  const filterCategory = '중식';
  const res = restaurants.filter(
    (el) => el.category === filterCategory && el.name.includes(filterText),
  );

  waitFor(() => {
    expect(filterRestaurants(restaurants, { filterText, filterCategory })).toEqual(res);
  });
});
