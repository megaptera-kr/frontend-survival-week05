import fixtures from '../fixtures';
import filterRestaurants from './filterRestaurants';

describe('filterRestaurants', () => {
  it('return filteredRestaurants with filter text and category', () => {
    const filterText = '김밥';
    const filterCategory = '한식';
    const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
      filterText,
      filterCategory,
    });

    expect(filteredRestaurants).toHaveLength(1);
  });
});
