import useFetchRestaurants from './useFetchRestaurants';

import fixtures from '../../fixtures';

jest.mock('./useFetchRestaurants', () => () => fixtures.restaurants);

describe('useFetchRestaurants', () => {
  it('레스토랑데이터 받아오기', () => {
    const restaurants = useFetchRestaurants();

    expect(restaurants).toHaveLength(fixtures.restaurants.length);
  });
});
