
import { restaurants } from '../fixtures/restaurants';
import filterRestaurants from './filterRestaurants';

describe('filterRestaurants test', () => {

  it('search restaurant with text', () => {
    const filterText = '로드';
    const filterCategory = '전체';
    const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });
    expect(filteredRestaurants[0].name).toContain('로드')
  });

  it('filter with category', () => {
    const filterText = '';
    const filterCategory = '한식';
    const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });
    const expectList = restaurants.filter(({ category }) => category === filterCategory);
    expect(filteredRestaurants).toStrictEqual(expectList)
  });

  it('filter with category and search text', () => {
    const filterText = '메리';
    const filterCategory = '한식';
    const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });
    const expectList = restaurants.filter(({ category }) => category === filterCategory)?.filter(({ name }) => name.indexOf(filterText) >= 0);
    expect(filteredRestaurants).toStrictEqual(expectList)
  });
});
