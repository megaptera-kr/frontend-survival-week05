import fixtures from '../fixtures';
import useFetchRestaurants from './useFetchRestaurants';

jest.mock('./useFetchRestaurants', () => () => fixtures.restaurants);

describe('useFetchRestaurants', () => {
  it('get restaurants when calls useFetchRestaurants', () => {
    const restaurants = useFetchRestaurants();

    expect(restaurants).toHaveLength(fixtures.restaurants.length);
  });
});
