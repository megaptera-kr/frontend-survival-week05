import useFetchRestaurants from './useFetchRestaurants';

import fixtures from '../fixtures';

jest.mock('usehooks-ts', () => ({
  useFetch: () => ({
    data: {
      restaurants: fixtures.restaurants,
    },
  }),
}));

describe('usefetchRestaurants', () => {
  it('returns retaurants', () => {
    const restaurants = useFetchRestaurants();

    expect(restaurants[0].category).toBe('일식');
    expect(restaurants[1].name).toBe('중국집');
  });
});
